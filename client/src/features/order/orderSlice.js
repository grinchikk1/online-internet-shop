import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: JSON.parse(localStorage.getItem("order")) || null, // Начальное состояние - null или предыдущий заказ
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload; // Просто устанавливаем новый заказ
      localStorage.setItem("order", JSON.stringify(state.order));
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
