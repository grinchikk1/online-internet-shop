import axios from "axios";
import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../features/search/searchSlice";

const url = "http://localhost:4000/api";

// Отримання всіх продуктів
export const getProducts = async () => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Отримання одного продукту за itemNo
export const getProductByItemNo = async (itemNo) => {
  try {
    const response = await axios.get(`${url}/products/${itemNo}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Додавання нового продукту
export const addProduct = async (product, token) => {
  try {
    const response = await axios.post(`${url}/api/products`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    return [];
  }
};

// Редагування продукту
export const updateProduct = async (product, token) => {
  try {
    const response = await axios.put(`${url}/products/${product.id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    return [];
  }
};

// Пошук продуктів
export const searchProducts = (searchPhrases) => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const response = await axios.post(`${url}/products/search`, searchPhrases);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
