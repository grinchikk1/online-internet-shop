import sendRequest from "./sendRequest";

// Створити замовлення
export const createOrder = async (newOrder) => {
  return sendRequest("post", "/orders", newOrder);
};

// Оновити замовлення
export const updateOrder = async (id, updateOrder, token) => {
  return sendRequest("put", `/orders/${id}`, updateOrder, token);
};

// Відмінити замовлення
export const cancelOrder = async (id, token) => {
  return sendRequest("put", `/orders/cancel/${id}`, null, token);
};

// Видалити замовлення
export const deleteOrder = async (id, token) => {
  return sendRequest("delete", `/orders/${id}`, null, token);
};

// Отримати замовлення користувача
export const getOrder = async (token) => {
  return sendRequest("get", "/orders", null, token);
};

// Отримати замовлення за номером замовлення
export const getOrderByOrderNo = async (orderNo, token) => {
  return sendRequest("get", `/orders/${orderNo}`, null, token);
};
