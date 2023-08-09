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

function Card({
  _id,
  enabled,
  image,
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
}) {
  const styles = useStyles();
  const item = { _id, image, name, brand };
  return (
    <ThemeProvider theme={theme}>
      <Container className="cardContainer" sx={cardContainer}>
        <Container sx={cardImgContainer}>
          <img src={image} alt="product" className={styles.cardImg} />
          <Container className="cardHover" sx={cardHover}>
            <Typography sx={cardHoverAdd}>ADD TO CART</Typography>
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
