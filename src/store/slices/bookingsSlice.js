import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const createBooking = createAsyncThunk('bookings/create', async (payload) => {
  const res = await fetch(`${API_BASE}/api/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create booking');
  return res.json();
});

export const fetchBookings = createAsyncThunk('bookings/fetch', async () => {
  const res = await fetch(`${API_BASE}/api/bookings`);
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
});

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default bookingsSlice.reducer;
