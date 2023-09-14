import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { TabPanel } from "../Product/TabPanel";
import AddProductTab from "./AddProductTab";
import EditProductTab from "./EditProductTab";

export default function AdminTabs() {
  const [valueTab, setValueTab] = useState("1");

  const handleTabChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const style = {
    display: "flex",
  };

  return (
    <>
      <Typography color="primary" variant="h5" textAlign="center" sx={{ p: 2 }}>
        Administration Panel
      </Typography>
      <Tabs
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={style}
        value={valueTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
        aria-label="Tabs where selection follows focus"
      >
        <Tab label="Add Product" value="1" />
        <Tab label="Edit Product" value="2" />
        <Tab label="Delete Product" value="3" />
      </Tabs>
      {valueTab === "1" && (
        <TabPanel valueTab={valueTab} index="1">
          <AddProductTab />
        </TabPanel>
      )}
      {valueTab === "2" && (
        <TabPanel valueTab={valueTab} index="2">
          <EditProductTab />
        </TabPanel>
      )}
      {valueTab === "3" && (
        <TabPanel valueTab={valueTab} index="3">
          Сontent in development
        </TabPanel>
      )}
    </>
  );
}
