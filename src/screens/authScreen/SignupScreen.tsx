import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Signup} from '../../services/authService/SignUpService';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignupButton = () => {
    Signup(username, email, password, navigation);
  };

  const SigninPage = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bienvenue ! </Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        placeholderTextColor="#848CB6"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#848CB6"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#848CB6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={SignupButton}>
        <Text style={styles.buttonText}>Créer mon compte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SigninPage}>
        <Text style={styles.signupText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to start from the top
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 80, // Adjust paddingTop to move components higher
  },
  headerText: {
    fontSize: 36,
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
    fontWeight: '900',
  },
  signupText: {
    color: '#000',
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default SignupScreen;
