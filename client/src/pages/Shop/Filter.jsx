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

const label = { inputProps: { "aria-label": "Switch demo" } };

function Filter({ setValue }) {
  const classes = useStyles();

  // UseState for Slider
  const [valueSlider, setValueSlider] = useState([40, 180]);

  const handleChange = (newValue) => {
    setValueSlider(newValue);
  };

  // UseState for Select

  const [selectedValueShop, setSelectedValueShop] = useState("");
  const [selectedValueSort, setSelectedValueSort] = useState("");

  const handleChangeSelectShop = (event) => {
    setSelectedValueShop(event.target.value);
  };
  const handleChangeSelectSort = (event) => {
    setSelectedValueSort(event.target.value);
  };
  return (
    <Box className={classes.Container}>
      <FormControl sx={{ marginBottom: "40px" }}>
        <InputLabel htmlFor="search" sx={{ fontSize: "14px" }}>
          Search
        </InputLabel>
        <Input
          onChange={(event) => setValue(event.target.value)}
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
          value={selectedValueShop}
          onChange={handleChangeSelectShop}
        >
          <MenuItem className={classes.SelectInputItem} value={10}>
            gold
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={20}>
            silver
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={30}>
            platinum
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
          value={selectedValueSort}
          onChange={handleChangeSelectSort}
          sx={{
            "& .MuiSelect-icon": {
              color: "rgba(0, 0, 0, 1)",
            },
          }}
        >
          <MenuItem className={classes.SelectInputItem} value={10}>
            KJM
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={20}>
            LuxJewels
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={30}>
            Jewels
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={40}>
            OpalCraft
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={50}>
            OceanGems
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={60}>
            BlueSky
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={70}>
            AmberCraft
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={80}>
            Glow
          </MenuItem>
          <MenuItem className={classes.SelectInputItem} value={90}>
            BlackStone
          </MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ marginBottom: "40px" }}>
        <Slider
          getAriaLabel={() => ""}
          value={valueSlider}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={180}
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
          Price: {valueSlider[0]}$ - {valueSlider[1]}$
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
      <Box className={classes.BoxSwitch}>
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
      </Box>
    </Box>
  );
}

export default Filter;
