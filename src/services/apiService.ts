// services/apiService.ts
import axios from 'axios';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

export const getNotices = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data.results; // Accede a los datos según la estructura de la respuesta de la API
  } catch (error) {
    console.error('Error fetching data with axios:', error);
    throw error; // Lanza el error para manejarlo en el componente que llame esta función
  }
};
