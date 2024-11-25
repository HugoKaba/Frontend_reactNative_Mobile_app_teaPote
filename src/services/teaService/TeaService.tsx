import apiClient from '../../../config/axios/apiConfig';
export const getTea = async () => {
  try {
    const response = await apiClient.get('/tea/allTea');
    return response.data;
  } catch (error) {
    console.error('Error retrieving tea information:', error.message);
    throw error;
  }
};

export const addTea = async teaData => {
  try {
    const response = await apiClient.post('/tea/create', teaData);
    return response.data;
  } catch (error) {
    console.error('Error when adding a new tea entry:', error);
    throw error;
  }
};

export const deleteTea = async (teaId: number) => {
  try {
    const response = await apiClient.delete(`/tea/${teaId}`);
    return response.data;
  } catch (error) {
    console.error('Error when deleting a tea entry:', error);
    throw error;
  }
};

export const searchTea = async (name: string, type: string) => {
  try {
    const response = await apiClient.get(
      `/tea/search/tea?name=${name}&type=${type}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when searching for teas:', error);
    throw error;
  }
};
export const searchTeaAdmin = async (name: string, type: string) => {
  try {
    const response = await apiClient.get(
      `/tea/search/tea/admin?name=${name}&type=${type}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when searching for teas:', error);
    throw error;
  }
};
export const getCountry = async () => {
  try {
    const response = await apiClient.get(`/country/all`);
    return response.data;
  } catch (error) {
    console.error('Error when searching for teas:', error);
    throw error;
  }
};

export const getIngredient = async () => {
  try {
    const response = await apiClient.get(`/ingredients/all`);
    return response.data;
  } catch (error) {
    console.error('Error when searching for teas:', error);
    throw error;
  }
};

export const isFavorite = async (teaId: number) => {
  try {
    const response = await apiClient.patch(`/tea/isFavorite/${teaId}`);
    return response.data;
  } catch (error) {
    console.error('Error when deleting a tea entry:', error);
    throw error;
  }
};
export const copyTea = async (teaId: number) => {
  try {
    const response = await apiClient.post(`/tea/copiedAdminTea/${teaId}`);
    return response.data;
  } catch (error) {
    console.error('Error when adding a new tea entry:', error);
    throw error;
  }
};

export const getAdminTea = async () => {
  try {
    const response = await apiClient.get(`tea/search/tea/admin`);
    return response.data;
  } catch (error) {
    console.error('Error when searching for teas:', error);
    throw error;
  }
};
