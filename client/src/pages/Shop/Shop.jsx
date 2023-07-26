import React from "react";
// import { Box, FormControl, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem/CardItem";
import { Box, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    fontSize: "14px",
  },
}));
function Shop() {
  const stackStyle = {
    paddingBottom: "250px",
    paddingTop: "96px",
  };
  return (
    <Stack
      spacing={{ xs: 1, sm: 4 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      style={stackStyle}
      // alignItems="center"
    >
      <Typography variant="h6" sx={{ fontSize: "33px" }}>
        Shop The Latest
      </Typography>
      <Box component="form">
        <TextField
          label="Search"
          type="search"
          className={classes.searchInput}
        />
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 2, md: 3 }}
        rowSpacing={{ xs: 3, md: 9 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <CardItem />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
export default Shop;
