import React, { useState } from "react";

import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../../features/cart/cartSelector";

import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useStyles } from "./CartTotalsStyles";
import Checkout from "../Checkout/Checkout";

const CartTotals = () => {
  const s = useStyles();
  const totalAmount = useSelector(getTotalCartAmount);
  const cart = useSelector((state) => state.cart.cart);

  const [isBillingDetailsOpen, setIsBillingDetailsOpen] = useState(false);
  const [isCartEmptyAlertOpen, setIsCartEmptyAlertOpen] = useState(false);

  const proceedToCheckout = () => {
    if (cart.length > 0) {
      setIsBillingDetailsOpen(true);
    } else {
      setIsCartEmptyAlertOpen(true);
    }
  };

  return (
    <Grid item xs={12} sm={12} md={6} className={s.cart_totals}>
      <Grid container sx={{ display: "block", justifyContent: "end" }}>
        <Grid item>
          <h3 className={s.cart_totalsTitle}>Cart totals</h3>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <div className={s.cart_totalLine}></div>
        </Grid>
        <Grid container className={s.cart_totalAmount}>
          <div>TOTAL</div>
          <div>$ {totalAmount}</div>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "100%",
            height: "53px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          onClick={proceedToCheckout}
        >
          PROCEED TO CHECKOUT
        </Button>
        {cart.length === 0 && isCartEmptyAlertOpen && (
          <Alert
            onClose={() => setIsCartEmptyAlertOpen(false)}
            severity="error"
            sx={{ width: "100%", marginTop: "15px" }}
          >
            Your cart is empty
          </Alert>
        )}
        <Dialog
          open={isBillingDetailsOpen}
          onClose={() => setIsBillingDetailsOpen(false)}
          fullWidth
          maxWidth="lg"
        >
          <DialogContent>
            <Checkout />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setIsBillingDetailsOpen(false)}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default CartTotals;
