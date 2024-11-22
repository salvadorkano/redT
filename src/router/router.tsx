import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
// import SplashScreen from 'react-native-splash-screen';
import Auth from './authStack';
import MyDrawer from './drawer';
import HomeScreen from 'screens/Main/Home/home';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (Platform.OS === 'android') {
      // SplashScreen.hide();
      console.log('empieza la app');
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isLoggedIn ? 'MyDrawer' : 'Auth'}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
