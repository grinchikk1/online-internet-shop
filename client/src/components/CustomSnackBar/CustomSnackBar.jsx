import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomSnackbar = ({ open, onClose, text }) => {
  const customIconMapping = {
    success: (
      <CheckCircleIcon fontSize="inherit" style={{ color: "#A18A68" }} />
    ),
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity="success"
        style={{ color: "#A18A68", backgroundColor: "#EFEFEF" }}
        iconMapping={customIconMapping}
      >
        <AlertTitle>Success</AlertTitle>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
