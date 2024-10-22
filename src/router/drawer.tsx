/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProfileScreen from 'screens/Main/Profile/profile';
import CustomDrawerContent from '../screens/Drawer/CustomDrawer';
import {RootStackParamList} from './RootStackParams';
import {StyleSheet} from 'react-native';
import HomeScreen from 'screens/Main/Home/home';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';
import DetailsCardScreen from 'screens/Main/DetailsCard/DetailsCard';
import CreateCardScreen from 'screens/Main/CreateCard/CreateCard';

const Drawer = createDrawerNavigator<RootStackParamList>();
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: styles.drawerStyles,
        sceneContainerStyle: styles.contentStyle,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="DetailsCard" component={DetailsCardScreen} />
      <Drawer.Screen name="CreateCard" component={CreateCardScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  drawerStyles: {
    width: normalize(150),
    backgroundColor: 'transparent',
  },
  contentStyle: {
    backgroundColor: colors.white,
  },
});
