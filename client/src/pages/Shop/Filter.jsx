import React, { useState } from "react";
import {
  Box,
  FormControl,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
  Select,
  MenuItem,
  Slider,
  Switch,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles, customTheme } from "./InputStyle";
import { searchProducts } from "../../data/fetchProducts";
// import { getFilterByType } from "../../data/fetchFilters";
import { useDispatch, useSelector } from "react-redux";
// import CardItem from "./CardItem/CardItem";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.search.searchProduct);
  const [searchResults, setSearchResults] = useState("");

  // useEffect(() => {
  const handleSearch = () => {
    console.log(dispatch(searchProducts({ query: searchResults })));
  };
  // handleSearch()
  // }, []);

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  // };

  //Brand

  // const [selectedProductType, setSelectedProductType] = useState("");
  // const [products, setProducts] = useState([]);

  // const handleProductTypeChange = async (event) => {
  //   const selectedType = event.target.value;
  //   setSelectedProductType(selectedType);

  //   try {
  //     const productsByType = await getFilterByType(selectedType);
  //     setProducts(productsByType);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Box className={classes.Container}>
      <FormControl sx={{ marginBottom: "40px" }}>
        <InputLabel htmlFor="search" sx={{ fontSize: "14px" }}>
          Search
        </InputLabel>
        <Input
          onChange={(event) => setSearchResults(event.target.value)}
          value={searchResults}
          id="search"
          name="search"
          className={classes.searchInput}
          disableUnderline
          endAdornment={
            <InputAdornment position="start" sx={{ color: "black" }}>
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
        />
        <button onClick={handleSearch}>Search</button>
      </FormControl>

      <FormControl sx={{ marginBottom: "16px" }}>
        <InputLabel
          htmlFor="product-material"
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}
        >
          Product material
        </InputLabel>
        <Select
          labelId="productMaterial"
          id="productMaterial"
          label=" Product material"
          IconComponent={KeyboardArrowDownIcon}
          className={classes.SelectInput}
          sx={{
            "& .MuiSelect-icon": {
              color: "rgba(0, 0, 0, 1)",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          // value={selectedProductMaterial}
          // onChange={(e) => setSelectedProductMaterial(e.target.value)}
          // value={selectedProductType}
          // onChange={handleProductTypeChange}
        >
          <MenuItem className={classes.SelectInputItem}>Gold</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Silver</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Platinum</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ marginBottom: "40px" }}>
        <InputLabel
          htmlFor="brand"
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}
        >
          Brand
        </InputLabel>
        <Select
          labelId="brand"
          id="brand"
          label="Brand"
          IconComponent={KeyboardArrowDownIcon}
          className={classes.SelectInput}
          sx={{
            "& .MuiSelect-icon": {
              color: "rgba(0, 0, 0, 1)",
            },
          }}
          // value={selectedBrand}
          // onChange={(e) => setSelectedBrand(e.target.value)}
          // value={selectedProductType}
          // onChange={handleProductTypeChange}
        >
          <MenuItem className={classes.SelectInputItem}>KJM</MenuItem>
          <MenuItem className={classes.SelectInputItem}>ZARINA</MenuItem>
          <MenuItem className={classes.SelectInputItem}>KOLO</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Boucheron</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Suarez</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Amrapali</MenuItem>
          <MenuItem className={classes.SelectInputItem}>Messika</MenuItem>
        </Select>
        {/* {products.map((product) => (
          <CardItem key={product.id} />
        ))} */}
      </FormControl>
      <Box sx={{ marginBottom: "40px" }}>
        <Slider
          getAriaLabel={() => ""}
          // value={valueSlider}
          // onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
          size="small"
          sx={{
            "& .MuiSlider-thumb": {
              width: "1px",
              height: "10px",
              background: "rgba(0, 0, 0, 1)",
              position: "absolute",
              transform: "translate(-50%, -50%)",
            },
            "& .MuiSlider-rail": {
              background: " rgba(216, 216, 216, 1)",
            },
            "& .MuiSlider-track": {
              background: " rgba(0, 0, 0, 1)",
            },
          }}
          theme={customTheme}
        />
        <Typography className={classes.SliderPrice}>
          {/* Price: {valueSlider[0]}$ - {valueSlider[1]}$ */}
          price
        </Typography>
      </Box>
      <Box className={classes.BoxSwitch} sx={{ marginBottom: "29px" }}>
        <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>On Sale</Typography>
        <Switch
          size="medium"
          sx={{
            color: "rgba(112, 112, 112, 1)",
            "  & .MuiSwitch-thumb": {
              position: "relative",
              top: "5px",
              left: "5px",
              width: "13px",
              height: "13px",
            },
            "& .MuiSwitch-track": {
              width: "35px",
              height: "17px",
            },
          }}
          {...label}
        />
      </Box>
      {/* <Box className={classes.BoxSwitch}>
        <Typography sx={{ color: "rgba(0, 0, 0, 1)" }}>In Stock</Typography>
        <Switch
          size="medium"
          {...label}
          sx={{
            color: "rgba(112, 112, 112, 1)",
            "  & .MuiSwitch-thumb": {
              position: "relative",
              top: "5px",
              left: "5px",
              width: "13px",
              height: "13px",
            },
            "& .MuiSwitch-track": {
              width: "35px",
              height: "17px",
            },
          }}
        />
      </Box> */}
    </Box>
  );
}

export default Filter;
