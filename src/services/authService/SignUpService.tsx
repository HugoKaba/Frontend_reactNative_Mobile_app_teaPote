import apiClient from '../../../config/axios/apiConfig';

export const Signup = async (
  username: String,
  email: String,
  password: String,
  navigation: any,
) => {
  try {
    const response = await apiClient.post('/auth/signup', {
      name: username,
      mail: email,
      password: password,
      urlImage: '../assets/userPng.png',
    });
    navigation.navigate('Signin');
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
  }
};
