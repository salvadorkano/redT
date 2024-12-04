import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from '../homeStyle';
import {Message} from 'store/slices/messageSlice';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  onRefresh?: () => void;
}

const MessageList = ({messages, isLoading, onRefresh}: MessageListProps) => {
  const renderMessage = ({item}: {item: Message}) => (
    <MessageItem message={item} />
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando mensajes...</Text>
      </View>
    );
  }

  if (messages.length === 0) {
    return (
      <View style={styles.noMessagesContainer}>
        <Text style={styles.noMessagesText}>No hay mensajes disponibles</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      keyExtractor={(item, index) => `${item.id} + ${index}`}
      style={styles.messagesList}
      onRefresh={onRefresh}
    />
  );
};

export default MessageList;
