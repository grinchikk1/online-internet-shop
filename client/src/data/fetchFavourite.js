import axios from "axios";
import { fetchFavoritesSuccess } from "../features/favorites/favoriteSlice";

export const url = "http://localhost:4000/api";

export const createWishlist = async (token, newWishlist) => {
  try {
    const response = await axios.post(`${url}/wishlist`, newWishlist, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWishlist = async (updatedWishlist) => {
  try {
    const response = await axios.put("/wishlist", updatedWishlist);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductToWishlist = async (token, productId) => {
  try {
    const response = await axios.put(`${url}/wishlist/${productId}`, null, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductFromWishlist = async (token, productId) => {
  try {
    const response = await axios.delete(`${url}/wishlist/${productId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWishlist = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/wishlist`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(
      fetchFavoritesSuccess(
        response.data == null ? (response.data = []) : response.data
      )
    );
    return response.data; // Return the data extracted from the response
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be handled outside
  }
};
export const deleteWishlist = async () => {
  try {
    const response = await axios.delete("/wishlist");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
