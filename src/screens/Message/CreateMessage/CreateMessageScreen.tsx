import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Alert,
} from 'react-native';
import {colors} from 'colors';
import {Picker} from '@react-native-picker/picker';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {createMessage} from 'store/slices/messageSlice';

const CreateMessageScreen = ({route, navigation}: any) => {
  const {type} = route.params; // Obtenemos el tipo de mensaje (Individual o Grupal)
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState('Todos');

  const handleSendMessage = async () => {
    // Validación de campos
    if (!to || !subject || !message) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    const newMessage = {
      title: subject,
      message,
      createdBy: user?.username || 'Desconocido',
      semester: type === 'Individual' ? parseInt(to) : 0, // Simula semestre o destinatario
      career: typeMessage, // Para mensajes grupales
    };

    try {
      // Llamada al Redux para crear el mensaje
      await dispatch(createMessage(newMessage)).unwrap();
      Alert.alert('Mensaje Enviado', 'Tu mensaje se ha enviado con éxito.', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al enviar el mensaje.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Regresar</Text>
        </Pressable>
        <Text style={styles.header}>Nuevo mensaje</Text>
      </View>

      <View style={styles.form}>
        {/* Campo "Para" */}
        <Text style={styles.label}>Para:</Text>
        {type === 'Individual' ? (
          <TextInput
            style={styles.input}
            placeholder={
              type === 'Individual' ? 'Nombre del Alumno' : 'Selecciona grupo'
            }
            value={to}
            onChangeText={setTo}
          />
        ) : (
          <Picker
            selectedValue={typeMessage}
            onValueChange={itemValue => setTypeMessage(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Todos" value="Todos" />
            <Picker.Item label="Directos" value="Directos" />
            <Picker.Item label="Grupal" value="Grupal" />
          </Picker>
        )}

        {/* Campo "Asunto" */}
        <Text style={styles.label}>Asunto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Asunto"
          value={subject}
          onChangeText={setSubject}
        />

        {/* Campo "Mensaje" */}
        <Text style={styles.label}>Mensaje:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escribe tu mensaje"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        {/* Botón de enviar */}
        <Pressable style={styles.submitButton} onPress={handleSendMessage}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.titleText,
    textAlign: 'center',
    flex: 1,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.titleText,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.neutral05,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: colors.neutral05,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default CreateMessageScreen;
