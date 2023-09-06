/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useStyles } from "./InputStyle";
import Filter from "./Filter";
import CardItem from "./CardItem/CardItem";
import filter from "./filter.svg";
import { getProducts } from "../../data/fetchProducts";
import { setProducts } from "../../features/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../data/fetchProducts";
import { filterProducts } from "../../data/fetchProducts";

function Shop() {
  const [isOpenFilter, setOpenFilter] = useState(true);
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
      dispatch(setProducts(res.data));
    });
  }, [dispatch]);

  // Filter open!
  const toggleFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

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

  // Filter select
  const [filteredCards, setFilteredCards] = useState(null);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductMaterial, setSelectedProductMaterial] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleFilter = async () => {
    const filterParams = {
      brand: selectedProduct === "All" ? null : selectedProduct,
      productMaterial:
        selectedProductMaterial === "All" ? null : selectedProductMaterial,
      minPrice,
      maxPrice,
    };

    const queryString = Object.keys(filterParams)
      .filter((key) => filterParams[key] !== null)
      .map((key) => `${key}=${encodeURIComponent(filterParams[key])}`)
      .join("&");

    try {
      const filteredData = await filterProducts(queryString);
      setFilteredCards(filteredData.data.products);
      setIsFilterApplied(true);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  const btnAddProduct = products.filter((card) => {
    const cardName = card.name.toLowerCase();
    return cardName;
  });

  const cardList = products
    .slice(0, cardsToShow)
    .map((card) => <CardItem key={card._id} card={card} />);

  return (
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
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              handleSearch={handleSearch}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              selectedProductMaterial={selectedProductMaterial}
              setSelectedProductMaterial={setSelectedProductMaterial}
              handleFilter={handleFilter}
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
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              handleSearch={handleSearch}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              selectedProductMaterial={selectedProductMaterial}
              setSelectedProductMaterial={setSelectedProductMaterial}
              handleFilter={handleFilter}
            />
          )}
        </Box>

        <Box>
          <Grid
            container
            rowSpacing={{ xs: 2, md: 4 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {showSearchResults ? (
              productsSearch.length > 0 ? (
                productsSearch.map((card) => (
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
              ) : (
                <Grid item xs={12}>
                  {/* <Typography variant="h6">No products found!</Typography> */}
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "italic",
                      textAlign: "center",
                      margin: "20px auto 0 10px",
                    }}
                  >
                    No results found for your search...
                  </Typography>
                </Grid>
              )
            ) : isFilterApplied ? (
              filteredCards.length > 0 ? (
                filteredCards.map((card) => (
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
              ) : (
                <Grid item xs={12}>
                  {/* <Typography variant="h6">No products found!</Typography> */}
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    No results found for your search...
                  </Typography>
                </Grid>
              )
            ) : (
              cardList.map((card, index) => (
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
              ))
            )}
          </Grid>
          {btnAddProduct.length > cardsToShow &&
            !showSearchResults &&
            !isFilterApplied && (
              <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleLoadMore}
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 1)",
                    background: "white",
                    color: "black",
                    marginTop: "50px",
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
  );
}
export default Shop;
