import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/fetchProducts";
import ProductCard from "../../components/Product/Product";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await getProducts();
      const productById = data.find((product) => product._id === id);
      setProduct(productById || null);
    };

    fetchDataAsync();
  }, [id]);

  return (
    <>
      {product ? (
        <ProductCard key={product._id} product={product} />
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );
}

export default Product;
