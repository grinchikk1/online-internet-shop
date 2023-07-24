import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    fontSize: "14px",
  },
}));
function Shop() {
  const classes = useStyles();
  return (
    <Stack
      spacing={{ xs: 1, sm: 4 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <Typography
        variant="h6"
        sx={{ fontSize: "33px" }}
        className={classes.searchInput}
      >
        Shop The Latest
      </Typography>
      <Box component="form">
        <TextField label="Search" type="search" />
      </Box>
      <div>list</div>
    </Stack>
  );
}
export default Shop;
