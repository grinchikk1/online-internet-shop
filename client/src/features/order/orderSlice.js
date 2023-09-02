import { createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  updateOrder,
  cancelOrder,
  deleteOrder,
  getOrder,
  getOrderByOrderNo,
} from "../../data/fetchOrder";

const initialState = {
  order: JSON.parse(localStorage.getItem("order")) || [],
  status: "idle",
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order.push(action.payload.order);
        localStorage.setItem("order", JSON.stringify(state.order));
        state.status = "succeeded";
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        localStorage.setItem("order", JSON.stringify(state.order));
        state.status = "succeeded";
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        localStorage.setItem("order", JSON.stringify(state.order));
        state.status = "succeeded";
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.order = [];
        localStorage.removeItem("order");
        state.status = "succeeded";
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        localStorage.setItem("order", JSON.stringify(state.order));
        state.status = "succeeded";
      })
      .addCase(getOrderByOrderNo.fulfilled, (state, action) => {
        state.order = action.payload;
        localStorage.setItem("order", JSON.stringify(state.order));
        state.status = "succeeded";
      })
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cancelOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderByOrderNo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(cancelOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getOrderByOrderNo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export {
  createOrder,
  updateOrder,
  cancelOrder,
  deleteOrder,
  getOrder,
  getOrderByOrderNo,
};
export default orderSlice.reducer;
