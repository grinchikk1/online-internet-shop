import { Grid, Container } from "@mui/material";
import { Formik, Form } from "formik";
import { initalValues, validationSchema } from "./formSettings";
import { useStyles, theme } from "./CheckoutStyle";
import { ThemeProvider } from "@mui/material/styles";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";

function Checkout() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.formContainer}>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
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
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;
