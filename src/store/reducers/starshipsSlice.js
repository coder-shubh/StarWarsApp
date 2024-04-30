import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  starships: [],
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships: (state, action) => {
      state.starships = action.payload;
    },
  },
});

export const { setStarships } = starshipsSlice.actions;
export default starshipsSlice.reducer;
