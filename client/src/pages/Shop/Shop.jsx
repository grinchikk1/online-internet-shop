import React, { useState } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import { theme, useStyles } from "./InputStyle";
import { ThemeProvider } from "@mui/material/styles";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem/CardItem";
import filter from "./filter.svg";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Shop() {
  const [isOpenFilter, setOpenFilter] = useState(true);

  const toggleFilter = () => {
    setOpenFilter(!isOpenFilter);
  };
  const classes = useStyles();

  const isScreenSmall = useMediaQuery("(max-width: 767.98px)");

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontSize: "33px",
          }}
          className={classes.Title}
        >
          Shop The Latest
        </Typography>
        <Stack
          direction={isScreenSmall ? "column" : "row"}
          spacing={{ xs: 1, sm: 4 }}
          useFlexGap
          justifyContent={isScreenSmall ? "start" : "center"}
          className={classes.stackStyle}
        >
          <Box className={classes.Container}>
            {!isScreenSmall && <Filter />}
            {isScreenSmall && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  zIndex: "5555",
                  marginBottom: "13px",
                }}
                onClick={toggleFilter}
              >
                <img src={filter} alt="filter" style={{ cursor: "pointer" }} />
                <Typography
                  sx={{ fontSize: "12px" }}
                  className={classes.FilterTitle}
                >
                  Filters
                </Typography>
              </Box>
            )}
            {isScreenSmall && isOpenFilter && <Filter />}
          </Box>

          <Box>
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
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
export default Shop;
