import React, {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddTeaScreen from '../screens/addTeaScreen/addteaScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import ProfilScreen from '../screens/profilScreen/ProfilScreen';
import SearchAddTeaScreen from '../screens/searchAddtea/SearchAddTea';

import ListIcon from '../assets/icon/navBar/ListIcon';
import ProfilIcon from '../assets/icon/navBar/ProfilIcon';
import TimerIcon from '../assets/icon/navBar/TimerIcon';
import CreateIcon from '../assets/icon/navBar/CreateIcon';
import SearchIcon from '../assets/icon/navBar/SearchIcon';

import colors from '../styles/colors';
import CurrentTimerIcon from '../assets/icon/navBar/currentIcon/CurrentTimerIcon';

const Tab = createBottomTabNavigator();
const tabs = [
  {name: 'HomeScreen'},
  {name: 'ProfilScreen'},
  {name: 'TimerScreen'},
  {name: 'AddTeaScreen'},
  {name: 'SearchAddTeaScreen'},
];

const FocusedColorTea = 'Thé Blanc';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Liste"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ListIcon
                width={25}
                height={25}
                colorPrimary={colors.tea[FocusedColorTea].color}
              />
            ) : (
              <ListIcon width={25} height={25} />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 8,
                color: focused
                  ? colors.tea[FocusedColorTea].color
                  : colors.darkPrimary,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Liste{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfilIcon
                width={25}
                height={25}
                colorSecondary="transparent"
                colorTertiary={colors.tea[FocusedColorTea].color}
              />
            ) : (
              <ProfilIcon width={25} height={25} />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 8,
                color: focused
                  ? colors.tea[FocusedColorTea].color
                  : colors.darkPrimary,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Profil{' '}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Minuteur"
        component={TimerScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <CurrentTimerIcon
                style={{
                  shadowColor: colors.primary,
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                  marginTop: -30,
                  borderRadius: 999,
                }}
              />
            ) : (
              <TimerIcon
                style={{
                  shadowColor: colors.primary,
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                  marginTop: -30,
                  borderRadius: 999,
                }}
              />
            ),
          tabBarLabel: ({}) => <Text />,
        }}
      />
      <Tab.Screen
        name="Création"
        component={AddTeaScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <CreateIcon
                width={25}
                height={25}
                colorPrimary={colors.tea[FocusedColorTea].color}
                colorTertiary={colors.tea[FocusedColorTea].color}
              />
            ) : (
              <CreateIcon width={25} height={25} />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 8,
                color: focused
                  ? colors.tea[FocusedColorTea].color
                  : colors.darkPrimary,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Création{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={SearchAddTeaScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <SearchIcon
                width={25}
                height={25}
                colorPrimary={colors.tea[FocusedColorTea].color}
              />
            ) : (
              <SearchIcon width={25} height={25} />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 8,
                color: focused
                  ? colors.tea[FocusedColorTea].color
                  : colors.darkPrimary,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Recherche
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
