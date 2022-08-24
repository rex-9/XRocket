import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [] },
  reducers: {
    reserveRocket: (state, action) => {
      console.log('hello rex');
      let newState = state.rockets.find(
        (rocket) => rocket.id === action.payload
      );

      newState = { ...newState, reserved: true };

      let foundIndex = state.rockets.findIndex((r) => r.id === action.payload);
      state.rockets[foundIndex] = newState;
    },
  },

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

  const rockets = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));

  return rockets;
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
