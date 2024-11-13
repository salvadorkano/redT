import React, {createContext, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../services/authService';

export type UserRole = 'ESTUDIANTE' | 'PROFESOR' | 'CUSTODIAN' | 'ADMIN';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  houseNumber: number;
  building: string;
  username: string;
  role: UserRole;
  __v: number; // Agregamos esto también ya que viene del API
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isProfesor: boolean;
  isEstudiante: boolean;
  isCustodian: boolean;
  hasPermission: (requiredRoles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    console.log('Llega al login');

    try {
      console.log('try context');

      const response = await authService.login(username, password);
      console.log('response', response);

      if (response.data.success && response.data.data) {
        const userData = response.data.data;

        // Validamos que el role sea uno de los permitidos
        if (!isValidRole(userData.role)) {
          throw new Error('Role de usuario no válido');
        }

        // Creamos el objeto user asegurándonos que cumpla con la interfaz
        const newUser: User = {
          id: userData.id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          houseNumber: userData.houseNumber,
          building: userData.building,
          username: userData.username,
          role: userData.role as UserRole, // Cast seguro porque ya validamos
          __v: userData.__v,
        };

        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
      } else {
        throw new Error(response.data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  // Función helper para validar roles
  const isValidRole = (role: string): role is UserRole => {
    return ['ESTUDIANTE', 'PROFESOR', 'CUSTODIAN', 'ADMIN'].includes(role);
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  };

  // Helpers para roles
  const isAdmin = user?.role === 'ADMIN';
  const isProfesor = user?.role === 'PROFESOR';
  const isEstudiante = user?.role === 'ESTUDIANTE';
  const isCustodian = user?.role === 'CUSTODIAN';

  // Función para verificar permisos
  const hasPermission = (requiredRoles: UserRole[]) => {
    if (!user) {
      return false;
    }
    return requiredRoles.includes(user.role);
  };

  // Cargar usuario al inicio
  React.useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          // Validamos el role al cargar también
          if (isValidRole(parsedUser.role)) {
            setUser(parsedUser);
          } else {
            // Si el role no es válido, hacemos logout
            await logout();
          }
        }
      } catch (error) {
        console.error('Error al cargar usuario:', error);
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAdmin,
        isProfesor,
        isEstudiante,
        isCustodian,
        hasPermission,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
