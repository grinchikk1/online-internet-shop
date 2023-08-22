import { createTheme } from "@mui/material/styles";

export const Colors = {
  accent: "#A18A68",
  white: "#FFFFFF",
  black: "#000000",

  dark_gray: "#707070",
  gray: "#D8D8D8",
  light_gray: "#EFEFEF",

  errors: "#D82700",
};

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif", // Задаємо шрифт для типографії
  },
  palette: {
    primary: {
      main: Colors.black, // Задаємо основний колір (первинний колір)
    },
    secondary: {
      main: Colors.dark_gray, // Задаємо допоміжний колір (вторинний колір)
    },
    allCollors: {
      accent: Colors.accent,
      white: Colors.white,
      black: Colors.black,
      dark_gray: Colors.dark_gray,
      gray: Colors.gray,
      light_gray: Colors.light_gray,
      errors: Colors.errors,
    },
    // Інші властивості палітри, такі як success, error, warning тощо.
  },
  spacing: 8, // Задаємо базовий інтервал між елементами
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }, // Задаємо точки зламу для адаптивності (брейкпоінти)
  // Інші властивості, такі як shadows, shape, overrides тощо.
});
