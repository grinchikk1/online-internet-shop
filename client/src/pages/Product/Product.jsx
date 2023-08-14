import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/fetchProducts";
import ProductCard from "../../components/Product/Product";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../features/shop/shopSlice";
import { addProductToCart } from "../../features/cart/cartSlice";
import { createCart } from "../../data/fetchCart";
import { addProductToLocalStorage } from "../../components/Card/Card";

function Product() {
  const products = useSelector((store) => store.shop.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((data) => {
        dispatch(setProducts(data));
        const product = data.find((product) => product._id === id);
        setProduct(product);
      });
    } else {
      const product = products.find((product) => product._id === id);
      setProduct(product);
    }
  }, [id]);

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
    createCart(product._id, "");
    addProductToLocalStorage(product);
  };

  return (
    <>
      {product ? (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCartClicked={handleAddProductToCart}
        />
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );
}

export default Product;
