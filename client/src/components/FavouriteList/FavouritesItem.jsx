import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../features/favorites/favoriteSlice";
import { useNavigate } from "react-router-dom";

function FavouriteItem({ item }) {
  const { imageUrls, name, brand, _id } = item;
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

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <Card
      sx={{ width: "50vw", maxWidth: "400px", marginBottom: "20px" }}
      onClick={handleCardClick}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrls[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      />
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
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite();
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default FavouriteItem;
