/* eslint-disable no-param-reassign */

import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

const JOIN_MISSION = 'ReactGroupProject/mission/JOIN_MISSION';
const LEAVE_MISSION = 'ReactGroupProject/mission/LEAVE_MISSION';
const FETCH_MISSIONS = 'ReactGroupProject/mission/FETCH_MISSIONS';

const initialState = [{
  id: 1,
  mission: 'Thaicom',
  description: 'Description of Thaicom',
  status: false,
}, {
  id: 2,
  mission: 'Telstar',
  description: 'Description of Telstar',
  status: true,
}, {
  id: 3,
  mission: 'Iridium NEXT',
  description: 'Description of Iridium NEXT',
  status: false,
}];

// mission reducer
export default (state = initialState, action) => {
  let newState = {};
  let foundIndex = 0;
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];

    case JOIN_MISSION:
      newState = state.find((mission) => mission.id === action.payload);
      newState = {
        ...newState,
        reserved: true,
      };
      foundIndex = state.findIndex((x) => x.id === action.payload);
      state[foundIndex] = newState;
      return [...state];

    case LEAVE_MISSION:
      newState = state.find((mission) => mission.id === action.payload);
      newState = {
        ...newState,
        reserved: false,
      };
      foundIndex = state.findIndex((x) => x.id === action.payload);
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
    reserved: false,
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

// export const joinMission = (JOIN_MISSION, async (id) => {
//   const missions = useSelector((state) => state.missions);
//   const newState = missions.map((mission) => {
//     if (mission.id !== id) return mission;
//     return { ...newState, reserved: true };
//   });

//   return newState;
// });

// export const leaveMission = (LEAVE_MISSION, async (id) => {
//   const missions = useSelector((state) => state.missions);
//   const newState = missions.map((mission) => {
//     if (mission.id !== id) return mission;
//     return { ...newState, reserved: false };
//   });

//   return newState;
// });