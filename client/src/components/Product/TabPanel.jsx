import React from "react";
import { Box } from "@mui/material";

export function TabPanel({ valueTab, index, children }) {
  return (
    <div role="tabpanel" hidden={valueTab !== index} id={`tabpanel-${index}`}>
      {valueTab === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
