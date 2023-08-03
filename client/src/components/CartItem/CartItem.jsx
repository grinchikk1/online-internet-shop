import React, { useContext, useState } from "react";

import { ShopContext } from "../context/shop-context";
import { Grid } from "@mui/material";
import { useStyles, theme } from "./CartItemStyles";
import Typography from "@mui/material/Typography";

import { ThemeProvider } from "@mui/material/styles";

const CartItem = (props) => {
  const {
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
  } = props.data;
  const SVGCLOSEBTN = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
  const s = useStyles();

  const { cartItems, addToCart, removeFromCart, updateCartCount } =
    useContext(ShopContext);

  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {isCardOpen && (
          <Grid container className={s.item_wrapper}>
            <Grid item>
              <img src={image} alt="#" className={s.item_image} />
            </Grid>
            <Grid item className={s.wrapp_description}>
              <Typography className={s.item_name}>{name}</Typography>
              <Typography className={s.item_description}>
                {productMaterial} / {brand}
              </Typography>
              <Typography className={s.item_price}>{currentPrice} $</Typography>
            </Grid>
            <Grid item className={s.count_wrapper}>
              <button
                className={s.count_button}
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
              <input
                className={s.count_input}
                value={cartItems[id]}
                onChange={(e) => updateCartCount(Number(e.target.value), id)}
              />
              <button className={s.count_button} onClick={() => addToCart(id)}>
                +
              </button>
            </Grid>
            <Grid item>
              <button className={s.close_button} onClick={handleCloseCard}>
                {SVGCLOSEBTN}
              </button>
            </Grid>
          </Grid>
        )}
        <Grid item className={s.cart_line}></Grid>
      </ThemeProvider>
    </>
  );
};

export default CartItem;
