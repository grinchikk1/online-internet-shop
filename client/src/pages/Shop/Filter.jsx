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
  Button,
} from "@mui/material";
import { Btn } from "./InputStyle";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles, customTheme } from "./InputStyle";
import { filterProducts } from "../../data/fetchProducts";
import CardItem from "./CardItem/CardItem";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Filter({ handleSearch, setSearchResults, searchResults }) {
  const classes = useStyles();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductMaterial, setSelectedProductMaterial] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleFilter = async () => {
    const filterParams = {
      brand: selectedProduct,
      productMaterial: selectedProductMaterial,
      minPrice: minPrice,
      maxPrice: maxPrice,
    };

    try {
      const filteredData = await filterProducts(filterParams);

      if (Array.isArray(filteredData)) {
        setFilteredProducts(filteredData);
      } else {
        console.error("Filtered data is not an array:", filteredData);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  // console.log(filteredProducts);

  return (
    <Box className={classes.Container}>
      <FormControl sx={{ marginBottom: "40px" }}>
        <InputLabel htmlFor="search" sx={{ fontSize: "14px" }}>
          Search
        </InputLabel>
        <Input
          onChange={(event) => {
            setSearchResults(event.target.value);
          }}
          value={searchResults}
          id="search"
          name="search"
          className={classes.searchInput}
          disableUnderline
          endAdornment={
            <InputAdornment
              position="start"
              sx={{ color: "black", cursor: "pointer" }}
            >
              <SearchIcon onClick={handleSearch} fontSize="small" />
            </InputAdornment>
          }
        />
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
          value={selectedProductMaterial}
          onChange={(e) => setSelectedProductMaterial(e.target.value)}
        >
          <MenuItem key={"gold"} value={"gold"}>
            Gold
          </MenuItem>
          <MenuItem key={"silver"} value={"silver"}>
            Silver
          </MenuItem>
          <MenuItem key={"platinum"} value={"platinum"}>
            Platinum
          </MenuItem>
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
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <MenuItem key={"ZARINA"} value={"ZARINA"}>
            {"ZARINA"}
          </MenuItem>
          <MenuItem key={"KOLO"} value={"KOLO"}>
            {"KOLO"}
          </MenuItem>
          <MenuItem key={"KJF"} value={"KJF"}>
            {"KJF"}
          </MenuItem>
          <MenuItem key={"Boucheron"} value={"Boucheron"}>
            {"Boucheron"}
          </MenuItem>
          <MenuItem key={"Amrapali"} value={"Amrapali"}>
            {"Amrapali"}
          </MenuItem>
          <MenuItem key={"Messika"} value={"Messika"}>
            {"Messika"}
          </MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ marginBottom: "40px" }}>
        <Slider
          getAriaLabel={() => ""}
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
          value={[minPrice, maxPrice]}
          onChange={(event, newValue) => {
            setMinPrice(newValue[0]);
            setMaxPrice(newValue[1]);
          }}
        />
        <Typography className={classes.SliderPrice}>
          Price: {minPrice}$ - {maxPrice}$ price
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
      <Box
        className={classes.BoxSwitch}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={handleFilter} sx={Btn} variant="text">
          Filter
        </Button>
      </Box>
      <Box>
        {filteredProducts.map((card) => (
          <CardItem key={card._id} card={card} />
        ))}
      </Box>
    </Box>
  );
}

export default Filter;
