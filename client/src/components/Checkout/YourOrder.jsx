import CustomButton from "../CustomButton/CustomButton";
import {
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ErrorMessage } from "formik";
import { initalValues } from "./formSettings";
import { useStyles } from "./CheckoutStyle";
import { FaPaypal } from "react-icons/fa";
import OrderItemsCart from "../../pages/Cart/OrderItemCart";
import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../../features/cart/cartSelector";

function YourOrder({ isSubmitting, handleSubmit, values, setFieldValue }) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector(getTotalCartAmount);
  const amounts = useSelector((state) => state.cart.amount);
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h5" gutterBottom className={classes.heading}>
        Your order
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "max-context",
          background: "#EFEFEF",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.orderPrice}>
              <div>PRODUCT</div>
              <div>PRICE</div>
            </div>
          </Grid>
          <OrderItemsCart cart={cart} amounts={amounts} />
          <Grid item xs={12}>
            <div className={classes.total}>
              <div>TOTAL</div>
              <div>${totalAmount}</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              name="paymentOption"
              defaultValue={initalValues.paymentOption}
              value={values.paymentOption}
              onChange={(event) =>
                setFieldValue("paymentOption", event.target.value)
              }
            >
              <FormControlLabel
                value="Direct Bank Transfer"
                control={<Radio style={{ color: "#000000" }} />}
                label="Direct Bank Transfer"
              />
              <FormControlLabel
                value="Card on Delivery"
                control={<Radio style={{ color: "#000000" }} />}
                label="Card on Delivery"
              />
              <FormControlLabel
                value="Cash on Delivery"
                control={<Radio style={{ color: "#000000" }} />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="Paypal"
                control={<Radio style={{ color: "#000000" }} />}
                label={
                  <>
                    PayPal{" "}
                    <FaPaypal
                      style={{
                        marginLeft: "8px",
                        transform: "translateY(3px)",
                      }}
                    />
                  </>
                }
              />
            </RadioGroup>

            <ErrorMessage name="paymentOption" component="div" />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              type="submit"
              value={"PLACE ORDER"}
              disabled={isSubmitting}
              onClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default YourOrder;
