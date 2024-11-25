import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../screens/authScreen/SigninScreen';
import SignupScreen from '../screens/authScreen/SignupScreen';
import TabNavigator from './TabNavigator';
import DetailTeaScreen from '../screens/DetailScreen/detailTeaScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import * as SelectionContext from '../contexts/selection';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <SelectionContext.Provider>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNav"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailTeaScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Minuteur"
          component={TimerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SelectionContext.Provider>
  );
};

export default AppNavigator;
