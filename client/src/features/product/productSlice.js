import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    editProduct(state, action) {
      const updatedProduct = action.payload;
      state.products = state.products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );
    },
  },
});

export const { getProduct, editProduct } = productsSlice.actions;

export default productsSlice.reducer;
