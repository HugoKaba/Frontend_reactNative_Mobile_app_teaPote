import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

async function getRefreshToken() {
  const token = await AsyncStorage.getItem('refresh_token');
  return token;
}

async function getAccessToken() {
  const token = await AsyncStorage.getItem('access_token');
  return token;
}

const refreshAuthToken = async () => {
  try {
    const token = await getRefreshToken();
    const response = await axios.post(
      `${process.env.API_URL}/token/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const {access_token, refresh_token} = response.data.tokens;
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
    return access_token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    await AsyncStorage.setItem('connected', 'false');
    throw error;
  }
};

apiClient.interceptors.request.use(
  async config => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAuthToken();
        apiClient.defaults.headers.Authorization = 'Bearer ' + newToken;
        originalRequest.headers.Authorization = 'Bearer ' + newToken;
        return apiClient(originalRequest);
      } catch (err) {
        console.error('Failed to refresh token:', err);
        await AsyncStorage.setItem('connected', 'false');

        return Promise.reject(error);
      }
    } else {
      if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 400:
            console.error('Bad request:', error.response.data.message);
            break;
          case 401:
            console.error('Unauthorized:', error.response.data.message);
            break;
          default:
            console.error('Unexpected error:', error.response.data.message);
            break;
        }
      } else {
        console.error('Network error:', error.message);
      }
      return Promise.reject(error);
    }
  },
);

export default apiClient;
