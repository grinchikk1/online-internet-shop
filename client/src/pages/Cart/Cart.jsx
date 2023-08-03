import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../components/context/product";
import { ShopContext } from "../../components/context/shop-context";
import CartItem from "../../components/CartItem/CartItem";

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

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const s = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <h1 className={s.cart_title}>Shopping Cart</h1>
          <Grid container className={s.wrapper_cart}>
            <Grid item>
              <Grid container>
                <Grid item spacing={0} className={s.cart_items}>
                  {PRODUCTS.map((product, id) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} key={id} />;
                    }
                  })}
                  {totalAmount === 0 && (
                    <div className={s.cart_empty}>Your cart is EMPTY</div>
                  )}
                  {totalAmount !== 0 && (
                    <Grid
                      container
                      sx={{ width: "580px", justifyContent: "flex-end" }}
                    >
                      <Button
                        color="inherit"
                        style={{
                          marginTop: "39px",
                          height: "53px",
                          width: "168px",
                          fontWeight: "700",
                        }}
                        variant="outlined"
                      >
                        UPDATE CART
                      </Button>
                      <Grid
                        container
                        item
                        sx={{ justifyContent: "space-between" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="Coupon Code"
                          variant="standard"
                          style={{
                            width: "336px",
                            marginTop: "64px",
                          }}
                        />
                        <Button
                          variant="outlined"
                          style={{
                            marginTop: "64px",
                            height: "53px",
                            width: "168px",
                            background: "black",
                            color: "white",
                          }}
                          type="submit"
                        >
                          APPLY COUPON
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={s.cart_totals}>
              <Grid container>
                <Grid item>
                  <h3 className={s.cart_totalsTitle}>Cart totals</h3>
                  <Grid container className={s.cart_subtotalWrapper}>
                    <Grid item className={s.cart_subtitle}>
                      <Typography sx={{ mb: "23px", flexGrow: 1 }}>
                        SUBTOTAL
                      </Typography>
                      <Typography sx={{ flexGrow: 1 }}>SHIPPING</Typography>
                    </Grid>
                    <Grid item className={s.cart_shipping}>
                      <Typography sx={{ mb: "23px" }}>
                        $ {totalAmount}
                      </Typography>
                      <Typography sx={{ mb: "39px" }}>
                        Shipping costs will be calculated once you have provided
                        address.
                      </Typography>
                      <Accordion variant="standard">
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
                            // sx={{ color: "#707070", fontSize: "12px" }}
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
                        sx={{
                          marginTop: "24px",
                          padding: 0,
                          fontWeight: 700,
                          width: "100%",
                          height: "53px",
                        }}
                      >
                        UPDATE TOTALS
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div className={s.cart_totalLine}></div>
              </Grid>
              <Grid container className={s.cart_totalAmount}>
                <div>TOTAL</div>
                <div>$ {totalAmount}</div>
              </Grid>
              <Grid item>
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
    </>
  );
};

export default Cart;
