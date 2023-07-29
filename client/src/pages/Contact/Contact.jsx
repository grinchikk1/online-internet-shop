import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useStyles, theme, fieldStyle } from "./ContactStyles";
import { ThemeProvider } from "@mui/material/styles";
import Checkout from "../../components/Checkout/Checkout";
import { initialValues, validationSchema } from "./formSettings";

const ContactForm = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.formContainer}>
        <Typography variant="h3" className={classes.heading} theme={theme}>
          Contact Us
        </Typography>
        <Typography variant="body1" className={classes.paragraph} theme={theme}>
          Say Hello! Send us your thoughts about our products or share your
          ideas with our Team!
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First name"
                    className={classes.field}
                    sx={fieldStyle}
                  />
                  <ErrorMessage name="firstName" component="div" />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last name"
                    className={classes.field}
                    sx={fieldStyle}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    className={classes.field}
                    sx={fieldStyle}
                  />
                  <ErrorMessage name="email" component="div" />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={Select}
                    label="Subject*"
                    name="subject"
                    className={classes.field}
                    displayEmpty
                    sx={{
                      "& .MuiSelect-select": {
                        textAlign: "left",
                      },
                      "& .MuiMenuItem-root": {
                        textAlign: "left",
                      },
                      "& fieldset": {
                        border: "none",
                        borderBottom: `1px solid ${"#D8D8D8"}`,
                        borderRadius: "0px",
                        marginRight: "5vw",
                      },
                    }}
                  >
                    <MenuItem value="">
                      <span>Subject</span>
                    </MenuItem>
                    <MenuItem value="Refund">Refund</MenuItem>
                    <MenuItem value="Exchange">Exchange</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                    <MenuItem value="Another question">
                      Another question
                    </MenuItem>
                  </Field>
                  <ErrorMessage name="subject" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="message"
                    label="Message"
                    multiline
                    rows={5}
                    className={classes.field}
                    sx={fieldStyle}
                  />
                  <ErrorMessage name="message" component="div" />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.buttonContainer}>
                <CustomButton
                  type="submit"
                  value={"SEND"}
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                />
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
      <Checkout />
    </ThemeProvider>
  );
};

export default ContactForm;
