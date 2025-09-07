import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../../features/search/chatSlice';
import searchReducer from '../../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
