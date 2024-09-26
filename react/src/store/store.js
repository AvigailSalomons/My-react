import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';
import imagesReducer from './imagesSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    images: imagesReducer,
  },
});
