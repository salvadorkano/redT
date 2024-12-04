import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createUser, loginUser} from 'services/authService';

interface User {
  fullName: string;
  email: string;
  username: string;
  role: 'ESTUDIANTE' | 'MAESTRO';
  id: string;
}
interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    userData: {
      fullName: string;
      email: string;
      username: string;
      password: string;
      role: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const data = await createUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Thunk para manejar el inicio de sesión
export const login = createAsyncThunk(
  'auth/login',
  async (
    credentials: {username: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const data = await loginUser(credentials);
      if (data.data.success) {
        return data.data.data; // Este es el payload de la acción fulfilled
      } else {
        return rejectWithValue(data.data.message || 'Error desconocido');
      }
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload; // Datos del usuario retornados por la API
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload || 'Error al iniciar sesión';
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
