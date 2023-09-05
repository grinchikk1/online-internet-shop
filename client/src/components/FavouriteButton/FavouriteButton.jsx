import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../features/favorites/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { cardHoverFavouriteButton } from "../Card/CardStyle";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
  getWishlist,
} from "../../data/fetchFavourite";

function FavouriteButton({ item }) {
  const dispatch = useDispatch();

  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!!token) {
      dispatch(getWishlist(token));
    }
  }, [token, dispatch]);

  const isFavorited = !token
    ? favoritesList.some((product) => product._id === item._id)
    : !!token &&
      favoritesList &&
      favoritesList.products &&
      favoritesList.products.some((product) => product._id === item._id);

  const handleToggleFavorite = async () => {
    if (!!token) {
      try {
        if (isFavorited) {
          await deleteProductFromWishlist(token, item._id);
          await dispatch(getWishlist(token));
        } else {
          await addProductToWishlist(token, item._id);
          await dispatch(getWishlist(token));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      if (isFavorited) {
        dispatch(removeFavorites(item._id));
      } else {
        dispatch(addFavorites(item)); // Pass the entire product object as payload
      }
    }
  };

  return (
    <FavoriteIcon
      onClick={handleToggleFavorite}
      style={{ cursor: "pointer", color: isFavorited ? "#D82700" : "#707070" }}
      sx={cardHoverFavouriteButton}
    />
  );
}

export default FavouriteButton;
