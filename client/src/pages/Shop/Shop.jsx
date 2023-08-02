import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { theme, useStyles } from "./InputStyle";
import { ThemeProvider } from "@mui/material/styles";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem/CardItem";
import filter from "./filter.svg";
import getData from "../../data/index";

function Shop() {
  const [isOpenFilter, setOpenFilter] = useState(true);
  const [value, setValue] = useState("");

  const handleSetValue = (value) => {
    setValue(value);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  const [cardsToShow, setCardsToShow] = useState(6);

  // Filter open!

  const toggleFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  const classes = useStyles();

  const isScreenSmall = useMediaQuery("(max-width: 767.98px)");

  // +6 cards
  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + 6);
  };

  const searchFilter = data.filter((card) => {
    return card.name.toLowerCase().includes(value.toLowerCase());
  });

  const cardList = searchFilter
    .slice(0, cardsToShow)
    .map((card) => <CardItem key={card.id} card={card} />);

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
          className={classes.stackStyle}
        >
          <Box className={classes.Container}>
            {!isScreenSmall && <Filter setValue={handleSetValue} />}
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
            {isScreenSmall && isOpenFilter && (
              <Filter setValue={handleSetValue} />
            )}
          </Box>

          <Box>
            <Grid
              justifyContent={"center"}
              container
              columnSpacing={{ xs: 2, md: 3 }}
              rowSpacing={{ xs: 3, md: 6 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {cardList.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  key={index}
                  sx={{
                    "@media (min-width: 900px)": {
                      maxWidth: "100%",
                    },
                  }}
                >
                  {card}
                </Grid>
              ))}
              {searchFilter.length > cardsToShow && (
                <Box mt={3}>
                  <Button
                    variant="contained"
                    onClick={handleLoadMore}
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 1)",
                      background: "white",
                      color: "black",
                      "&:hover": {
                        background: "black",
                        color: "white",
                      },
                    }}
                  >
                    Load More
                  </Button>
                </Box>
              )}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
export default Shop;