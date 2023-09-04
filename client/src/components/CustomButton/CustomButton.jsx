/* eslint-disable react/prop-types */
import React from "react";
import Button from "@mui/material/Button";
import { customButtonStyle } from "./CustomStyle";

function CustomButton({ value, onClick }) {
  return (
    <Button variant="contained" style={customButtonStyle} onClick={onClick}>
      {value}
    </Button>
  );
}

export default CustomButton;
