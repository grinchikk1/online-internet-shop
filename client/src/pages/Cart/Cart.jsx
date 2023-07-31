import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import s from "./cart.module.css";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../components/context/shop-context";
import CartItem from "./CartItem";

import { theme } from "../Contact/ContactStyles";
import {
  Accordion,
  AccordionSummary,
  Autocomplete,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <h1 className={s.cart_title}>Shopping Cart</h1>
      <div className={s.wrapper}>
        <div className={s.wrapper_items}>
          <div className={s.cart_items}>
            {/* eslint-disable-next-line array-callback-return */}
            {PRODUCTS.map((product, id) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} key={id} />;
              }
            })}
          </div>
          {totalAmount === 0 && (
            <h1 className={s.cart_empty}>Your cart is EMPTY</h1>
          )}
        </div>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Cart totals
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className={s.card_subtotal_wrapper}>
                    <div className={s.cart_subtotal}>
                      <h4>SUBTOTAL</h4>
                      <h4>SHIPPING</h4>
                    </div>
                    <Grid item xs={12}>
                      <div className={s.cart_amount}>
                        <div>$ {totalAmount}</div>
                        <p>
                          Shipping costs will be calculated once you have
                          provided address.
                        </p>
                        <Accordion variant="standard">
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>CALCULATE SHIPPING</Typography>
                          </AccordionSummary>
                          <Stack spacing={1}>
                            <Autocomplete
                              id="SELECT A COUNTRY"
                              disableCloseOnSelect
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="SELECT A COUNTRY"
                                  variant="standard"
                                />
                              )}
                            />
                            <Autocomplete
                              id="CITY"
                              clearOnEscape
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="CITY"
                                  variant="standard"
                                />
                              )}
                            />
                            <Autocomplete
                              id="POST CODE / ZIP"
                              disableClearable
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="POST CODE / ZIP"
                                  variant="standard"
                                />
                              )}
                            />
                          </Stack>
                        </Accordion>
                        <Button
                          color="inherit"
                          style={{
                            marginTop: "24px",
                            height: "53px",
                            fontWeight: "700",
                          }}
                          variant="outlined"
                        >
                          UPDATE TOTALS
                        </Button>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      borderBottom: "1px solid #D8D8D8",
                      paddingBottom: "24px",
                    }}
                  ></div>
                </Grid>
                <Grid item xs={12}>
                  <div className={s.cart_total}>
                    <div>TOTAL</div>
                    <div>$ {totalAmount}</div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    style={{
                      width: "100%",
                      height: "53px",
                      background: "black",
                      color: "white",
                    }}
                    type="submit"
                  >
                    PROCEED TO CHECKOUT
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Cart;
