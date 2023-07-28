import React, { useContext } from "react";
import s from "./cartItem.module.css";
import { ShopContext } from "../../components/context/shop-context";

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
  const { cartItems, addToCart, removeFromCart, updateCartCount } =
    useContext(ShopContext);

  return (
    <div className={s.item_wrapper}>
      <img src={image} alt="#" />
      <div>{name}</div>
      <p>{currentPrice} $</p>
      <div className={s.count}>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
