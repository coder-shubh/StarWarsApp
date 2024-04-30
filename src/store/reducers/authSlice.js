// src/store/reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  username: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = '';
      state.password = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
