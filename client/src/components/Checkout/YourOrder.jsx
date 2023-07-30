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

function YourOrder({ isSubmitting, handleSubmit, values, setFieldValue }) {
  const classes = useStyles();
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
          <Grid item xs={12} className={classes.orderPriceItem}>
            <div
              style={{
                borderBottom: "1px solid #D8D8D8",
              }}
            >
              <div className={classes.orderItem}>
                <div>Product 2</div>
                <div>Product price 2</div>
              </div>
              <div className={classes.orderItem}>
                <div>Product 3</div>
                <div>Product price 3</div>
              </div>
              <div className={classes.orderItem}>
                <div>Product 1</div>
                <div>Product price 1</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.total}>
              <div>TOTAL</div>
              <div>Total price</div>
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
                value="directBankTransfer"
                control={<Radio style={{ color: "#000000" }} />}
                label="Direct Bank Transfer"
              />
              <FormControlLabel
                value="checkPayments"
                control={<Radio style={{ color: "#000000" }} />}
                label="Check Payments"
              />
              <FormControlLabel
                value="cashOnDelivery"
                control={<Radio style={{ color: "#000000" }} />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="paypal"
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
