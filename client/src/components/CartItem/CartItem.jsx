import React, { useState } from "react";

import { Grid } from "@mui/material";
import { useStyles, theme } from "./CartItemStyles";
import Typography from "@mui/material/Typography";

import { ThemeProvider } from "@mui/material/styles";

import { updateCartCount } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const {
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
  } = props.data;
  const { onRemoveFromCartClicked, amount } = props;
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
  const dispath = useDispatch();

  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    if (amount > 1) {
      dispath(updateCartCount({ itemID: _id, newCount: amount - 1 }));
    }
  };

  const handleIncrement = () => {
    dispath(updateCartCount({ itemID: _id, newCount: amount + 1 }));
  };

  const handleCloseCard = (buttonName) => {
    if (buttonName === "removeFromCart") {
      onRemoveFromCartClicked();
    }
  };
  const handleAmountChange = (e) => {
    const newCount = parseInt(e.target.value);
    if (newCount > 0) {
      dispath(updateCartCount({ itemID: _id, newCount: newCount }));
    }
  };

  return (
    <>
      <Grid container className={s.item_wrapper}>
        <img src={imageUrls[0]} alt={name} className={s.item_image} />
        <Grid className={s.wrapp}>
          <Grid item className={s.wrapp_description}>
            <Typography className={s.item_name}>{name}</Typography>
            <Typography className={s.item_description}>
              {productMaterial} / {brand}
            </Typography>
            <Typography className={s.item_price}>{currentPrice} $</Typography>
          </Grid>

          <Grid item className={s.count_wrapper}>
            <button className={s.count_button} onClick={handleDecrement}>
              -
            </button>
            <input
              className={s.count_input}
              value={amount}
              onChange={handleAmountChange}
            />
            <button className={s.count_button} onClick={handleIncrement}>
              +
            </button>
          </Grid>
        </Grid>

        <Grid item>
          <button
            className={s.close_button}
            onClick={() => handleCloseCard("removeFromCart")}
          >
            {SVGCLOSEBTN}
          </button>
        </Grid>
      </Grid>
      <Grid item className={s.cart_line}></Grid>
    </>
  );
};

export default CartItem;
