import React from "react";

import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

import {
  Accordion,
  AccordionSummary,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useStyles, theme } from "./CartStyles";
import CustomButton from "../../components/CustomButton/CustomButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const s = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <h1 className={s.cart_title}>Shopping Cart</h1>
          <Grid container className={s.wrapper_cart}>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} className={s.cart_items}>
                  {cart.map((product) => {
                    return <CartItem data={product} key={product._id} />;
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
                          className={s.applyCouponBtn}
                          color="inherit"
                          type="submit"
                          variant="outlined"
                        >
                          APPLY COUPON
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={s.cart_totals}>
              <Grid container sx={{ display: "block", justifyContent: "end" }}>
                <Grid item>
                  <h3 className={s.cart_totalsTitle}>Cart totals</h3>
                  <Grid container className={s.cart_subtotalWrapper}>
                    <Grid item className={s.cart_subtitle}>
                      <Typography sx={{ mb: "23px" }}>SUBTOTAL</Typography>
                      <Typography>SHIPPING</Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "content" }}
                      className={s.cart_shipping}
                    >
                      <Typography sx={{ mb: "23px" }}>$ 999</Typography>
                      <Typography sx={{ mb: "39px" }}>
                        Shipping costs will be calculated once you have provided
                        address.
                      </Typography>
                      <Accordion
                        variant="standard"
                        sx={{
                          "@media (max-width : 768px) ": {
                            backgroundColor: "#EFEFEF",
                          },
                        }}
                      >
                        <AccordionSummary
                          sx={{
                            padding: "0px",
                          }}
                          expandIcon={<ExpandMoreIcon />}
                        >
                          <Typography>CALCULATE SHIPPING</Typography>
                        </AccordionSummary>
                        <Stack spacing={1}>
                          <TextField
                            id="standard-basic"
                            label="SELECT A COUNTRY"
                            variant="standard"
                          />
                          <TextField
                            id="standard-basic"
                            label="CITY"
                            variant="standard"
                          />
                          <TextField
                            id="standard-basic"
                            label="POST CODE / ZIP"
                            variant="standard"
                          />
                        </Stack>
                      </Accordion>
                      <Button
                        color="inherit"
                        variant="outlined"
                        className={s.updateTotalsBtn}
                        sx={{
                          marginTop: "24px",
                          "@media (max-width : 768px) ": {
                            background: "#FFF",
                          },
                        }}
                      >
                        UPDATE TOTALS
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <div className={s.cart_totalLine}></div>
              </Grid>
              <Grid container className={s.cart_totalAmount}>
                <div>TOTAL</div>
                <div>$ 999</div>
              </Grid>
              <Grid
                item
                sx={{
                  "@media (max-width : 768px) ": {
                    display: "none",
                  },
                }}
              >
                {/*<Button*/}
                {/*  variant="outlined"*/}
                {/*  type="submit"*/}
                {/*  className={s.checkoutBtn}*/}
                {/*  sx={{ background: "black", color: "white" }}*/}
                {/*>*/}
                {/*  PROCEED TO CHECKOUT*/}
                {/*</Button>*/}
                <CustomButton
                  type="submit"
                  className={s.checkoutBtn}
                  value="PROCEED TO CHECKOUT"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Cart;
