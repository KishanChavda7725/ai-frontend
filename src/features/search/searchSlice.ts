import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { searchGemini, getSearch } from './api';
import { SearchResult, SearchRequest } from '@/interface/search.interface';

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult',
  async (request: SearchRequest) => {
    const res = await searchGemini(request);
    if (res?.data) return res.data;
    throw new Error('No data received');
  },
);

// Async thunk for fetching search result by chatId
export const fetchSearchByChatId = createAsyncThunk(
  'search/fetchSearchByChatId',
  async (chatId: string) => {
    const res = await getSearch(chatId);
    return res || null;
  },
);

interface SearchState {
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  currentChatId: string | null;
}

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
  currentChatId: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = [];
    },
    setCurrentChatId: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload;
    },
    clearCurrentChatId: (state) => {
      state.currentChatId = null;
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResult.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResult.fulfilled, (state, action: PayloadAction<SearchResult>) => {
        state.loading = false;
        state.results.push(action.payload);
        // Set chatId from response if present
        if (action.payload.chatId) {
          state.currentChatId = action.payload.chatId;
        }
      })
      .addCase(fetchSearchResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Search failed.';
      })
      // Add cases for fetchSearchByChatId
      .addCase(fetchSearchByChatId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchByChatId.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.data) {
          state.results = action.payload.data;
        }
      })
      .addCase(fetchSearchByChatId.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch search result.';
      });
  },
});

export const { clearResults, setCurrentChatId, clearCurrentChatId } = searchSlice.actions;
export default searchSlice.reducer;
