import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/fetchProducts";
import ProductCard from "../../components/Product/Product";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../features/shop/shopSlice";
import { addProductToCart } from "../../features/cart/cartSlice";
import { addToCart } from "../../data/fetchCart";
import { addProductToLocalStorage } from "../../components/Card/Card";
import { getUserToken } from "../../data/fetchUsers";

function Product() {
  const products = useSelector((store) => store.shop.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const token = getUserToken();

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
  }, [dispatch, id, products]);

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product));
    if (!!token) {
      addToCart(product._id, token);
    } else {
      addProductToLocalStorage(product);
    }
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
