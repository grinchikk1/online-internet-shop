import React from "react";
import { updateUser } from "../../data/fetchUsers";
import { setUser } from "../../features/auth/authSlice";
import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";

export default function FormUpdateUser() {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const updatedUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        login: values.login,
        email: values.email,
      };

      const response = await updateUser(updatedUser, token);
      console.log(response);
      if (response.status === 200) {
        dispatch(setUser(response.data));
      }
    } catch (error) {
      console.error("Error updating user data:", error);
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
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form style={{ padding: "0 25px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="login">Login:</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="div" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
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
      </Form>
    </Formik>
  );
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("firstName is required"),
  lastName: Yup.string().required("lastName is required"),
  login: Yup.string().required("login is required"),
  email: Yup.string().required("email is required"),
});
