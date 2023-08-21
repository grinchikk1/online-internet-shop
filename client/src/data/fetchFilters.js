import axios from "axios";

const url = "http://localhost:4000/api";

// Додавання нового фільтру
export const addFilter = async (filter, tokenAdmin) => {
  try {
    const response = await axios.post(`${url}/filters`, filter, {
      headers: {
        Authorization: `Bearer ${tokenAdmin}`,
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
        Authorization: `Bearer ${tokenAdmin}`,
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
    const filters = response.data; // Отримати масив фільтрів з властивості data
    const a = filters.map((filter) => filter.name); // Витягнути імена фільтрів
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
        Authorization: `Bearer ${tokenAdmin}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
