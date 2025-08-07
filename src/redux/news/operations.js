import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

//Get News

export const fetchNews = createAsyncThunk('news, fetchNews', async thunkAPI => {
  try {
    const response = await axios.get('/news');
    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
