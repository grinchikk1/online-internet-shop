import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Box";

function CircularLoader() {
  const thickness = 2;
  const size = 60;
  return (
    <Container sx={{ m: "0 auto", mb: "50px", textAlign: "center" }}>
      <CircularProgress
        sx={{ color: "#707070" }}
        size={size}
        thickness={thickness}
      />
    </Container>
  );
}

export default CircularLoader;
