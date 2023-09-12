import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../../components/Checkout/CheckoutStyle";
import CustomSnackbar from "../../components/CustomSnackBar/CustomSnackBar";

function OrderItemsConfirm({ cart, amounts }) {
  const classes = useStyles();
  const [cartData, setCartData] = useState([]);
  const [amountsData, setAmountsData] = useState({});
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    setCartData(cart.products);
    setAmountsData(amounts);
    setIsOrderPlaced(true);
  }, [cart, amounts]);

  if (cart || cart.products || cart.products.length !== 0) {
    return (
      <Grid item xs={12} className={classes.orderPriceItem}>
        <div style={{ borderBottom: "1px solid #D8D8D8" }}>
          {cartData.map((cartProduct) => {
            const product = cartProduct.product;
            const productId = cartProduct._id;
            const amount = amountsData[productId] || 0;

            return (
              <Grid
                item
                xs={12}
                key={productId}
                className={classes.orderPriceItem}
              >
                <div>
                  <div className={classes.orderItem}>
                    <div>
                      ({amount}) {product.name}
                    </div>
                    <div>${product.currentPrice}</div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </div>
        <CustomSnackbar
          open={isOrderPlaced}
          onClose={() => setIsOrderPlaced(false)}
          severity="success"
          titleText="success"
          text="Your order has been successfully placed"
        />
      </Grid>
    );
  }
}

export default OrderItemsConfirm;
