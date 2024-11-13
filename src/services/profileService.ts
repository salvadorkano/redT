// src/services/profileService.ts

import axios from 'axios';
import {API_URL} from '../config/constants';

export interface UserProfile {
  id: string;
  fullName: string;
  controlNumber: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface UpdateProfileDTO {
  fullName?: string;
  phone?: string;
  avatar?: File;
}

export const profileService = {
  // Obtener perfil del usuario
  getProfile: async () => {
    try {
      const response = await axios.get(`${API_URL}/users/profile`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Actualizar perfil
  updateProfile: async (profileData: UpdateProfileDTO) => {
    try {
      const formData = new FormData();

      if (profileData.fullName) {
        formData.append('fullName', profileData.fullName);
      }

      if (profileData.phone) {
        formData.append('phone', profileData.phone);
      }

      if (profileData.avatar) {
        formData.append('avatar', profileData.avatar);
      }

      const response = await axios.put(`${API_URL}/users/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
