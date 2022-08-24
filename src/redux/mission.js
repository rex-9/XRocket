import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';
import toggleJoined from './utils';

const JOIN_MISSION = 'ReactGroupProject/mission/JOIN_MISSION';
const LEAVE_MISSION = 'ReactGroupProject/mission/LEAVE_MISSION';
const FETCH_MISSIONS = 'ReactGroupProject/mission/FETCH_MISSIONS';

const initialState = [];

// mission reducer
export default (state = initialState, action) => {
  let newState = {};
  let foundIndex = 0;
  const id = action.payload;

  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];

    case JOIN_MISSION:
      [foundIndex, newState] = toggleJoined(state, id, 'joined');

      state[foundIndex] = newState;
      return [...state];

    case LEAVE_MISSION:
      [foundIndex, newState] = toggleJoined(state, id, 'joined');

      state[foundIndex] = newState;
      return [...state];

    default:
      return state;
  }
};

// action creators

export const getMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetch(API.missionEndPoint);
  const data = await response.json();

  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    joined: false,
  }));

  return missions;
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});
