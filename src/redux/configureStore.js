import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './mission';
// import rocketsReducer from './rocket';

const rootReducer = combineReducers({
  missions: missionsReducer,
  // rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

export default store;
