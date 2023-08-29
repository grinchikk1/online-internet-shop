import sendRequest from "./sendRequest";

// Створити кошик
export const createCart = async (cart, token) => {
  return sendRequest("post", "/cart", cart, token);
};

// Оновити кошик
export const updateCart = async (cart, token) => {
  return sendRequest("put", "/cart", cart, token);
};

// Додати товар до кошика
export const addToCart = async (productId, token) => {
  return sendRequest("put", `/cart/${productId}`, null, token);
};

// Зменшити кількість товару у кошику
export const removeFromCart = async (productId, token) => {
  return sendRequest("delete", `/cart/product/${productId}`, null, token);
};

// Видалити товар з кошика
export const deleteFromCart = async (productId, token) => {
  return sendRequest("delete", `/cart/${productId}`, null, token);
};

// Отримати кошик
export const getCart = async (token) => {
  return sendRequest("get", "/cart", null, token);
};

// Видалити весь кошик
export const deleteCart = async (token) => {
  return sendRequest("delete", "/cart", null, token);
};
