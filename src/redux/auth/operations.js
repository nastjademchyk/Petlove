import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

//Register new user

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name,
        email,
        password,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Registration failed'
      );
    }
  }
);

//Login user

export const signing = createAsyncThunk(
  'auth/signing',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', {
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Login failed'
      );
    }
  }
);

//Logout

export const logout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');
    axios.defaults.headers.common.Authorization = '';
    localStorage.removeItem('token');
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Logout failed'
    );
  }
});

//Refresh

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
