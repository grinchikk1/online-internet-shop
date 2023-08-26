import React from "react";
import { Typography, Container } from "@mui/material";
import FormUpdateUser from "./FormUpdateUser";
import FormChangePass from "./FormChangePass";

export default function ProfileTabFirstContent() {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 500 }}
      >
        Account details
      </Typography>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "start", padding: "40px 15px 0" }}
      >
        <FormUpdateUser />
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 22, md: 26 },
            fontWeight: 500,
            textAlign: "center",
            pt: 5,
            pb: 2,
          }}
        >
          Password change
        </Typography>
        <FormChangePass />
      </Container>
    </div>
  );
}
