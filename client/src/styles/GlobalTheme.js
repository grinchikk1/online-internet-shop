import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif", // Задаємо шрифт для типографії
  },
  palette: {
    primary: {
      main: "#1976d2", // Задаємо основний колір (первинний колір)
    },
    secondary: {
      main: "#f50057", // Задаємо допоміжний колір (вторинний колір)
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
