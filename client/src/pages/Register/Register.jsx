import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/style.scss";

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="registration-container container">
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
