import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../Screens/Home';
import Favorites from '../Screens/Favorite';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
          header:()=>null,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
        />
      <Tab.Screen name="Favorites" component={Favorites} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="favorite" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomNav;
