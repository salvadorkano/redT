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
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../store/hooks'; // Custom hooks
import {login} from 'store/slices/authSlice'; // Redux slice
import {routerProps} from 'router/RootStackParams';
import styles from './loginStyle';
import InputComponent from 'components/input/CustomInput';
import ButtonComponent from 'components/button/button';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';
import {reggexEmail} from 'utils/validations';
import logo from 'images/LogoTec.png';

function LoginScreen({navigation}: routerProps<'Login'>) {
  const dispatch = useAppDispatch();
  const {loading, error, user} = useAppSelector(state => state.auth); // State from Redux

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validate, setValidate] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (email === '' || password === '') {
      setValidate(false);
    } else {
      validateEmail(email);
    }
  }, [email, password]);

  useEffect(() => {
    if (user) {
      navigation.replace('MyDrawer');
    }
  }, [navigation, user]);

  const validateEmail = (textEmail: string) => {
    const string = textEmail.trim();
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

  const onLogin = async () => {
    if (!validate) {
      return;
    }
    dispatch(login({username: email, password}));
  };

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
            <Text style={styles.principalTitle}>Hola</Text>
            <Text style={styles.secundaryTitle}>
              Ingresa tus datos para iniciar sesión
            </Text>
          </View>
          <View style={styles.containerForm}>
            <InputComponent
              value={email}
              placeholder="Correo electrónico"
              onChange={value => validateEmail(value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            {showError && (
              <Text style={styles.styleError}>
                Formato de correo incorrecto.
              </Text>
            )}
            <InputComponent
              value={password}
              onChange={setPassword}
              placeholder="Contraseña"
              type="password"
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.styleForgotPassword}>Olvidé contraseña</Text>
            </Pressable>
            {error && <Text style={styles.styleError}>{error}</Text>}
          </View>
          <View style={styles.containerButton}>
            <ButtonComponent
              loading={loading}
              disabled={!validate || loading}
              onPress={onLogin}
              styleButton={
                validate
                  ? {backgroundColor: colors.primary, top: normalize(5)}
                  : {backgroundColor: colors.down_gray, top: normalize(5)}
              }
              buttonText="Inicia sesión"
              styleText={styles.styleTextButton}
            />
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textRegister}>
                Si aún no tienes cuenta
                <Text style={styles.textRegisterBlue}> Regístrate</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
