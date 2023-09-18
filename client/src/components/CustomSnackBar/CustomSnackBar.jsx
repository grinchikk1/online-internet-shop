import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

const CustomSnackbar = ({ open, onClose, text, titleText, severity }) => {
  const customIconMapping = {
    success: (
      <CheckCircleIcon fontSize="inherit" style={{ color: "#A18A68" }} />
    ),
    error: <ErrorIcon fontSize="inherit" style={{ color: "#A18A68" }} />,
    info: <InfoIcon fontSize="inherit" style={{ color: "#A18A68" }} />,
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
        severity={severity}
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
