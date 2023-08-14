import React from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./CardStyle";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

import {
  cardContainer,
  cardImgContainer,
  cardNameContainer,
  cardHover,
  cardHoverAdd,
  cardName,
  cardPrice,
  cardMaterial,
  cardBrand,
} from "./CardStyle";
import { addProductToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { createCart } from "../../data/fetchCart";

export const addProductToLocalStorage = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

function Card({
  _id,
  enabled,
  imageUrls,
  quantity,
  name,
  currentPrice,
  categories,
  productMaterial,
  brand,
  itemNo,
  date,
  country,
  previousPrice,
  product,
}) {
  const styles = useStyles();
  const dispatch = useDispatch();

  const item = { _id, imageUrls, name, brand };

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
    createCart(product._id, "");
    addProductToLocalStorage(product);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="cardContainer" sx={cardContainer}>
        <Container sx={cardImgContainer}>
          <img src={imageUrls[0]} alt="product" className={styles.cardImg} />
          <Container className="cardHover" sx={cardHover}>
            <Typography sx={cardHoverAdd} onClick={handleAddProductToCart}>
              ADD TO CART
            </Typography>
            <FavouriteButton item={item} />
          </Container>
        </Container>
        <Typography sx={cardName}>{name}</Typography>
        <Container sx={cardNameContainer}>
          <Typography sx={cardPrice}>$ {currentPrice},00</Typography>
          <Typography sx={cardMaterial}>{productMaterial}</Typography>
        </Container>
        <Typography sx={cardBrand}>{brand}</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Card;
