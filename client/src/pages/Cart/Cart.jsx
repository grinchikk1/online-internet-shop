import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import s from "./cart.module.css";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../components/context/shop-context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <h1 className={s.cart_title}>Shopping Cart</h1>
      <div className={s.cart_wrapper}>
        <div className={s.cart_items}>
          {/* eslint-disable-next-line array-callback-return */}
          {PRODUCTS.map((product, id) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={id} />;
            }
          })}
        </div>

        <div className={s.cart_frame}>FRAME</div>
      </div>
      {totalAmount > 0 ? (
        <div className={s.cart_checkout}>
          <p>Subtotal: {totalAmount}$</p>
          <button onClick={() => navigate("/shop")}>Continue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your cart is EMPTY</h1>
      )}
    </>
  );
};

export default Cart;
