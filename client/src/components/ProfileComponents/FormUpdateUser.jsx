import React, { useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateUser } from "../../data/fetchUsers";
import { setUser } from "../../features/auth/authSlice";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be between 2 and 25 characters")
    .max(25, "First Name must be between 2 and 25 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be between 2 and 25 characters")
    .max(25, "Last Name must be between 2 and 25 characters")
    .required("Last Name is required"),
  login: Yup.string()
    .min(3, "Login must be between 3 and 10 characters")
    .max(10, "Login must be between 3 and 10 characters")
    .required("Login is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telephone: Yup.string().test(
    "is-phone-valid",
    "That is not a valid phone number.",
    (value) => {
      return /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(value);
    }
  ),
});

export default function FormUpdateUser() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageSeverenity, setMessageSeverenity] = useState("success");

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 960px)");

  const fieldStyle = {
    width: "50%",
    fontSize: isMobile ? "18px" : "22px",
    color: "#707070",
    border: "none",
    borderBottom: "1px solid #D8D8D8",
    borderRadius: "0",
    outline: "none",
  };

  const fieldContainerStyle = {
    display: "flex",
    fontSize: isMobile ? "18px" : "22px",
    justifyContent: "space-between",
    padding: "10px",
    flexWrap: "wrap",
  };

  const errorStyle = {
    color: "#000000",
    marginLeft: "50%",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const updatedUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        login: values.login,
        email: values.email,
        telephone: values.telephone,
      };

      const response = await updateUser(updatedUser, token);
      if (response.status === 200) {
        dispatch(setUser(response.data));
        setMessageText("Your data has been successfully updated!");
        setMessageSeverenity("success");
        setMessageTitle("Success");
        setShowSnackbar(true);
      }
    } catch (error) {
      setShowSnackbar(true);
      setMessageTitle("Error");
      setMessageText(
        error.response.data.firstName ||
          error.response.data.lastName ||
          error.response.data.email ||
          error.response.data.login ||
          error.response.data.telephone
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        login: user.login,
        email: user.email,
        telephone: user.telephone,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={fieldContainerStyle}>
          <label htmlFor="firstName">First Name:</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            style={fieldStyle}
          />
          <ErrorMessage name="firstName" component="div" style={errorStyle} />
        </div>
        <div style={fieldContainerStyle}>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" id="lastName" name="lastName" style={fieldStyle} />
          <ErrorMessage name="lastName" component="div" style={errorStyle} />
        </div>
        <div style={fieldContainerStyle}>
          <label htmlFor="login">Login:</label>
          <Field type="text" id="login" name="login" style={fieldStyle} />
          <ErrorMessage name="login" component="div" style={errorStyle} />
        </div>
        <div style={fieldContainerStyle}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" style={fieldStyle} />
          <ErrorMessage name="email" component="div" style={errorStyle} />
        </div>
        <div style={fieldContainerStyle}>
          <label htmlFor="telephone">Telephone:</label>
          <Field
            type="phone"
            id="telephone"
            name="telephone"
            style={fieldStyle}
          />
          <ErrorMessage name="telephone" component="div" style={errorStyle} />
        </div>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            background: "#FFFFFF",
            color: "#000000",
            height: "53px",
            width: "100%",
            border: "1px solid #000000",
            borderRadius: "4px",
            ":hover": {
              background: "#000000",
              color: "#FFFFFF",
              transition: "all 0.3s ease-in-out",
            },
          }}
          type="submit"
        >
          Update
        </Button>
        <CustomSnackbar
          open={showSnackbar}
          severity={messageSeverenity}
          onClose={() => setShowSnackbar(false)}
          titleText={messageTitle}
          text={messageText}
        />
      </Form>
    </Formik>
  );
}
