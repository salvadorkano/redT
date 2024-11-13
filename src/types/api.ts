export interface User {
  fullName: string;
  email: string;
  username: string;
  role: 'ESTUDIANTE' | 'PROFESOR' | 'ADMIN';
}
export interface LoginResponse {
  status: number;
  data: {
    success: boolean;
    message: string;
    data: {
      id: string;
      firstName: string;
      lastName: string;
      houseNumber: number;
      building: string;
      username: string;
      role: string;
      __v: number;
    };
  };
}

export interface LoginRequest {
  username: string;
  password: string;
}
export interface Notice {
  _id: string;
  title: string;
  message: string;
  createdBy: string;
  semester: number;
  career: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateNoticeRequest {
  title: string;
  message: string;
  createdBy: string;
  semester: number;
  career: string;
}

export interface CreateUserRequest {
  fullName: string;
  email: string;
  username: string;
  password: string;
  role: 'ESTUDIANTE' | 'PROFESOR' | 'ADMIN';
}
