import api from './api';

// Definimos las interfaces necesarias
interface CreateNoticeDTO {
  title: string;
  message: string;
  createdBy: string;
  type: 'Todos' | 'Directos' | 'Grupal';
  recipient?: string;
  courseId?: string;
}

// Actualizamos los métodos del servicio
export const getNotices = async () => {
  const response = await api.get('/notices');
  return response.data;
};

export const getNoticeById = async (id: string) => {
  const response = await api.get(`/notices/${id}`);
  return response.data;
};

export const getUserNotices = async (userId: string) => {
  const response = await api.get(`/notices/user/${userId}`);
  return response.data;
};

export const createNotice = async (notice: CreateNoticeDTO) => {
  console.log('llega el service');

  const response = await api.post('/notices', notice);
  return response.data;
};

export const updateNotice = async (
  id: string,
  notice: Partial<CreateNoticeDTO>,
) => {
  const response = await api.put(`/notices/${id}`, notice);
  return response.data;
};

export const deleteNotice = async (id: string) => {
  const response = await api.delete(`/notices/${id}`);
  return response.data;
};
