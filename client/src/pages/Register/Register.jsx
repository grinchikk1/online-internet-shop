import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../../styles/style.scss";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../data/fetchUsers";
import { setUser, setError } from "../../features/auth/authSlice";
import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";
import CustomSnackbar from "../../components/CustomSnackBar/CustomSnackBar";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be between 2 and 25 characters")
    .max(25, "First Name must be between 2 and 25 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be between 2 and 25 characters")
    .max(25, "Last Name must be between 2 and 25 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be between 7 and 30 characters")
    .max(30, "Password must be between 7 and 30 characters")
    .required("Password is required"),
  login: Yup.string()
    .min(3, "Login must be between 3 and 10 characters")
    .max(10, "Login must be between 3 and 10 characters")
    .required("Login is required"),
  telephone: Yup.string()
    .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageSeverenity, setMessageSeverenity] = useState("success");

  const handleSubmit = async (values) => {
    try {
      const user = await createUser(values);

      if (user.status === 200) {
        setShowSnackbar(true);
        setMessageSeverenity("success");
        setMessageText("Register Successful");
        setMessageTitle("Success");

        dispatch(setUser(user.data));

        CartLocalStorageHelper.resetCart();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setShowSnackbar(true);
      setMessageSeverenity("error");
      setMessageText(error.response.data.message);
      setMessageTitle("Error");
      dispatch(setError("Error registering"));
    }
  };

  return (
    <div className="registration-container container">
      <h1>Registration</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          login: "",
          telephone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="given-name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login">Login</label>
            <Field
              type="text"
              id="login"
              name="login"
              autoComplete="username"
            />
            <ErrorMessage
              name="login"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Phone Number</label>
            <Field
              type="text"
              id="telephone"
              name="telephone"
              autoComplete="tel"
            />
            <ErrorMessage
              name="telephone"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" autoComplete="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit" id="register_btn">
            Register
          </button>
          <CustomSnackbar
            open={showSnackbar}
            severity={messageSeverenity}
            onClose={() => setShowSnackbar(false)}
            titleText={messageTitle}
            text={messageText}
          />
          <Typography sx={{ paddingTop: "15px" }}>
            Have an account?{" "}
            <Link to="/login" style={{ color: "#707070" }}>
              Log In
            </Link>
          </Typography>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
