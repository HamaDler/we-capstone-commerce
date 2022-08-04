import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.value = action.payload;

      console.log('update cart function is running', action.payload);
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
