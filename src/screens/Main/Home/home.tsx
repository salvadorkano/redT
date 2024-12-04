import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import styles from './homeStyle';
import menuIcon from 'icons/iconMenu.png';
import searchIcon from 'icons/search.png';
import TabBar from './TabBar';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {fetchMessages} from 'store/slices/messageSlice';
import MessageList from './MessageList/MessageList';

const HomeScreen = ({navigation}: any) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const {messages, isLoading} = useAppSelector(state => state.message);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchMessages(user.id));
    }
  }, [dispatch, user?.id]);

  const getFilteredMessages = () => {
    const tabFilter = ['Todos', 'Directos', 'Grupal'][activeTab];

    return messages.filter(msg => {
      const matchesType =
        activeTab === 0 || // Todos los mensajes para la pestaña "Todos"
        msg.type === tabFilter;

      const matchesSearch =
        !searchText ||
        msg.title.toLowerCase().includes(searchText.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchText.toLowerCase());

      return matchesType && matchesSearch;
    });
  };

  const filteredMessages = getFilteredMessages();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          ¡Bienvenido {user?.fullName || 'Usuario'}!
        </Text>
        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={menuIcon} />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Buscar mensaje"
          style={styles.searchInput}
          placeholderTextColor="#A1A1A1"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Image source={searchIcon} style={styles.searchIcon} />
      </View>

      {/* Tabs */}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Messages List */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando mensajes...</Text>
        </View>
      ) : filteredMessages.length > 0 ? (
        <MessageList messages={filteredMessages} isLoading={isLoading} />
      ) : (
        <View style={styles.noMessagesContainer}>
          <Text style={styles.noMessagesText}>No hay mensajes disponibles</Text>
        </View>
      )}

      {/* New Message Button (Only for MAESTRO role) */}
      {user?.role === 'MAESTRO' && (
        <Pressable
          style={styles.newMessageButton}
          onPress={() => navigation.navigate('SelectMessageType')}>
          <Text style={styles.newMessageButtonText}>Nuevo mensaje</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
