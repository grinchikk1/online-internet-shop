import React, { useEffect } from "react";

import CartItem from "../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid, TextField, Box } from "@mui/material";

import Button from "@mui/material/Button";
import { useStyles } from "./CartStyles";

import { removeProductFromCart, setCart } from "../../features/cart/cartSlice";
import { updateCart } from "../../data/fetchCart";
import CartTotals from "../../components/CartTotals/CartTotals";
import { getUserToken } from "../../data/fetchUsers";
import { getCart } from "../../data/fetchCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const s = useStyles();
  const dispatch = useDispatch();

  const amounts = useSelector((state) => state.cart.amount);
  const token = getUserToken();

  useEffect(() => {
    if (!!token) {
      getCart(token).then((data) => {
        dispatch(
          setCart(
            data.products.reduce(
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
            )
          )
        );
      });
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <h1 className={s.cart_title}>Shopping Cart</h1>
      <Grid container className={s.wrapper_cart}>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Grid item xs={12} sm={12} md={12}>
              {cart.map((product) => {
                return (
                  <CartItem
                    data={product}
                    key={product._id}
                    onRemoveFromCartClicked={() =>
                      dispatch(removeProductFromCart(product._id))
                    }
                    amount={amounts[product._id]}
                  />
                );
              })}
              {cart.length === 0 && (
                <div className={s.cart_empty}>Your cart is EMPTY</div>
              )}
              {cart.length !== 0 && (
                <Grid container sx={{ justifyContent: "flex-end" }}>
                  <Button
                    className={s.updateCartBtn}
                    color="inherit"
                    variant="outlined"
                    onClick={() => {
                      updateCart([...cart], "");
                    }}
                  >
                    UPDATE CART
                  </Button>
                  <Grid
                    container
                    item
                    sx={{
                      justifyContent: "space-between",
                      "@media (max-width : 768px) ": {
                        flexDirection: "column",
                      },
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Coupon Code"
                      variant="standard"
                      style={{
                        marginTop: "64px",
                      }}
                    />
                    <Button
                      sx={{
                        marginTop: "60px",
                        height: "53px",
                        width: "168px",
                        background: "black",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                        "@media (max-width : 768px) ": {
                          width: "100%",
                          marginBottom: "30px",
                        },
                      }}
                      type="submit"
                      variant="outlined"
                    >
                      APPLY COUPON
                    </Button>
                  </Grid>
                </Grid>
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
