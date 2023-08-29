import axios from "axios";

const url = "https://online-internet-shop-dcf87eaec7f8.herokuapp.com/api";

// Додавання нового фільтру
export const addFilter = async (filter, tokenAdmin) => {
  try {
    const response = await axios.post(`${url}/filters`, filter, {
      headers: {
        Authorization: tokenAdmin,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Оновлення фільтру
export const updateFilter = async (id, filter, tokenAdmin) => {
  try {
    const response = await axios.put(`${url}/filters/${id}`, filter, {
      headers: {
        Authorization: tokenAdmin,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Отримання всіх фільтрів
export const getFilter = async () => {
  try {
    const response = await axios.get(`${url}/filters`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Отримання фільтру за типом
export const getFilterByType = async (type) => {
  try {
    const response = await axios.get(`${url}/filters/${type}`);
    const filters = response.data;
    const a = filters.map((filter) => filter.name);
    console.log(a);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Видалення фільтру
export const deleteFilter = async (id, tokenAdmin) => {
  try {
    const response = await axios.delete(`${url}/filters/${id}`, {
      headers: {
        Authorization: tokenAdmin,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
