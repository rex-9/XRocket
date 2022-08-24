import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [] },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
    
      state.rockets = action.payload;
    });
  },
});

// All types
const FETCH_ROCKET = 'rockets/FETCH_ROCKETS';

// All thunks
export const fetchRockets = createAsyncThunk(FETCH_ROCKET, async (thunkAPI) => {
  const response = await axios.get(api.rocketEndPoint);

  return response.data;
});

// export const {} = rocketSlice.actions;
export default rocketSlice.reducer;
