// src/services/messageService.ts

import axios from 'axios';
import {API_URL} from '../config/constants';

export interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  receiver: {
    id: string;
    type: 'individual' | 'group';
  };
  subject: string;
  content: string;
  type: 'service' | 'notice' | 'homework';
  createdAt: string;
  images?: string[];
}

export interface CreateMessageDTO {
  receiverId: string;
  type: 'individual' | 'group';
  subject: string;
  content: string;
  images?: File[];
}

export const messageService = {
  // Obtener todos los mensajes
  getMessages: async (filter?: 'all' | 'individual' | 'group') => {
    try {
      const response = await axios.get(`${API_URL}/messages`, {
        params: {filter},
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Crear nuevo mensaje
  createMessage: async (messageData: CreateMessageDTO) => {
    try {
      const formData = new FormData();

      // Agregar campos de forma segura con tipado
      formData.append('receiverId', messageData.receiverId);
      formData.append('type', messageData.type);
      formData.append('subject', messageData.subject);
      formData.append('content', messageData.content);

      // Agregar imágenes si existen
      if (messageData.images) {
        messageData.images.forEach(image => {
          formData.append('images', image);
        });
      }

      const response = await axios.post(`${API_URL}/messages`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obtener mensajes por tipo
  getMessagesByType: async (type: 'service' | 'notice' | 'homework') => {
    try {
      const response = await axios.get(`${API_URL}/messages/type/${type}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
