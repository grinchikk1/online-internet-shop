import { Grid, Container, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import { initalValues, validationSchema } from "./formSettings";
import { useStyles, theme } from "./CheckoutStyle";
import { ThemeProvider } from "@mui/material/styles";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useState } from "react";

function Checkout({ totalAmount, amounts }) {
  const classes = useStyles();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.formContainer}>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
            setIsOrderPlaced(true);
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
                  totalAmount={totalAmount}
                  amounts={amounts}
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
