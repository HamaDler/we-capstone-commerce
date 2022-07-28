import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  role: '',
  username: 'john',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      console.log('our login action ran');
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
