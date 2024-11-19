import axios from 'axios';

const BASE_URL = 'https://red-tec-back.vercel.app';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
