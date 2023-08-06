import React, { useState, useEffect } from "react";
import fetchData from "../../data/index";
import ProductCard from "../../components/Product/Product";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      const productById = data.find((product) => product.id === parseInt(id));
      setProduct(productById || null);
    };

    fetchDataAsync();
  }, [id]);

  return (
    <>
      {product ? (
        <ProductCard key={product.id} product={product} />
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );
}

export default Product;
