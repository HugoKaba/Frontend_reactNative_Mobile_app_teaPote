import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const Signin = async (id: string, password: string) => {
  let requestData: any = {};
  if (/^\S+@\S+\.\S+$/.test(id)) {
    requestData = {
      mail: id,
      password: password,
    };
  } else {
    requestData = {
      name: id,
      password: password,
    };
  }
  try {
    const response = await axios.post(
      `${process.env.API_URL}/auth/signin`,
      requestData,
    );
    if (response.status >= 200 && response.status <= 299) {
      const {access_token, refresh_token} = response.data.token;
      await AsyncStorage.setItem('userId', id.toString());
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      await AsyncStorage.setItem('connected', 'true');
    }
  } catch (error: any) {
    if (error.response) {
      console.error(
        'Erreur lors de la connexion:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.error('Aucune réponse du serveur:', error.request);
    } else {
      console.error('Erreur lors de la connexion:', error);
    }
  }
};
