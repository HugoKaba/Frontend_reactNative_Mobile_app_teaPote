import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Signin} from '../../services/authService/SigninService';
import LottieAnimation from '../../components/animation/signinAnim';
import animation from '../../assets/TeaCupAnimation.json';

const SigninScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const Login = async () => {
    try {
      await Signin(id, password);
      navigation.navigate('TabNav', {screen: 'Home'});
    } catch (error) {
      if (error.response) {
        console.error(
          'Erreur lors de la connexion:',
          error.response.status,
          error.response.data,
        );
      } else if (error.request) {
        console.error('Aucune réponse du serveur:', error.request);
      } else {
        console.error('Erreur lors de la connexion:', error.message);
      }
      console.error('Erreur lors de la connexion:', error.r);
    }
  };

  const SignupPage = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bon retour !</Text>
      <LottieAnimation source={animation} />
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        placeholderTextColor="#848CB6"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#848CB6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SignupPage}>
        <Text style={styles.signupText}>Pas encore de compte ?</Text>
        <Text style={styles.signupTextUnderline}>S’inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40, // Add some padding to ensure the header text is not cut off
  },
  headerText: {
    fontSize: 40,
    fontWeight: '600', // semi-bold
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomColor: '#1C213C',
    borderBottomWidth: 1,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    marginTop: 20,
    width: 205,
    height: 48,
    backgroundColor: '#C1C6E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    paddingTop: 20,
    width: 241,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  signupTextUnderline: {
    width: 241,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default SigninScreen;
