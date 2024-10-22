import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './registerStyle';
import {routerProps} from 'router/RootStackParams';
function RegisterScreen({navigation}: routerProps<'Register'>) {
  useEffect(() => {
    console.log('Hola2');
    return () => {
      console.log('RETUNR');
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default RegisterScreen;
