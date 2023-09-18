import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularLoader from "../../components/Loader/Loader";
import AdminTabs from "../../components/Admin/AdminTabs";

export default function AdminPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
    if (user !== null && user.isAdmin) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, [navigate, user]);

  if (isLoading) {
    return <CircularLoader />;
  }

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  return <AdminTabs />;
}
