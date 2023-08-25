import React from "react";
import ProfileTabs from "../../components/ProfileComponents/ProfileTabs";
import { Container } from "@mui/material";

export default function Profile() {
  return (
    <Container disableGutters maxWidth="lg" sx={{ textAlign: "center" }}>
      <ProfileTabs />
    </Container>
  );
}
