import api from './api';

// Obtener grupos del maestro
export const fetchTeacherGroups = async (teacherId: string) => {
  const response = await api.get(`/courses/teacher/${teacherId}`);
  return response.data.data;
};

// Buscar alumnos por username
export const searchStudentsByUsername = async (username: string) => {
  const response = await api.get(
    `/courses/search/students?username=${username}`,
  );
  return response.data.data;
};
