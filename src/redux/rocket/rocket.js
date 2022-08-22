import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: [],
  reducers: {
    fetchRockets: (state, action) => {
      
      state = action.payload
    },
    deleteRocket: (state) => {
      // state.value -= 1;
    },
    reserve: (state, action) => {
      // state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = rocketSlice.actions;

export default rocketSlice.reducer;
