import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {createNotice, getNotices} from 'services/noticeService';

interface Message {
  id: number;
  title: string;
  message: string;
  createdBy: string;
  semester: number;
  career: string;
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

// Thunk para obtener mensajes
export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getNotices();
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
  async (
    message: {
      title: string;
      message: string;
      createdBy: string;
      semester: number;
      career: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const response = await createNotice(message);
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
          state.messages = action.payload;
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
