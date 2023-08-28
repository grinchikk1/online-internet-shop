import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: JSON.parse(localStorage.getItem("customer")) || {
    orderNumber: null,
    orderDate: null,
  },
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customer = {
        ...action.payload,
      };
      localStorage.setItem("customer", JSON.stringify(state.customer));
    },
    clearCustomer: (state) => {
      state.customer = { orderNumber: null, orderDate: null };
      localStorage.removeItem("customer");
    },
  },
});

export const { addCustomer, clearCustomer } = customerSlice.actions;

export default customerSlice.reducer;
