import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './components/Home'
import LibraryScreen from './components/Library'
import ProfileScreen from './components/Profile'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63'
      }}
      tabBarOptions={{
        activeTintColor: '#FFB23A',
        inactiveTintColor: '#e0e0e0',
            style: {
                  backgroundColor: '#09111A',
                  border: 0,
                  padding: 4
            },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Biblioteca"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
