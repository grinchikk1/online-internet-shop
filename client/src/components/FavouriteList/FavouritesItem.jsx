import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../features/favorites/favoriteSlice";

function FavouriteItem({ item }) {
  const { image, name, brand } = item;

  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  const isFavorited = favoritesList.some((product) => product._id === item._id);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorites(item._id));
    } else {
      dispatch(addFavorites(item));
    }
  };

  return (
    <Card sx={{ maxWidth: 300, marginBottom: "20px" }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Brand: {brand}
          </Typography>
          <HeartBrokenIcon
            sx={{ cursor: "pointer", ":hover": { color: "#D82700" } }}
            onClick={handleToggleFavorite}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default FavouriteItem;
