import api from './api';

export const loginUser = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const createUser = async (user: {
  fullName: string;
  email: string;
  username: string;
  password: string;
  role: string;
}) => {
  const response = await api.post('/users', user);
  return response.data;
};
