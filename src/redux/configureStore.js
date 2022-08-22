import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocket';
import missionReducer from './mission/mission';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
