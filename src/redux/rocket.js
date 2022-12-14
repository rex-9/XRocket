import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';
import toggleReservation from './utils';

// All types
const FETCH_ROCKET = 'rockets/FETCH_ROCKETS';

// All thunks
export const fetchRockets = createAsyncThunk(FETCH_ROCKET, async () => {
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

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [] },
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const { rockets } = state;

      const [foundIndex, newState] = toggleReservation(rockets, id);
      state.rockets[foundIndex] = newState;
    },

    cancelReservation: (state, action) => {
      const id = action.payload;
      const { rockets } = state;

      const [foundIndex, newState] = toggleReservation(rockets, id);
      state.rockets[foundIndex] = newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
