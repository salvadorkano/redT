import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './RootStackParams';
import LoginScreen from 'screens/Auth/Login/login';
import RegisterScreen from 'screens/Auth/Register/register';
import ForgotPasswordScreen from 'screens/Auth/ForgotPassword/forgotPassword';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

export default Auth;
