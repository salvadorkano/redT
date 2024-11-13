import axios from 'axios';
import {API_URL, ENDPOINTS} from '../config/constants';
import {Notice, CreateNoticeRequest} from '../types/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const noticesService = {
  getAll: async (): Promise<Notice[]> => {
    try {
      const response = await api.get<Notice[]>(ENDPOINTS.NOTICES);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al obtener avisos',
        );
      }
      throw error;
    }
  },

  getById: async (id: string): Promise<Notice> => {
    try {
      const response = await api.get<Notice>(`${ENDPOINTS.NOTICES}/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al obtener aviso',
        );
      }
      throw error;
    }
  },

  getByFilter: async (
    semester?: number,
    career?: string,
  ): Promise<Notice[]> => {
    try {
      let url = `${ENDPOINTS.NOTICES}/filter?`;
      if (semester) {
        url += `semester=${semester}&`;
      }
      if (career) {
        url += `career=${career}`;
      }

      const response = await api.get<Notice[]>(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al filtrar avisos',
        );
      }
      throw error;
    }
  },

  create: async (notice: CreateNoticeRequest): Promise<Notice> => {
    try {
      const response = await api.post<Notice>(ENDPOINTS.NOTICES, notice);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al crear aviso',
        );
      }
      throw error;
    }
  },

  update: async (
    id: string,
    notice: Partial<CreateNoticeRequest>,
  ): Promise<Notice> => {
    try {
      const response = await api.put<Notice>(
        `${ENDPOINTS.NOTICES}/${id}`,
        notice,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al actualizar aviso',
        );
      }
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await api.delete(`${ENDPOINTS.NOTICES}/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al eliminar aviso',
        );
      }
      throw error;
    }
  },
};
