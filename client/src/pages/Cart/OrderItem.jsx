import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../../components/Checkout/CheckoutStyle";

function OrderItems({ cart, amounts }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.orderPriceItem}>
      <div style={{ borderBottom: "1px solid #D8D8D8" }}>
        {cart.products.map((product) => (
          <Grid
            item
            xs={12}
            key={product._id}
            className={classes.orderPriceItem}
          >
            <div>
              <div className={classes.orderItem}>
                <div>
                  ({amounts[product._id]}) {product.name}
                </div>
                <div>${product.currentPrice}</div>
              </div>
            </div>
          </Grid>
        ))}
      </div>
    </Grid>
  );
}

export default OrderItems;
