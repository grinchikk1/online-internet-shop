import sendRequest from "./sendRequest";

// Додавання нового фільтру
export const addFilter = async (filter, tokenAdmin) =>
  sendRequest("post", "/filters", filter, tokenAdmin);

// Оновлення фільтру
export const updateFilter = async (id, filter, tokenAdmin) =>
  sendRequest("put", `/filters/${id}`, filter, tokenAdmin);

// Отримання всіх фільтрів
export const getFilter = async () => sendRequest("get", "/filters");

// Отримання фільтру за типом
export const getFilterByType = async (type) =>
  sendRequest("get", `/filters/${type}`);

// Видалення фільтру
export const deleteFilter = async (id, tokenAdmin) =>
  sendRequest("delete", `/filters/${id}`, null, tokenAdmin);
