import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { clearFavorites } from "../../features/favorites/favoriteSlice";

export default function ProfileTabThirdContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(clearFavorites());
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <Typography variant="h6" sx={{ pb: 2, pt: 10 }}>
        If you want to log out, please click on the button below.
      </Typography>
      <CustomButton onClick={handleLogOut} value="Log out" />
    </>
  );
}
