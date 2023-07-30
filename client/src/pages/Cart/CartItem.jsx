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
      <img src={image} alt="#" className={s.item_image} />
      <div className={s.wrapp_description}>
        <div className={s.item_name}>{name}</div>
        <p className={s.item_description}>
          {productMaterial} / {brand}
        </p>
        <p className={s.item_price}>{currentPrice} $</p>
      </div>
      <div className={s.count_wrapper}>
        <button className={s.count_button} onClick={() => removeFromCart(id)}>
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
      </div>
    </div>
  );
};

export default CartItem;
