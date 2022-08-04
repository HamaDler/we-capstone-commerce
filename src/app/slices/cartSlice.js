import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      console.log('the data that updateCart reducer recieved:', action.payload);
      state.products = action.payload;

      console.log('the cart state after being updated', state);
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
