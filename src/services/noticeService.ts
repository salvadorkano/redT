import api from './api';

export const getNotices = async () => {
  const response = await api.get('/notices');
  return response.data;
};

export const getNoticeById = async (id: string) => {
  const response = await api.get(`/notices/${id}`);
  return response.data;
};

export const createNotice = async (notice: {
  title: string;
  message: string;
  createdBy: string;
  semester: number;
  career: string;
}) => {
  const response = await api.post('/notices', notice);
  return response.data;
};

export const updateNotice = async (id: string, notice: any) => {
  const response = await api.put(`/notices/${id}`, notice);
  return response.data;
};

export const deleteNotice = async (id: string) => {
  const response = await api.delete(`/notices/${id}`);
  return response.data;
};
