import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  role: '',
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      state.role = 'admin';
      console.log('login action');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = '';
      state.username = '';
      console.log('logout action ');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
