import logo from 'images/LogoTec.png';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import {AuthScreenProps} from 'router/RootStackParams';
import styles from './loginStyle';
import InputComponent from 'components/input/CustomInput';
import ButtonComponent from 'components/button/button';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';
import {reggexEmail} from 'utils/validations';
import {useAuth} from 'context/AuthContext';

const LoginScreen: React.FC<AuthScreenProps<'Login'>> = ({navigation}) => {
  const {login} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validate, setValidate] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [wifi, setWifi] = useState<string>('no wifi');

  useEffect(() => {
    console.log('wifi');

    fetch('https://google.com')
      .then(() => {
        setWifi('Hay wifi');
        console.log('Internet works');
      })
      .catch(() => {
        setWifi('No wifi');
        console.log('No internet');
      });
  }, []);

  useEffect(() => {
    if (email === '' || password === '') {
      setValidate(false);
    } else {
      validateEmail(email);
    }
  }, [email, password]);

  const validateEmail = (textEmail: string) => {
    let string = textEmail.trim();
    if (reggexEmail(string)) {
      setEmail(string);
      setShowError(false);
      setValidate(true);
    } else {
      setEmail(string);
      setShowError(true);
      setValidate(false);
    }
  };

  async function onLogin() {
    console.log('Entra');

    if (!validate || loading) {
      console.log('Entra validacion');

      return;
    }
    try {
      // const res = await authService.login(email, password);
      // console.log('res', res);

      console.log('Hola');
      setLoading(true);
      await login(email, password);
    } catch (error) {
      Alert.alert(
        'Error de inicio de sesión',
        error instanceof Error ? error.message : 'Error al iniciar sesión',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.containerScroll}>
          <View style={styles.containerImg}>
            <Image source={logo} />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.principalTitle}>¡Hola! {wifi}</Text>
            <Text style={styles.secundaryTitle}>
              Ingresa tus datos para iniciar sesión
            </Text>
          </View>
          <View style={styles.containerForm}>
            <InputComponent
              value={email}
              placeholder={'Correo electronico'}
              onChange={value => validateEmail(value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            {showError ? (
              <Text style={styles.styleError}>
                Formato de correo incorrecto.
              </Text>
            ) : null}
            <InputComponent
              value={password}
              onChange={setPassword}
              placeholder={'Contraseña'}
              type={'password'}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.styleForgotPassword}>Olvide contraseña</Text>
            </Pressable>
          </View>
          <View style={styles.containerButton}>
            <ButtonComponent
              loading={loading}
              disabled={!validate}
              onPress={onLogin}
              styleButton={
                validate
                  ? {backgroundColor: colors.primary, top: normalize(5)}
                  : {backgroundColor: colors.down_gray, top: normalize(5)}
              }
              buttonText={'Inicia sesión'}
              styleText={styles.styleTextButton}
            />
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textRegister}>
                Si aun no tienes cuenta
                <Text style={styles.textRegisterBlue}> Registrate</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
