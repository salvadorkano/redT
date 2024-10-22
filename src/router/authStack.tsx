import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import LoginScreen from 'screens/Auth/Login/login';
import RegisterScreen from 'screens/Auth/Register/register';
import ForgotPasswordScreen from 'screens/Auth/ForgotPassword/forgotPassword';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
}

export default Auth;
