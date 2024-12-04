import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import {colors} from 'colors';
import {Picker} from '@react-native-picker/picker';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {createMessage} from 'store/slices/messageSlice';
import {
  fetchTeacherGroups,
  searchStudentsByUsername,
} from '../../../services/courses';

type MessageType = 'Todos' | 'Directos' | 'Grupal';

type TeacherGroup = {
  _id: string;
  name: string;
  teacherId: string;
  semester: number;
  career: string;
  code: string;
};

const CreateMessageScreen = ({route, navigation}: any) => {
  const {type}: {type: MessageType} = route.params; // Tipo de mensaje
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState(''); // Para buscar alumnos
  const [searchResults, setSearchResults] = useState([]); // Resultados de búsqueda de alumnos
  const [teacherGroups, setTeacherGroups] = useState<TeacherGroup[]>([]);
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para buscar alumnos
  const fetchStudents = useCallback(async (query: string) => {
    try {
      console.log('Buscar alumno');

      setLoading(true);
      const results = await searchStudentsByUsername(query);
      console.log('result', results);

      setSearchResults(results || []);
    } catch (error) {
      console.error('Error buscando alumnos:', error);
      Alert.alert('Error', 'No se pudo buscar a los alumnos.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para obtener los grupos del maestro
  const loadTeacherGroups = useCallback(async () => {
    try {
      setLoading(true);
      if (user?.id) {
        const groups = await fetchTeacherGroups(user.id);
        console.log('groups', groups);

        setTeacherGroups(groups || []);
      }
    } catch (error) {
      console.error('Error obteniendo grupos:', error);
      Alert.alert('Error', 'No se pudieron cargar los grupos.');
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  // Ejecutar lógica de carga de datos
  useEffect(() => {
    setTypeMessage(type);
    if (type === 'Grupal') {
      loadTeacherGroups();
    }
  }, [type, loadTeacherGroups]);

  const handleSendMessage = async () => {
    console.log('to', to);
    console.log('subject', subject);
    console.log('message', message);

    if (!to || !subject || !message) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    const newMessage = {
      title: subject,
      message,
      createdBy: user?.id || 'Desconocido',
      type: typeMessage as MessageType, // Asegura que el tipo sea válido
      ...(type === 'Directos' && {recipient: to}),
      ...(type === 'Grupal' && {courseId: to}),
    };

    try {
      await dispatch(createMessage(newMessage)).unwrap();
      Alert.alert('Mensaje Enviado', 'Tu mensaje se ha enviado con éxito.', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al enviar el mensaje.');
    }
  };

  const renderSearchResults = ({item}: any) => (
    <Pressable style={styles.searchResult} onPress={() => setTo(item._id)}>
      <Text>
        {item.username} - {item.fullName}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Regresar</Text>
      </Pressable>

      {/* Encabezado */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nuevo mensaje</Text>
      </View>

      <View style={styles.form}>
        {/* Campo "Para" */}
        <Text style={styles.label}>Para:</Text>
        {type === 'Directos' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Buscar alumno (e.g. 18010406)"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={() => fetchStudents(searchQuery)}
            />
            {loading && <Text style={styles.loadingText}>Buscando...</Text>}
            <FlatList
              data={searchResults}
              renderItem={renderSearchResults}
              keyExtractor={(item, index) => `${item} + ${index}`}
              style={styles.searchList}
            />
          </>
        ) : (
          <Picker
            selectedValue={to}
            onValueChange={itemValue => setTo(itemValue)}
            style={styles.picker}>
            {teacherGroups.map((group: TeacherGroup) => (
              <Picker.Item
                key={group._id}
                label={`${group.name} - Semestre ${group.semester}`}
                value={group._id}
              />
            ))}
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
  searchResult: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    backgroundColor: 'red',
  },
  searchList: {
    maxHeight: 80,
  },
  loadingText: {
    textAlign: 'center',
    color: colors.subTitle,
  },

  backButton: {
    marginTop: 20,
    marginLeft: 10,
  },
  subHeader: {
    fontSize: 18,
    color: colors.subTitle,
    textAlign: 'center',
  },
});

export default CreateMessageScreen;
