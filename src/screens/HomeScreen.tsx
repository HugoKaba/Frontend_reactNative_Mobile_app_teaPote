import React, {useState, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TeaComponents from '../components/teaComponents';
import {useFocusEffect} from '@react-navigation/native';
import * as TeaContext from '../contexts/tea-owned';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomePageHeader from '../components/homepage/HomePageHeader';

const HomeScreen = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);

  const checkConnection = async () => {
    try {
      const connexionStatus = await AsyncStorage.getItem('connected');
      if (connexionStatus !== 'true') {
        navigation.replace('Signin');
      } else {
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Erreur lors de la vérification de la connexion:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkConnection();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      {isConnected && (
        <TeaContext.Provider>
          <HomePageHeader />
          <TeaComponents navigation={navigation} />
        </TeaContext.Provider>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
