import { createSlice } from '@reduxjs/toolkit';
import { fetchNoticeById, fetchNotices } from './operations';

const noticeSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    selectedNotice: null,
    isLoading: false,
    error: null,
    totalPages: 0,
    currentPage: 1,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedNotice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const noticeReducer = noticeSlice.reducer;
