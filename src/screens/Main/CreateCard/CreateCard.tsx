import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import {useAppDispatch} from 'store/hooks';
import {createMessage} from 'store/slices/messageSlice';
import {colors} from 'colors';
import {Picker} from '@react-native-picker/picker';

const CreateMessageScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {user} = useSelector((state: RootState) => state.auth);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('Todos');

  const handleCreateMessage = async () => {
    if (!title || !content) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Ajustamos la estructura del mensaje para cumplir con la API
    const message = {
      title, // El título del mensaje
      message: content, // El contenido del mensaje
      createdBy: user?.fullName || 'Anónimo', // El creador del mensaje
      semester: 10, // Aquí puedes obtenerlo dinámicamente si es necesario
      career: 'Mecánica', // Aquí puedes obtenerlo dinámicamente si es necesario
    };

    try {
      // Dispatch al Redux o llamada al servicio
      dispatch(createMessage(message));
      Alert.alert('¡Éxito!', 'Mensaje creado con éxito.', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al crear el mensaje.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Crear Nuevo Mensaje222</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título del mensaje"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Contenido del mensaje"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Picker
          selectedValue={type}
          onValueChange={itemValue => setType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Directos" value="Directos" />
          <Picker.Item label="Grupal" value="Grupal" />
        </Picker>
        <Pressable style={styles.button} onPress={handleCreateMessage}>
          <Text style={styles.buttonText}>Enviar Mensaje</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.titleText,
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: colors.neutral05,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: colors.neutral05,
    borderRadius: 8,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateMessageScreen;
