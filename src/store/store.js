import { configureStore } from '@reduxjs/toolkit';
import trainersReducer from './slices/trainersSlice';
import bookingsReducer from './slices/bookingsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    trainers: trainersReducer,
    bookings: bookingsReducer,
    auth: authReducer,
  },
});

export default store;
