import React from "react";
import { Container } from "@mui/material";
import ProfileTabs from "../../components/ProfileComponents/ProfileTabs";

export default function Profile() {
  return (
    <Container disableGutters maxWidth="lg" sx={{ textAlign: "center" }}>
      <ProfileTabs />
    </Container>
  );
}
