/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';

export const missionSlice = createSlice({
  name: 'mission',
  initialState: [],
  reducers: {
    fetchMissions: (state, action) => {
      state = action.payload;
    },
    deleteMission: (state) => {
      // state.value -= 1;
    },
    join: (state, action) => {
      // state.value += action.payload;
    },
  },
});

export const { fetchMissions, deleteMission, join } = missionSlice.actions;

export default missionSlice.reducer;
