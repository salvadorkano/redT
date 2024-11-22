import React, {useEffect, useState} from 'react';
import {
  FlatList,
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
import searchIcon from 'icons/user.png';
import profilePic from 'images/pp.png';
import TabBar from './TabBar';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {fetchMessages} from 'store/slices/messageSlice';

const HomeScreen = ({navigation}: any) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const {messages, isLoading, error} = useAppSelector(state => state.messages);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Obtener mensajes al cargar la pantalla
    dispatch(fetchMessages());
  }, [dispatch]);

  const filteredMessages =
    activeTab === 0
      ? messages
      : messages.filter(
          msg => msg.career === ['Todos', 'Directos', 'Grupal'][activeTab],
        );

  const renderMessage = ({item}: any) => (
    <View style={styles.messageContainer}>
      <Image source={profilePic} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.createdBy}</Text>
        <Text style={styles.time}>{item.time || 'Sin hora'}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.message}</Text>
      </View>
    </View>
  );

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
          <Image source={menuIcon} style={styles.menuIcon} />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Buscar mensaje"
          style={styles.searchInput}
          placeholderTextColor="#A1A1A1"
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
        <FlatList
          data={filteredMessages}
          renderItem={renderMessage}
          keyExtractor={item => item.id.toString()}
          style={styles.messagesList}
        />
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
