import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { changePassword } from "../../data/fetchUsers";
import FormUpdateUser from "./FormUpdateUser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ProfileTabFirstContent() {
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await changePassword(values, token);
      if (response.status === 200) {
        alert(`${response.data.message}`);
        resetForm();
        console.log(response);
      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 33 } }}>
        Account details
      </Typography>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "start", padding: "40px 15px 0" }}
      >
        <FormUpdateUser />
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: 24, md: 33 }, textAlign: "center", pt: 5 }}
        >
          Password change
        </Typography>

        <Formik
          initialValues={{ newPassword: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Field
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              style={{ display: "none" }}
              aria-hidden="true"
            />
            <Field
              type="password"
              id="currentPassword"
              name="password"
              placeholder="Current password"
              autoComplete="new-password"
            />
            <ErrorMessage
              style={{ color: "#D82700" }}
              name="password"
              component="div"
            />
            <Field
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New password"
              autoComplete="new-password"
            />
            <ErrorMessage
              style={{ color: "#D82700" }}
              name="newPassword"
              component="div"
            />
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
              Change
            </Button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(7, "Password must be between 7 and 30 characters")
    .max(30, "Password must be between 7 and 30 characters")
    .required("Password is required"),
  password: Yup.string()
    .min(7, "Password must be between 7 and 30 characters")
    .max(30, "Password must be between 7 and 30 characters")
    .required("Password is required"),
});
