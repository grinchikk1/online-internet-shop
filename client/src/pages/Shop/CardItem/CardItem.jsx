import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../data/fetchCart";
import { getUserToken } from "../../../data/fetchUsers";
import FavouriteButtonItem from "./FavoriteButtonItem";

export const addProductToLocalStorage = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export default function MultiActionAreaCard({ card }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const token = getUserToken();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    navigate(`/product/${card._id}`);
  };

  const cards = {
    height: 350,
    width: 200,
    boxShadow: "none",
    margin: "0 auto",
  };

  const img = {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  };

  const discount = {
    position: "absolute",
    top: "16px",
    left: "16px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "8px",
    paddingRight: "8px",
    color: "white",
    backgroundColor: "rgba(161, 138, 104, 1)",
    fontSize: "12px",
    lineHeight: "20px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3px",
  };

  const cardHover = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    top: "145px",
    width: "100%",
    height: "65px",
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    transition: "all 0.5s ease",
    opacity: 0,
    "@media (min-width: 600px) ": {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  };

  const cardHoverVisible = {
    opacity: 1, // Показуємо елемент при наведенні
  };
  const cardHoverAdd = {
    fontSize: "16px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
    color: "#000000",
    cursor: "pointer",
    userSelect: "none",
    "@media (max-width: 579.9px)": {
      fontSize: "12px",
      fontWeight: "600",
    },
  };

  const discountPrice = (
    (card.currentPrice / card.previousPrice) *
    100
  ).toFixed(0);

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(card));
    if (!!token) {
      addToCart(card._id, token);
    } else {
      addProductToLocalStorage(card);
    }
  };

  return (
    <Card style={cards}>
      <CardActionArea
        sx={{
          backgroundColor: "#fff",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          onClick={handleClick}
          component="img"
          style={img}
          src={card.imageUrls[0]}
          alt={card.name}
        ></CardMedia>
        <div style={discount} className="discount">
          <span>-</span>
          <span>{discountPrice}%</span>
        </div>

        <Container sx={{ ...cardHover, ...(isHovered && cardHoverVisible) }}>
          <Typography sx={cardHoverAdd} onClick={handleAddProductToCart}>
            ADD TO CART
          </Typography>
          <FavouriteButtonItem card={card} />
        </Container>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "400",
            color: "black",
            marginBottom: "16px",
            marginTop: "20px",
          }}
        >
          {card.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              marginBottom: "10px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgba(161, 138, 104, 1)",
            }}
          >
            ${card.currentPrice},00
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(112, 112, 112, 1)",
            }}
          >
            {card.productMaterial}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "400",
            color: "black",
            // color: "rgb(191 140 140)",
          }}
        >
          {card.brand}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
