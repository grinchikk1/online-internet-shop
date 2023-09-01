import sendRequest from "./sendRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Створити замовлення
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (newOrder) => {
    const response = await sendRequest("post", "/orders", newOrder);
    return response.data;
  }
);

// Оновити замовлення
export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (id, updateOrder, token) => {
    const response = await sendRequest(
      "put",
      `/orders/${id}`,
      updateOrder,
      token
    );
    return response.data;
  }
);

// Відмінити замовлення
export const cancelOrder = createAsyncThunk(
  "order/cancelOrder",
  async (id, token) => {
    const response = await sendRequest(
      "put",
      `/orders/cancel/${id}`,
      null,
      token
    );
    return response.data;
  }
);

// Видалити замовлення
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (id, token) => {
    const response = await sendRequest("delete", `/orders/${id}`, null, token);
    return response.data;
  }
);

// Отримати замовлення користувача
export const getOrder = createAsyncThunk("order/getOrder", async (token) => {
  const response = await sendRequest("get", "/orders", null, token);
  return response.data;
});

// Отримати замовлення за номером замовлення
export const getOrderByOrderNo = createAsyncThunk(
  "order/getOrderByOrderNo",
  async (orderNo, token) => {
    const response = await sendRequest(
      "get",
      `/orders/${orderNo}`,
      null,
      token
    );
    return response.data;
  }
);
