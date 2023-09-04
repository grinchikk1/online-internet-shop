/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useStyles,
  theme,
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
import FavouriteButton from "../FavouriteButton/FavouriteButton";

import { addProductToCart } from "../../features/cart/cartSlice";
import { addToCart } from "../../data/fetchCart";

import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";

function Card({
  _id,
  imageUrls,
  name,
  currentPrice,
  productMaterial,
  brand,
  product,
}) {
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleClick = () => {
    navigate(`/product/${_id}`);
  };

  const token = useSelector((state) => state.auth.token);
  const styles = useStyles();
  const dispatch = useDispatch();

  const item = { _id, imageUrls, name, brand };

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
    if (!!token) {
      addToCart(product._id, token);
      setShowSnackbar(true);
    } else {
      CartLocalStorageHelper.addProductToCart(product);
      setShowSnackbar(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="cardContainer" sx={cardContainer}>
        <Container sx={cardImgContainer}>
          <img
            src={imageUrls[0]}
            alt="product"
            onClick={handleClick}
            className={styles.cardImg}
          />
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
      <CustomSnackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        titleText="success"
        text="The item added to your Shopping bag."
      />
    </ThemeProvider>
  );
}

export default Card;
