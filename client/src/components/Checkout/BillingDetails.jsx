import { Grid, Paper, Typography, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";

import { useStyles, fieldStyle } from "./CheckoutStyle";

function BillingDetails() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h5" gutterBottom className={classes.heading}>
        Billing Details
      </Typography>

      <Paper elevation={0} sx={{}}>
        <Grid container spacing={2}>
          {/* <Grid item xs={6}> */}
          <Grid item xs={12} sm={6}>
            <Field
              as={TextField}
              type="text"
              name="firstName"
              placeholder="First name *"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="firstName"
              component="div"
            />
          </Grid>
          {/* <Grid item xs={6}> */}
          <Grid item xs={12} sm={6}>
            <Field
              as={TextField}
              type="text"
              name="lastName"
              placeholder="Last name *"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="lastName"
              component="div"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              type="text"
              name="city"
              placeholder="Town / City *"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="city"
              component="div"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              type="text"
              placeholder="Street Address *"
              name="streetAddress"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="streetAddress"
              component="div"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              type="text"
              placeholder="Phone *"
              name="phone"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="phone"
              component="div"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              type="text"
              placeholder="Email *"
              name="email"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="email"
              component="div"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              type="text"
              name="notes"
              placeholder="Order notes"
              fullWidth
              className={classes.field}
              sx={fieldStyle}
            />
            <ErrorMessage
              className={classes.error}
              name="orderNotes"
              component="div"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default BillingDetails;
