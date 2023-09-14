import React, { useState, useEffect } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { TabPanel } from "../Product/TabPanel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProfileTabFirstContent from "./ProfileTabFirstContent";
import ProfileTabSecondContent from "./ProfileTabSecondContent";
import ProfileTabThirdContent from "./ProfileTabThirdContent";

export default function ProfileTabs() {
  const [valueTab, setValueTab] = useState("1");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleToAdminPage = () => {
    navigate("/admin");
  };

  useEffect(() => {
    if (user !== null) {
      setIsAuthenticated(true);
      if (user.isAdmin) {
        setIsAdmin(true);
      }
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, [navigate, user]);

  if (!isAuthenticated) {
    return null;
  }

  const style = {
    display: "flex",
  };

  return (
    <>
      {isAdmin && (
        <Button
          variant="contained"
          sx={{
            mb: 3,
            background: "#FFFFFF",
            color: "#000000",
            height: "53px",
            border: "1px solid #000000",
            borderRadius: "4px",
            ":hover": {
              background: "#000000",
              color: "#FFFFFF",
              transition: "all 0.3s ease-in-out",
            },
          }}
          type="button"
          onClick={handleToAdminPage}
        >
          Click to visit a Admin Page
        </Button>
      )}
      <Tabs
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={style}
        value={valueTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="Tabs where selection follows focus"
      >
        <Tab label="Account details" value="1" />
        <Tab label="Orders" value="2" />
        <Tab label="Logout" value="3" />
      </Tabs>
      {valueTab === "1" && (
        <TabPanel valueTab={valueTab} index="1">
          <ProfileTabFirstContent />
        </TabPanel>
      )}
      {valueTab === "2" && (
        <TabPanel valueTab={valueTab} index="2">
          <ProfileTabSecondContent />
        </TabPanel>
      )}
      {valueTab === "3" && (
        <TabPanel valueTab={valueTab} index="3">
          <ProfileTabThirdContent />
        </TabPanel>
      )}
    </>
  );
}
