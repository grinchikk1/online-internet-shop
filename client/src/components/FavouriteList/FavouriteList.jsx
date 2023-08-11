import React from "react";
import { useSelector } from "react-redux";
import FavouriteItem from "./FavouritesItem";
import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function FavouriteList() {
  const favoritesList = useSelector((state) => state.favorites.favoritesList);

  if (favoritesList.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <SentimentVeryDissatisfiedIcon fontSize="large" color="primary" />
        <Typography variant="h6" sx={{ padding: "15px" }}>
          Favorites list is empty.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      {favoritesList.map((product) => (
        <FavouriteItem key={product._id} item={product} />
      ))}
    </div>
  );
}

export default FavouriteList;
