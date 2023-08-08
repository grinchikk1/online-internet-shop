import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
