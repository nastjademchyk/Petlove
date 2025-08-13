import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/slice';
import { friendsReducer } from './friends/slice';
import { authReducer } from './auth/slice';
import { noticeReducer } from './notices/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
    auth: authReducer,
    notices: noticeReducer,
  },
});
