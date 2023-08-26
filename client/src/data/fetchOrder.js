import axios from "axios";

const url = "http://localhost:4000/api";

// Створити замовлення
export const createOrder = async (newOrder) => {
  try {
    const response = await axios.post(`${url}/orders`, newOrder);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Оновити замовлення
export const updateOrder = async (id, updateOrder, token) => {
  try {
    const response = await axios.put(`${url}/orders/${id}`, updateOrder, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Відмінити замовлення
export const cancelOrder = async (id, token) => {
  try {
    const response = await axios.put(`${url}/orders/cancel/${id}`, null, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Видалити замовлення
export const deleteOrder = async (id, token) => {
  try {
    const response = await axios.delete(`${url}/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Отримати замовлення користувача
export const getOrder = async (token) => {
  try {
    const response = await axios.get(`${url}/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Отримати замовлення за номером замовлення
export const getOrderByOrderNo = async (orderNo, token) => {
  try {
    const response = await axios.get(`${url}/orders/${orderNo}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
