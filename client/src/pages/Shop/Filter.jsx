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
  Switch,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStyles, customTheme } from "./InputStyle";
import { getFilterByType } from "../../data/fetchFilters";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Filter({ handleSearch, setSearchResults, searchResults }) {
  const classes = useStyles();
  // const dispatch = useDispatch();

  //Brand

  const [selectedProductType, setSelectedProductType] = useState("");
  // const [products, setProducts] = useState([]);

  const handleProductTypeChange = (event) => {
    getFilterByType("brand");
    // setSelectedProductType(event.target.value);
  };
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
          value={selectedProductType}
          onChange={handleProductTypeChange}
        >
          <MenuItem className={classes.SelectInputItem}>KJM</MenuItem>
          <MenuItem className={classes.SelectInputItem} value="ZARINA">
            ZARINA
          </MenuItem>
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
