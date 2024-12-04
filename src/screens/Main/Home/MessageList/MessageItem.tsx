import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from '../homeStyle';
import profilePic from 'images/pp.png';
import {Message} from 'store/slices/messageSlice';
interface MessageItemProps {
  message: Message;
}

const MessageItem = ({message}: MessageItemProps) => (
  <View style={styles.messageContainer}>
    <Image source={profilePic} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.sender}>{message.createdBy}</Text>
      <Text style={styles.title}>{message.title}</Text>
      <Text style={styles.description}>{message.message}</Text>
      {/* <Text style={styles.description}>
          Semestre: {item.semester} | Carrera: {item.career}
        </Text> */}
    </View>
  </View>
);

export default MessageItem;
