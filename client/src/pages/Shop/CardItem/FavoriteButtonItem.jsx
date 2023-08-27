// FavouriteButton.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../../features/favorites/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavouriteButtonItem({ card }) {
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  const isFavorited = favoritesList.some((product) => product._id === card._id);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorites(card._id));
    } else {
      dispatch(addFavorites(card));
    }
  };

  const cardHoverFavouriteButton = {
    width: "25px",
    height: "25px",
    "@media(max-width: 769px)": {
      width: "20px",
      height: "20px",
    },
  };

  return (
    <FavoriteIcon
      onClick={handleToggleFavorite}
      style={{ cursor: "pointer", color: isFavorited ? "#D82700" : "#707070" }}
      sx={cardHoverFavouriteButton}
    />
  );
}

export default FavouriteButtonItem;
