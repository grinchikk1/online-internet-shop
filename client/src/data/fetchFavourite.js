import axios from "axios";
import sendRequest from "./sendRequest";
import { fetchFavoritesSuccess } from "../features/favorites/favoriteSlice";

export const createWishlist = async (token, newWishlist) => {
  return sendRequest("post", "/wishlist", newWishlist, token);
};

export const updateWishlist = async (token, updatedWishlist) => {
  return sendRequest("put", "/wishlist", updatedWishlist, token);
};

export const addProductToWishlist = async (token, productId) => {
  return sendRequest("put", `/wishlist/${productId}`, null, token);
};

export const deleteProductFromWishlist = async (token, productId) => {
  return sendRequest("delete", `/wishlist/${productId}`, null, token);
};

export const getWishlist = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/api/wishlist", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(
      fetchFavoritesSuccess(
        response.data == null ? (response.data = []) : response.data
      )
    );
    return response.data;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};

export const deleteWishlist = async (token) => {
  return sendRequest("delete", "/wishlist", null, token);
};
