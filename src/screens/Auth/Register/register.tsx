import React, {useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import InputComponent from 'components/input/CustomInput';
import ButtonComponent from 'components/button/button';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';
import styles from './registerStyle';
import logo from 'images/LogoTec.png';
import {createUser} from 'services/authService';
import {routerProps} from 'router/RootStackParams';

function RegisterScreen({navigation}: routerProps<'Register'>) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    role: 'ESTUDIANTE', // Valor predeterminado
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setForm(prevForm => ({...prevForm, [field]: value}));
  };

  const handleRoleChange = (role: 'ESTUDIANTE' | 'MAESTRO') => {
    setForm(prevForm => ({...prevForm, role}));
  };

  const onRegister = async () => {
    if (!form.fullName || !form.email || !form.username || !form.password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await createUser(form); // Llama al servicio para registrar al usuario
      setLoading(false);

      // Muestra un alert de éxito y redirige al login
      Alert.alert(
        '¡Registro exitoso!',
        'Tu cuenta ha sido creada. Por favor, inicia sesión.',
        [
          {
            text: 'Aceptar',
            onPress: () => navigation.replace('Login'), // Redirige al login
          },
        ],
      );
    } catch (err: any) {
      setLoading(false);
      setError(err.message || 'Algo salió mal, intenta de nuevo');
    }
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
            <Text style={styles.principalTitle}>Regístrate</Text>
            <Text style={styles.secundaryTitle}>
              Completa el formulario para crear tu cuenta
            </Text>
          </View>
          <View style={styles.containerForm}>
            <InputComponent
              value={form.fullName}
              placeholder="Nombre completo"
              onChange={value => handleInputChange('fullName', value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <InputComponent
              value={form.email}
              placeholder="Correo electrónico"
              onChange={value => handleInputChange('email', value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <InputComponent
              value={form.username}
              placeholder="Usuario"
              onChange={value => handleInputChange('username', value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <InputComponent
              value={form.password}
              placeholder="Contraseña"
              type="password"
              onChange={value => handleInputChange('password', value)}
              style={styles.inputEmail}
              placeholderColor={colors.neutral60}
            />
            <View style={styles.roleContainer}>
              <Pressable
                onPress={() => handleRoleChange('ESTUDIANTE')}
                style={[
                  styles.roleButton,
                  form.role === 'ESTUDIANTE' && styles.roleButtonActive,
                ]}>
                <Text
                  style={[
                    styles.roleText,
                    form.role === 'ESTUDIANTE' && styles.roleTextActive,
                  ]}>
                  Estudiante
                </Text>
              </Pressable>
              <Pressable
                onPress={() => handleRoleChange('MAESTRO')}
                style={[
                  styles.roleButton,
                  form.role === 'MAESTRO' && styles.roleButtonActive,
                ]}>
                <Text
                  style={[
                    styles.roleText,
                    form.role === 'MAESTRO' && styles.roleTextActive,
                  ]}>
                  Maestro
                </Text>
              </Pressable>
            </View>
            {error && <Text style={styles.styleError}>{error}</Text>}
          </View>
          <View style={styles.containerButton}>
            <ButtonComponent
              loading={loading}
              onPress={onRegister}
              styleButton={{
                backgroundColor: colors.primary,
                top: normalize(5),
              }}
              buttonText="Regístrate"
              styleText={styles.styleTextButton}
            />
            <Pressable onPress={() => navigation.replace('Login')}>
              <Text style={styles.textLogin}>
                Ya tienes una cuenta
                <Text style={styles.textLoginBlue}> Inicia sesión</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
