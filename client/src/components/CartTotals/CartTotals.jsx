import React from "react";

import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../../features/cart/cartSelector";

import {
  Accordion,
  AccordionSummary,
  CardActions,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useStyles } from "./CartTotalsStyles";

import CartTotalsCheckout from "./CartTotalsCheckout";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CartTotals = () => {
  const s = useStyles();
  const totalAmount = useSelector(getTotalCartAmount);

  return (
    <Grid item xs={12} sm={12} md={6} className={s.cart_totals}>
      <Grid container sx={{ display: "block", justifyContent: "end" }}>
        <Grid item>
          <h3 className={s.cart_totalsTitle}>Cart totals</h3>
        </Grid>
        <CartTotalsCheckout />
      </Grid>
    </Grid>
  );
};

export default CartTotals;
