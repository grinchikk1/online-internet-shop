import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";
import { changePassword } from "../../data/fetchUsers";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";
import { useMediaQuery } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

export default function FormChangePass() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageSeverenity, setMessageSeverenity] = useState("success");

  const isMobile = useMediaQuery("(max-width: 960px)");
  const token = useSelector((state) => state.auth.token);

  const fieldStyle = {
    width: "80%",
    fontSize: isMobile ? "18px" : "22px",
    height: "40px",
    color: "#707070",
    border: "none",
    borderBottom: "1px solid #D8D8D8",
    borderRadius: "0",
    outline: "none",
  };

  const fieldContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
    flexWrap: "wrap",
  };

  const errorStyle = {
    color: "#000000",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await changePassword(values, token);
      if (response.data.message !== undefined) {
        setMessageText(response.data.message);
        setMessageSeverenity("success");
        setMessageTitle("Success");
        setShowSnackbar(true);
        resetForm();
      } else {
        setMessageTitle("Error");
        setMessageSeverenity("error");
        setMessageText(response.data.password);
        setShowSnackbar(true);
      }
    } catch (error) {
      setMessageTitle("Error");
      setMessageSeverenity("error");
      setMessageText(error.response.data.newPassword);
      setShowSnackbar(true);
    }
  };
  return (
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
        <div style={fieldContainerStyle}>
          <IconButton
            onClick={() => setShowPasswordCurrent(!showPasswordCurrent)}
            aria-label="toggle password visibility"
          >
            {showPasswordCurrent ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
          <Field
            type={showPasswordCurrent ? "text" : "password"}
            id="currentPassword"
            name="password"
            placeholder="Current password"
            autoComplete="new-password"
            style={fieldStyle}
          />
          <ErrorMessage style={errorStyle} name="password" component="div" />
        </div>
        <div style={fieldContainerStyle}>
          <IconButton
            onClick={() => setShowPasswordNew(!showPasswordNew)}
            aria-label="toggle password visibility"
          >
            {showPasswordNew ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
          <Field
            type={showPasswordNew ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            autoComplete="new-password"
            style={fieldStyle}
          />
          <ErrorMessage name="newPassword" component="div" style={errorStyle} />
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
          Change
        </Button>
        <CustomSnackbar
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
          severity={messageSeverenity}
          titleText={messageTitle}
          text={messageText}
        />
      </Form>
    </Formik>
  );
}
