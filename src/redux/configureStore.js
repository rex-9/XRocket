import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocket';

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
