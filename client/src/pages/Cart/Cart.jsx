import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Box } from "@mui/material";

import { useStyles } from "./CartStyles";

import { removeProductFromCart, setCart } from "../../features/cart/cartSlice";
import { getCart } from "../../data/fetchCart";

import CartItem from "../../components/CartItem/CartItem";
import CartTotals from "../../components/CartTotals/CartTotals";
import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const s = useStyles();
  const dispatch = useDispatch();

  const amounts = useSelector((state) => state.cart.amount);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!!token) {
      getCart(token).then((data) => {
        dispatch(
          setCart(
            data.data?.products?.reduce(
              (acc, item) => {
                const product = item.product;
                const amount = item.cartQuantity;
                return {
                  cart: [...acc.cart, product],
                  amount: {
                    ...acc.amount,
                    [product._id]: amount,
                  },
                };
              },
              { amount: {}, cart: [] }
            ) || { amount: {}, cart: [] }
          )
        );
      });
    } else {
      dispatch(setCart(CartLocalStorageHelper.getCart()));
    }
  }, [dispatch, token]);

  return (
    <Container maxWidth="lg">
      <h1 className={s.cart_title}>Shopping Cart</h1>
      <Grid
        container
        className={s.wrapper_cart}
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <Box>
            <Grid item xs={12} sm={12} md={12}>
              {cart.map((product) => {
                return (
                  <CartItem
                    data={product}
                    key={product._id}
                    onRemoveFromCartClicked={() => {
                      dispatch(removeProductFromCart(product._id));
                      CartLocalStorageHelper.removeProductFromCart(product._id);
                    }}
                    amount={amounts[product._id]}
                  />
                );
              })}
              {cart.length === 0 && (
                <div className={s.cart_empty}>Your cart is EMPTY</div>
              )}
            </Grid>
          </Box>
        </Grid>
        <CartTotals />
      </Grid>
    </Container>
  );
};

export default Cart;
