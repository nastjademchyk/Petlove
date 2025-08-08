import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

//Get Friends list

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends ',
  async thunkAPI => {
    try {
      const response = await axios.get('/friends/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
