import sendRequest from "./sendRequest";

// Додавання нового фільтру
export const addFilter = async (filter, tokenAdmin) => {
  return sendRequest("post", "/filters", filter, tokenAdmin);
};

// Оновлення фільтру
export const updateFilter = async (id, filter, tokenAdmin) => {
  return sendRequest("put", `/filters/${id}`, filter, tokenAdmin);
};

// Отримання всіх фільтрів
export const getFilter = async () => {
  return sendRequest("get", "/filters");
};

// Отримання фільтру за типом
export const getFilterByType = async (type) => {
  return sendRequest("get", `/filters/${type}`);
};

// Видалення фільтру
export const deleteFilter = async (id, tokenAdmin) => {
  return sendRequest("delete", `/filters/${id}`, null, tokenAdmin);
};
