import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {tabBarAllowFontScaling: true,
        tabBarLabelStyle:{
          fontSize: 14,
        },
        tabBarIcon: ({focused, color, size}) => {
          return
        },
        tabBarActiveTintColor:"tomato",
        }
      }>
        <Tab.Screen name="Домашняя" component={HomeScreen} />
        <Tab.Screen name="Настройки" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
