import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import authReducer from './slices/authSlice';
import messageReducer from './slices/messageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
