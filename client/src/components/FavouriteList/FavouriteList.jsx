import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavouriteItem from "./FavouritesItem";
import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { getWishlist } from "../../data/fetchFavourite";

function FavouriteList() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!token) {
      dispatch(getWishlist(token));
    }
  }, [token, dispatch]);

  const favoritesList = useSelector((state) => state.favorites.favoritesList);

  if (
    !!token
      ? !favoritesList || favoritesList.length === 0
      : favoritesList.length === 0
  ) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <SentimentVeryDissatisfiedIcon fontSize="large" color="primary" />
        <Typography variant="h6" sx={{ padding: "15px" }}>
          Favorites list is empty.
        </Typography>
      </div>
    );
  } else {
    return (
      <div>
        {!!token
          ? favoritesList.products.map((product) => (
              <FavouriteItem key={product._id} item={product} />
            ))
          : favoritesList.map((product) => (
              <FavouriteItem key={product._id} item={product} />
            ))}
      </div>
    );
  }
}

export default FavouriteList;
