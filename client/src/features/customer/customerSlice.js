import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: JSON.parse(localStorage.getItem("customer")) || {
    orderNumber: null,
    orderDate: null,
  },
};

// Function to format the date as "day-month-year hour:minute"
function formatReadableDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const randomOrderNumber = Math.floor(Math.random() * 9000000) + 1000000;
      const orderDate = new Date();
      state.customer = {
        ...action.payload,
        orderNumber: randomOrderNumber,
        orderDate: formatReadableDate(orderDate),
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
