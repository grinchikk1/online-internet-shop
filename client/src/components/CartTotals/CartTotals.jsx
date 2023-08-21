import React from "react";

import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../../features/cart/cartSelector";

import {
  Accordion,
  AccordionSummary,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useStyles } from "./CartTotalsStyles";

import CartTotalsCheckout from "./CartTotalsCheckout";

const CartTotals = () => {
  const s = useStyles();
  const totalAmount = useSelector(getTotalCartAmount);

  return (
    <Grid item xs={12} sm={12} md={6} className={s.cart_totals}>
      <Grid container sx={{ display: "block", justifyContent: "end" }}>
        <Grid item>
          <h3 className={s.cart_totalsTitle}>Cart totals</h3>
          <Grid container className={s.cart_subtotalWrapper}>
            <Grid item className={s.cart_subtitle}>
              <Typography sx={{ mb: "23px" }}>SUBTOTAL</Typography>
              <Typography>SHIPPING</Typography>
            </Grid>
            <Grid item sx={{ display: "content" }} className={s.cart_shipping}>
              <Typography sx={{ mb: "23px" }}>$ {totalAmount}</Typography>
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
        <CartTotalsCheckout />
      </Grid>
    </Grid>
  );
};

export default CartTotals;
