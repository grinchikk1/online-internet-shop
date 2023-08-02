import React from "react";
import { useMediaQuery } from "@mui/material";
import ProductCardMobile from "./ProductCardMobile";
import ProductCardDesktop from "./ProductCardDesktop";

export default function ProductCard({ product }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {isMobile ? (
        <ProductCardMobile product={product} />
      ) : (
        <ProductCardDesktop product={product} />
      )}
    </>
  );
}
