import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { TabPanel } from "../Product/TabPanel";

import ProfileTabFirstContent from "./ProfileTabFirstContent";
import ProfileTabSecondContent from "./ProfileTabSecondContent";
import ProfileTabThirdContent from "./ProfileTabThirdContent";

export default function ProfileTabs() {
  const [valueTab, setValueTab] = useState("1");

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const style = {
    display: "flex",
  };

  return (
    <>
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
