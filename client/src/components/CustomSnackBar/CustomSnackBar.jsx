import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomSnackbar = ({ open, onClose, text, titleText }) => {
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
      sx={{ marginTop: "50px" }}
    >
      <Alert
        onClose={onClose}
        severity="success"
        style={{ color: "#A18A68", backgroundColor: "#EFEFEF" }}
        iconMapping={customIconMapping}
      >
        <AlertTitle>{titleText}</AlertTitle>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
