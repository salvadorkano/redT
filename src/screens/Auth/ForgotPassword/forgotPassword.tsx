import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './forgotPasswordStyle';
import {routerProps} from 'router/RootStackParams';
import logo from 'images/LogoTec.png';
import {colors} from 'colors';
import ButtonComponent from 'components/button/button';
import forgotPasswordStyle from './forgotPasswordStyle';
import InputComponent from 'components/input/CustomInput';

function ForgotPasswordScreen({navigation}: routerProps<'ForgotPassword'>) {
  const [email, setEmail] = useState<string>('');

  const Actionbutton = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    console.log('Hola2');
    return () => {
      console.log('RETURN');
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.containerHeader}>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.textBack}>Regresar</Text>
            </Pressable>
            <Image
              style={styles.imageHeader}
              resizeMode="contain"
              source={logo}
            />
          </View>
          <View>
            <Text style={forgotPasswordStyle.title}>Recuperar contraseña</Text>
            <Text style={forgotPasswordStyle.description}>
              Ingresa tu correo electrónico con el que te registraste y
              enviaremos un mail con las instrucciones para recuperar tu
              contraseña
            </Text>
          </View>
          <View style={forgotPasswordStyle.containerInput}>
            <InputComponent
              style={forgotPasswordStyle.inputEmail}
              placeholder="Correo electrónico"
              value={email}
              onChange={newText => setEmail(newText)} // Actualiza el estado 'text' al escribir
              placeholderColor={colors.neutral60}
              keyboardType="email-address"
            />
            <ButtonComponent
              onPress={() => Actionbutton()}
              styleButton={forgotPasswordStyle.buttonStyle}
              buttonText={'Recuperar contraseña'}
              styleText={forgotPasswordStyle.buttonText}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ForgotPasswordScreen;
