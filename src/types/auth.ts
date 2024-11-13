export interface User {
  id: string;
  email: string;
  userName: string;
  role: string;
  // ... otros campos del usuario
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterData {
  email: string;
  password: string;
  userName: string;
  // ... otros campos necesarios para el registro
}

export interface TokenData {
  token: string;
  expiresIn: number;
}
