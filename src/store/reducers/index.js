import { combineReducers } from '@reduxjs/toolkit';
import starshipsReducer from './starshipsSlice';

const rootReducer = combineReducers({
  starships: starshipsReducer,
});

export default rootReducer;
