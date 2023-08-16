import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProduct: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(state, action) {
      state.searchProduct = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductEnd(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductEnd,
} = searchSlice.actions;

export default searchSlice.reducer;
