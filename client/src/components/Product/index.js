import React from "react";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ProductCardStyles";
import ProductCardMobile from "./ProductCardMobile";
import ProductCardDesktop from "./ProductCardDesktop";

export default function ProductCard({ product }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <ThemeProvider theme={theme}>
        {isMobile ? (
          <ProductCardMobile product={product} />
        ) : (
          <ProductCardDesktop product={product} />
        )}
      </ThemeProvider>
    </>
  );
}
