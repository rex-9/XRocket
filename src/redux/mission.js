import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

// const ADD_MISSION = 'ReactGroupProject/mission/ADD_MISSION';
// const REMOVE_MISSION = 'ReactGroupProject/mission/REMOVE_MISSION';
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
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];

      // case `${ADD_MISSION}/fulfilled`:
      //   return [...state, action.payload];

      // case `${REMOVE_MISSION}/fulfilled`:
      //   return state.filter((mission) => mission.item_id !== action.payload);

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
  }));

  return missions;
});

// export const addMission = createAsyncThunk(ADD_MISSION, async (mission) => {
//   await fetch(API.missionEndPoint, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(mission),
//   });

//   return mission;
// });

// export const removeMission = createAsyncThunk(REMOVE_MISSION, async (id) => {
//   const endPoint = `${API.missionEndPoint}/${id}`;

//   await fetch(endPoint, {
//     method: 'DELETE',
//     body: JSON.stringify({ item_id: id }),
//   });

//   return id;
// });
