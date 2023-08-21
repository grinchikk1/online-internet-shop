import React from "react";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Container, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useMediaQuery } from "@mui/material";

export default function Profile() {
  const isMobile = useMediaQuery("(max-width: 670px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant={isMobile ? "h5" : "h4"}>
        Інформація користувача
      </Typography>
      <Avatar
        sx={{
          margin: "20px auto 0",
          width: 100,
          height: 100,
          bgcolor: "#707070",
          fontSize: "30px",
        }}
      >
        {user.firstName[0].toUpperCase()}
        {user.lastName[0].toUpperCase()}
      </Avatar>
      <Container maxWidth="sm" sx={{ textAlign: "start", padding: "40px 15px 0" }}>
        <Typography sx={{ fontSize: isMobile ? "18px" : "26px" }}>
          Ім'я: <span style={{ color: "#707070" }}>{user.firstName}</span>
        </Typography>
        <Typography sx={{ fontSize: isMobile ? "18px" : "26px" }}>
          Прізвище: <span style={{ color: "#707070" }}>{user.lastName}</span>
        </Typography>
        <Typography
          sx={{ fontSize: isMobile ? "18px" : "26px", paddingBottom: "40px" }}
        >
          Email: <span style={{ color: "#707070" }}>{user.email}</span>
        </Typography>
        {/* Інша інформація про користувача */}
      </Container>
      <CustomButton onClick={handleLogOut} value="Logout" />
    </Container>
  );
}
