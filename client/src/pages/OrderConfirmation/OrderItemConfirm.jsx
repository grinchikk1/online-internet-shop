import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../../components/Checkout/CheckoutStyle";

function OrderItemsConfirm({ cart, amounts }) {
  const classes = useStyles();

  if (cart.products && cart.products.length > 0) {
    const products = cart.products.map((product) => product.product);
    return (
      <Grid item xs={12} className={classes.orderPriceItem}>
        <div style={{ borderBottom: "1px solid #D8D8D8" }}>
          {products.map((product) => (
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
  } else {
    const products = cart.productsOrderLocal.map((product) => product.product);
    return (
      <Grid item xs={12} className={classes.orderPriceItem}>
        <div style={{ borderBottom: "1px solid #D8D8D8" }}>
          {products.map((product) => (
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
}

export default OrderItemsConfirm;
