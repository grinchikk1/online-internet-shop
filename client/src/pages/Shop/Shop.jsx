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
import { getProducts } from "../../data/fetchProducts";
import { setProducts } from "../../features/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../data/fetchProducts";

function Shop() {
  const [isOpenFilter, setOpenFilter] = useState(true);
  const [value, setValue] = useState("");
  const [cardsToShow, setCardsToShow] = useState(6);
  const [searchResults, setSearchResults] = useState("");
  // Зміна стану
  const [showSearchResults, setShowSearchResults] = useState(false);

  const classes = useStyles();
  const isScreenSmall = useMediaQuery("(max-width: 767.98px)");
  const dispatch = useDispatch();

  const products = useSelector((state) => state.shop.products);
  const productsSearch = useSelector((state) => state.search.searchProduct);

  useEffect(() => {
    getProducts().then((res) => {
      dispatch(setProducts(res));
    });
  }, []);

  // Filter open!
  const toggleFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  //Filter Search
  // const handleSearch = () => {
  //   dispatch(searchProducts({ query: searchResults }));
  //   setShowSearchResults(true);
  // };

  useEffect(() => {
    setShowSearchResults(searchResults !== "");
  }, [searchResults]);

  const handleSearch = () => {
    if (searchResults.trim() === "") {
      getProducts();
    } else {
      dispatch(searchProducts({ query: searchResults }));
      setShowSearchResults(true);
    }
  };
  // +6 cards
  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + 6);
  };
  // Select useState
  // const [selectedProductMaterial, setSelectedProductMaterial] = useState("");
  // const [selectedBrand, setSelectedBrand] = useState("");

  // UseState for Slider
  // const [valueSlider, setValueSlider] = useState([0, 2000]);

  const btnAddProduct = products.filter((card) => {
    const cardName = card.name.toLowerCase().includes(value.toLowerCase());
    return cardName;
  });

  const cardList = products
    .slice(0, cardsToShow)
    .map((card) => <CardItem key={card._id} card={card} />);

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
            {!isScreenSmall && (
              <Filter
                handleSearch={handleSearch}
                setSearchResults={setSearchResults}
                searchResults={searchResults}
              />
            )}
            {isScreenSmall && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
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
              <Filter
                handleSearch={handleSearch}
                setSearchResults={setSearchResults}
                searchResults={searchResults}
              />
            )}
          </Box>

          <Box>
            <Grid
              container
              columnSpacing={{ xs: 2, md: 3 }}
              rowSpacing={{ xs: 3, md: 6 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {showSearchResults
                ? productsSearch.map((card) => (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={4}
                      key={card._id}
                      sx={{
                        "@media (min-width: 900px)": {
                          maxWidth: "100%",
                        },
                      }}
                    >
                      <CardItem card={card} />
                      {btnAddProduct.length > cardsToShow && (
                        <Box
                          mt={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            variant="contained"
                            onClick={handleLoadMore}
                            sx={{
                              display: "none",
                            }}
                          >
                            Load More
                          </Button>
                        </Box>
                      )}
                    </Grid>
                  ))
                : cardList.map((card, index) => (
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
            </Grid>
            {btnAddProduct.length > cardsToShow && !showSearchResults && (
              <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
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
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
export default Shop;
