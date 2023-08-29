import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { useStyles } from "./CartItemStyles";

import { updateCartCount } from "../../features/cart/cartSlice";
import {
  deleteFromCart,
  removeFromCart,
  addToCart,
} from "../../data/fetchCart";
import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";

const CartItem = (props) => {
  const { _id, imageUrls, name, currentPrice, productMaterial, brand } =
    props.data;
  const token = useSelector((state) => state.auth.token);
  const { onRemoveFromCartClicked, amount } = props;
  const SVGCLOSEBTN = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none">
      <path
        d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (amount > 1) {
      dispatch(updateCartCount({ itemID: _id, newCount: amount - 1 }));
      if (!!token) {
        removeFromCart(_id, token);
      } else {
        CartLocalStorageHelper.updateCartCount({
          itemID: _id,
          newCount: amount - 1,
        });
      }
    }
  };

  const handleIncrement = () => {
    dispatch(updateCartCount({ itemID: _id, newCount: amount + 1 }));
    if (!!token) {
      addToCart(_id, token);
    } else {
      CartLocalStorageHelper.updateCartCount({
        itemID: _id,
        newCount: amount + 1,
      });
    }
  };

  const handleAmountChange = (e) => {
    const newCount = parseInt(e.target.value);
    if (newCount > 0) {
      dispatch(updateCartCount({ itemID: _id, newCount: newCount }));
    }
  };

  const handleRemoveCard = (buttonName) => {
    if (buttonName === "removeFromCart") {
      onRemoveFromCartClicked();
    }
  };

  const handleRemoveProductFromCart = () => {
    handleRemoveCard("removeFromCart");
    if (!!token) {
      deleteFromCart(_id, token);
    }
  };

  return (
    <Box>
      <Grid container className={styles.item_wrapper}>
        <img src={imageUrls[0]} alt={name} className={styles.item_image} />
        <Box className={styles.wrapp}>
          <Grid item className={styles.wrapp_description}>
            <p className={styles.item_name}>{name}</p>
            <p className={styles.item_description}>
              {productMaterial} / {brand}
            </p>
            <Typography className={styles.item_price}>
              {currentPrice} $
            </Typography>
          </Grid>

          <Grid item className={styles.count_wrapper}>
            <button className={styles.count_button} onClick={handleDecrement}>
              -
            </button>
            <input
              className={styles.count_input}
              value={amount}
              onChange={handleAmountChange}
            />
            <button className={styles.count_button} onClick={handleIncrement}>
              +
            </button>
          </Grid>
        </Box>

        <Grid item>
          <button
            className={styles.close_button}
            onClick={handleRemoveProductFromCart}>
            {SVGCLOSEBTN}
          </button>
        </Grid>
      </Grid>
      <div className={styles.cart_line}></div>
    </Box>
  );
};

export default CartItem;
