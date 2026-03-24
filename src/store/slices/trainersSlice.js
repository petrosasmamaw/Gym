import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const fetchTrainers = createAsyncThunk('trainers/fetch', async () => {
  const res = await fetch(`${API_BASE}/api/trainers`);
  if (!res.ok) throw new Error('Failed to fetch trainers');
  return res.json();
});

const trainersSlice = createSlice({
  name: 'trainers',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrainers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchTrainers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default trainersSlice.reducer;
