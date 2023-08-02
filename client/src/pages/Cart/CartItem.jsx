import React, { useContext, useState } from "react";
import s from "./cartItem.module.css";
import { ShopContext } from "../../components/context/shop-context";
import { CardActionArea, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

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
  const SVGCLOSEBUTTON = (
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
  const { cartItems, addToCart, removeFromCart, updateCartCount } =
    useContext(ShopContext);

  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <>
      {isCardOpen && (
        <Grid container spacing={4} className={s.item_wrapper}>
          <Grid item>
            <img src={image} alt="#" className={s.item_image} />
          </Grid>

          <Grid item className={s.wrapp_description}>
            <div className={s.item_name}>{name}</div>
            <p className={s.item_description}>
              {productMaterial} / {brand}
            </p>
            <p className={s.item_price}>{currentPrice} $</p>
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
              {SVGCLOSEBUTTON}
            </button>
          </Grid>
        </Grid>
      )}

      {isCardOpen && <span className={s.cart_line} />}
    </>
  );
};

export default CartItem;
