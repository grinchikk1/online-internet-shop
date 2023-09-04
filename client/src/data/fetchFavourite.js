import axios from "axios";
import sendRequest from "./sendRequest";
import { fetchFavoritesSuccess } from "../features/favorites/favoriteSlice";

export const createWishlist = async (token, newWishlist) =>
  sendRequest("post", "/wishlist", newWishlist, token);

export const updateWishlist = async (token, updatedWishlist) =>
  sendRequest("put", "/wishlist", updatedWishlist, token);

export const addProductToWishlist = async (token, productId) =>
  sendRequest("put", `/wishlist/${productId}`, null, token);

export const deleteProductFromWishlist = async (token, productId) =>
  sendRequest("delete", `/wishlist/${productId}`, null, token);

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
    // eslint-disable-next-line no-console
    console.error("Request error:", error);
    throw error;
  }
};

export const deleteWishlist = async (token) =>
  sendRequest("delete", "/wishlist", null, token);
