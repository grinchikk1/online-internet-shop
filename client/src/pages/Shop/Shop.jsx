import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { theme, useStyles } from "./InputStyle";
import { ThemeProvider } from "@mui/material/styles";
import Filter from "./Filter";
// import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const label = { inputProps: { "aria-label": "Switch demo" } };

function Shop() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
          spacing={{ xs: 1, sm: 4 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Box className={classes.Container}>
            <Typography
              variant="h6"
              sx={{ fontSize: "33px" }}
              className={classes.Title}
            >
              Shop The Latest
            </Typography>
            <Filter />
          </Box>

          <div>list</div>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
export default Shop;
