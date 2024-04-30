import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  planets: [],
  nextPage: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPlanets: (state, action) => {
      state.planets = action.payload.planets;
      state.nextPage = action.payload.nextPage;
    },
    loadMorePlanets: (state, action) => {
      state.planets = [...state.planets, ...action.payload.planets];
      state.nextPage = action.payload.nextPage;
    },
  },
});

export const { setPlanets, loadMorePlanets } = searchSlice.actions;
export default searchSlice.reducer;
