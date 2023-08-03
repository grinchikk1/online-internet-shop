import React, { useContext } from "react";
import s from "./product.module.scss";
import { ShopContext } from "./shop-context";

const Product = (props) => {
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
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className={s.product}>
      <div className={s.description}>{name}</div>
      <img src={image} alt="#" className={s.img} />
      <p className={s.price}>{currentPrice} $</p>
      <button className={s.btn} onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
