import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      if (state.cart.find((product) => product._id === action.payload._id)) {
        state.amount[action.payload._id] = state.amount[action.payload._id] + 1;
      } else {
        state.cart = [...state.cart, action.payload];
        state.amount[action.payload._id] = 1;
      }
    },
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item._id !== productIdToRemove);
      state.amount[action.payload] = undefined;
    },
    updateCartCount: (state, action) => {
      const { itemID, newCount } = action.payload;
      state.amount[itemID] = newCount;
    },
  },
});

export const { addProductToCart, removeProductFromCart, updateCartCount } =
  cartSlice.actions;

export default cartSlice.reducer;
