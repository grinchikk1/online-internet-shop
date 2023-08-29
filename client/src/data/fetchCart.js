import axios from "axios";

export const url =
  "https://online-internet-shop-dcf87eaec7f8.herokuapp.com/api";

// Створити кошик
export const createCart = async (cart, token) => {
  try {
    const response = await axios.post(`${url}/cart`, cart, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Оновити кошик
export const updateCart = async (cart, token) => {
  try {
    const response = await axios.put(`${url}/cart`, cart, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Додати товар до кошика
export const addToCart = async (productId, token) => {
  try {
    const response = await axios.put(`${url}/cart/${productId}`, null, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Зменшити кількість товару у кошику
export const removeFromCart = async (productId, token) => {
  try {
    const response = await axios.delete(`${url}/cart/product/${productId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Видалити товар з кошика
export const deleteFromCart = async (productId, token) => {
  try {
    const response = await axios.delete(`${url}/cart/${productId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Отримати кошик
export const getCart = async (token) => {
  try {
    const response = await axios.get(`${url}/cart`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Видалити весь кошик
export const deleteCart = async (token) => {
  try {
    const response = await axios.delete(`${url}/cart`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
