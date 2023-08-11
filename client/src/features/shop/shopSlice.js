import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      state.products = products;
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, clear } = shopSlice.actions;

export default shopSlice.reducer;
