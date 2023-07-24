import React from "react";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import { styles } from "./InputStyle";

function Shop() {
  const classes = styles();

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontSize: "33px" }}
        style={classes.formFilterContainer}
      >
        Shop The Latest
      </Typography>
      <FormControl>
        <TextField
          name="search"
          type="text"
          placeholder="Search"
          sx={{ height: "35px" }}
        />
      </FormControl>
    </Box>
  );
}
export default Shop;
