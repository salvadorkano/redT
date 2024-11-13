import axios from 'axios';
import {API_URL} from '../config/constants';
import {LoginResponse} from '../types/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const authService = {
  login: async (username: string, password: string) => {
    // Log de la petición exacta
    console.log('=== LOGIN REQUEST ===');
    console.log('URL:', `${api.defaults.baseURL}/auth/login`);
    console.log('Body:', {username, password});
    console.log('Headers:', api.defaults.headers);

    try {
      // Hacemos la petición exactamente igual que en Postman
      const response = await axios({
        method: 'post',
        url: `${api.defaults.baseURL}/auth/login`,
        data: {
          username,
          password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('=== LOGIN RESPONSE ===');
      console.log('Status:', response.status);
      console.log('Data:', response.data);

      return response.data;
    } catch (error) {
      console.log('=== LOGIN ERROR ===');
      if (axios.isAxiosError(error)) {
        console.log('Error Config:', error.config);
        console.log('Error Status:', error.response?.status);
        console.log('Error Data:', error.response?.data);
        console.log('Error Message:', error.message);
      } else {
        console.log('Unknown Error:', error);
      }
      throw error;
    }
  },
};
