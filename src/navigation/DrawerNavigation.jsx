import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import CustomDrawerContainer from './CustomDrawerContainer';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        swipeEdgeWidth: 0, //stop drawer gesture
      }}
      drawerContent={props => <CustomDrawerContainer {...props} />}>
      <Drawer.Screen name="DRAWER_HOME" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
