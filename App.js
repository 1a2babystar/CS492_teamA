import React from 'react';

import {StyleSheet, StatusBar} from 'react-native';

import LoginScreen from './app/screens/LoginScreen';
import MainScreen from './app/screens/MainScreen';
import OngoingScreen from './app/screens/OngoingScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import SelectScreen from './app/screens/SelectScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Main = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

function SettingsTabs() {
  return (
    <TabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Main') {
            return <FontAwesome5 name="home" color={color} size={size} />;
          } else if (route.name === 'Ongoing') {
            return <FontAwesome5 name="tasks" color={color} size={size} />;
          } else {
            return <FontAwesome5 name="user" color={color} size={size} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#23A6D9',
        inactiveTintColor: 'gray',
      }}>
      <TabNavigator.Screen name="Main" component={MainScreen} />
      <TabNavigator.Screen name="Ongoing" component={OngoingScreen} />
      <TabNavigator.Screen name="Profile" component={ProfileScreen} />
    </TabNavigator.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name="Login" component={LoginScreen} />
        <Main.Screen name="Select" component={SelectScreen} />
        <Main.Screen name="TabNavigator" component={SettingsTabs} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
