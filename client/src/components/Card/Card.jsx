import React from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./CardStyle";
import heart from "./img/heart.svg";

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
  country }) {
  
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.cardContainer}>
        <Container className={styles.cardImgContainer}>
          <img src={image} alt="product" className={styles.cardImg} />
          <Container className={styles.cardHover}>
            <Typography className={styles.cardHoverAdd}>ADD TO CART</Typography>
            <img src={heart} alt="heart" className={styles.cardHoverImg} />
          </Container>
        </Container>        
        <Typography className={ styles.cardName}>
          { name }
        </Typography>
        <Typography className={ styles.cardPrice}>
          $ { currentPrice }
        </Typography>        
      </Container>
    </ThemeProvider>
  );
}
export default Card;
