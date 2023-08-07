import React from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./CardStyle";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

function Card({
  id,
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
}) {
  const styles = useStyles();
  const item = { id, image, name, brand };
  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.cardContainer}>
        <Container className={styles.cardImgContainer}>
          <img src={image} alt="product" className={styles.cardImg} />
          <Container className={styles.cardHover}>
            <Typography className={styles.cardHoverAdd}>ADD TO CART</Typography>
            <FavouriteButton item={item} />
          </Container>
        </Container>
        <Container className={styles.cardNameContainer}>
          <Typography className={styles.cardName}>{name}</Typography>
          <Typography className={styles.cardMaterial}>
            {productMaterial}
          </Typography>
        </Container>
        <Typography className={styles.cardPrice}>
          $ {currentPrice},00
        </Typography>
        <Typography className={styles.cardBrand}>{brand}</Typography>
      </Container>
    </ThemeProvider>
  );
}
export default Card;
