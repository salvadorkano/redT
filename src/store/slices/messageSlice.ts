import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {createNotice, getUserNotices} from 'services/noticeService';

export interface Message {
  id: number; // En el backend es string
  title: string;
  message: string;
  createdBy: string;
  type: 'Todos' | 'Directos' | 'Grupal';
  recipient?: string;
  courseId?: string;
  createdAt: Date;
}

interface MessageState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  isLoading: false,
  error: null,
};

interface CreateMessagePayload {
  title: string;
  message: string;
  createdBy: string;
  type: 'Todos' | 'Directos' | 'Grupal';
  recipient?: string;
  courseId?: string;
}

// Thunk para obtener mensajes
export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await getUserNotices(userId); // Consulta basada en usuario
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Error al cargar mensajes',
      );
    }
  },
);

// Thunk para crear mensaje
export const createMessage = createAsyncThunk(
  'messages/createMessage',
  async (message: CreateMessagePayload, {rejectWithValue}) => {
    try {
      const messageToCreate = {
        title: message.title,
        message: message.message,
        createdBy: message.createdBy,
        type: message.type,
        ...(message.recipient && {recipient: message.recipient}),
        ...(message.courseId && {courseId: message.courseId}),
      };

      console.log('en el slice', messageToCreate);

      const response = await createNotice(messageToCreate);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error al crear mensaje');
    }
  },
);

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    clearMessages: state => {
      state.messages = [];
    },
  },
  extraReducers: builder => {
    builder
      // Fetch messages
      .addCase(fetchMessages.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<Message[]>) => {
          state.isLoading = false;
          state.messages = action.payload.filter(msg => msg.type); // Validación básica
        },
      )
      .addCase(fetchMessages.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Create message
      .addCase(createMessage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        createMessage.fulfilled,
        (state, action: PayloadAction<Message>) => {
          state.isLoading = false;
          state.messages = [action.payload, ...state.messages];
        },
      )
      .addCase(createMessage.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {clearMessages} = messageSlice.actions;
export default messageSlice.reducer;
