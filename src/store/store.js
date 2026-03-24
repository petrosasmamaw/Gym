import { configureStore } from '@reduxjs/toolkit';
import trainersReducer from './slices/trainersSlice';
import bookingsReducer from './slices/bookingsSlice';

export const store = configureStore({
  reducer: {
    trainers: trainersReducer,
    bookings: bookingsReducer,
  },
});

export default store;
