import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import Auth from './authStack';
import MyDrawer from './drawer';
import {useAuth} from '../context/AuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const {user} = useAuth();

  useEffect(() => {
    if (Platform.OS === 'android') {
      console.log('empieza la app');
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {!user ? (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
              gestureEnabled: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{
              gestureEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
