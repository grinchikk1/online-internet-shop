import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { theme, useStyles } from "./InputStyle";
import { ThemeProvider } from "@mui/material/styles";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem/CardItem";

function Shop() {
  const classes = useStyles();

  // const stackStyle = {
  //   paddingBottom: "250px",
  //   paddingTop: "96px",
  //   display: "flex",
  //   justifyContent: "start",
  //   alignItems: "start",
  // };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
          container
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, sm: 4 }}
          useFlexGap
          className={classes.StackStyle}
          // style={stackStyle}
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

          <Box>
            <Grid
              container
              columnSpacing={{ xs: 2, md: 3 }}
              rowSpacing={{ xs: 3, md: 9 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              className={classes.ItemList}
            >
              {Array.from(Array(12)).map((_, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <CardItem />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
export default Shop;
