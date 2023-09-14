import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { getProducts } from "../../data/fetchProducts";
import CircularLoader from "../Loader/Loader";
import EditProductModal from "./EditProductModal";

export default function EditProductTab() {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await getProducts();
      setProducts(res.data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <CircularLoader />;
  }

  const productCards = products?.map((product) => (
    <Card
      key={product._id}
      sx={{
        height: "20vh",
        maxWidth: "600px",
        mr: "auto",
        ml: "auto",
        mb: 2,
        display: "flex",
        width: "100%",
      }}
    >
      <CardMedia
        sx={{ height: "100%", width: 200, borderRadius: 1 }}
        image={product.imageUrls[0]}
        title="green iguana"
      />
      <CardContent sx={{ width: "100%", position: "relative" }}>
        <Typography variant="h5" component="div" sx={{ p: 1 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary" sx={{ p: 1 }}>
          {product.productMaterial} / {product.brand} / {product.itemNo}
        </Typography>
        <Typography variant="body2" color="#A18A68" sx={{ p: 1 }}>
          {product.currentPrice} $
        </Typography>

        <Button
          type="button"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            textTransform: "lowercase",
          }}
          onClick={() => handleEditClick(product)}
        >
          edit
        </Button>
        {isModalOpen && selectedProduct === product && (
          <EditProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </CardContent>
    </Card>
  ));

  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {productCards}
    </Container>
  );
}
