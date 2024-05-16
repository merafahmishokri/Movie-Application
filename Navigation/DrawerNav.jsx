import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Favorite from '../Screens/Favorite';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Favorite" component={Favorite} />

        </Drawer.Navigator>
      );
}

const styles = StyleSheet.create({})

export default DrawerNav;

