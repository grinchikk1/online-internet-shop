import React from "react";
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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles, customTheme } from "./InputStyle";
import { Btn } from "./InputStyle";

function Filter({
  handleSearch,
  setSearchResults,
  searchResults,
  selectedProductMaterial,
  setSelectedProductMaterial,
  selectedProduct,
  setSelectedProduct,
  setMinPrice,
  minPrice,
  maxPrice,
  setMaxPrice,
  handleFilter,
}) {
  const classes = useStyles();

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
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
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
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem key={"gold"} value={"gold"}>
            Gold
          </MenuItem>
          <MenuItem key={"silver"} value={"silver"}>
            Silver
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
          <MenuItem value={"All"}>All</MenuItem>
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
      <Box
        className={classes.BoxSwitch}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={handleFilter} variant="container" sx={Btn}>
          Filter
        </Button>
      </Box>
    </Box>
  );
}

export default Filter;
