import React from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles, theme } from "./CardStyle";
import {
  cardContainer,
  cardImgContainer,
  cardNameContainer,
  cardHover,
  cardHoverAdd,
  cardName,
  cardPrice,
  cardMaterial,
  cardBrand
} from "./CardStyle";
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
      <Container
        // className={styles.cardContainer}
        className="cardContainer"
        sx={cardContainer }
      >
        <Container
          // className={styles.cardImgContainer}
          sx={cardImgContainer }
        >
          <img src={image} alt="product" className={styles.cardImg} />
          <Container 
          // className={styles.cardHover}
          className="cardHover"
          sx={cardHover }
          >
            <Typography 
            // className={styles.cardHoverAdd}
            sx={cardHoverAdd }
            >
              ADD TO CART
            </Typography>
            <img src={heart} alt="heart" className={styles.cardHoverImg} />
          </Container>
        </Container> 
        <Typography
        //  className={ styles.cardName}
         sx={ cardName}
         >
          { name }
        </Typography>
        < Container
          // className={styles.cardNameContainer}
          sx={ cardNameContainer}
        >
          <Typography
            // className={styles.cardPrice}
            sx={ cardPrice}
          >
          $ { currentPrice },00
          </Typography>
          <Typography
            // className={styles.cardMaterial}
            sx={ cardMaterial}
          >
            { productMaterial }
          </Typography>
        </Container > 
        <Typography
          // className={styles.cardBrand}
          sx={ cardBrand}      
        >
          { brand }
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
export default Card;
