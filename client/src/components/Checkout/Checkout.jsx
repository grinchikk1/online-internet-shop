import { Grid, Container, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import { initalValues, validationSchema } from "./formSettings";
import { useStyles, theme } from "./CheckoutStyle";
import { ThemeProvider } from "@mui/material/styles";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCustomer } from "../../features/customer/customerSlice";

function Checkout() {
  const classes = useStyles();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.formContainer}>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const randomOrderNumber =
              Math.floor(Math.random() * 9000000) + 1000000;
            const orderDate = new Date();
            dispatch(
              addCustomer({
                ...values,
                orderNumber: randomOrderNumber,
                orderDate: orderDate.toISOString(),
              })
            );

            resetForm();
            setIsOrderPlaced(true);
            navigate("/order-confirmation");
          }}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
            <Form>
              <Grid container spacing={4}>
                <BillingDetails />
                <YourOrder
                  isSubmitting={isSubmitting}
                  handleSubmit={handleSubmit}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </Grid>
            </Form>
          )}
        </Formik>
        {isOrderPlaced && (
          <Alert severity="success" sx={{ width: "100%", marginTop: "15px" }}>
            Your order has been successfully placed
          </Alert>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;
