import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllChat } from './api';
import { ChatResult } from '@/interface/search.interface';

export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
  const res = await getAllChat();
  return res || [];
});

interface ChatState {
  chatList: ChatResult[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  chatList: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.loading = false;
        // Ensure action.payload is transformed to ChatResult[]
        state.chatList = Array.isArray(action.payload)
          ? action.payload
          : (action.payload?.data ?? []);
      })
      .addCase(fetchChats.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load chats.';
      });
  },
});

export default chatSlice.reducer;
