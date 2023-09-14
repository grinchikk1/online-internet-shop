import sendRequest from "./sendRequest";
import axios from "axios";
import {
  fetchProductsStart,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../features/search/searchSlice";

// Отримання всіх продуктів
export const getProducts = async () => {
  return sendRequest("get", "/products");
};

// Отримання одного продукту за itemNo
export const getProductByItemNo = async (itemNo) => {
  return sendRequest("get", `/products/${itemNo}`);
};

// Додавання нового продукту
export const addProduct = async (product, token) => {
  return sendRequest("post", "/products", product, token);
};

// Редагування продукту
export const updateProduct = async (product, token) => {
  return sendRequest("put", `/products/${product._id}`, product, token);
};

// Функція для запиту фільтрації
export const filterProducts = async (querystring) => {
  return sendRequest("get", `/products/filter?${querystring}`);
};

// Пошук продуктів
export const searchProducts = (searchPhrases) => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.post("/api/products/search", searchPhrases);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
