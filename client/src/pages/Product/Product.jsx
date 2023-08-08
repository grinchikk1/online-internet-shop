import React, { useState, useEffect } from "react";
import fetchData from "../../data/index";
import ProductCard from "../../components/Product/index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../features/shop/shopSlice";
import { addProductToCart } from "../../features/cart/cartSlice";

function Product() {
  const products = useSelector((store) => store.shop.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products.length === 0) {
      fetchData().then((data) => {
        dispatch(setProducts(data));
        const product = data.find((product) => product.id === parseInt(id));
        setProduct(product);
      });
    } else {
      const product = products.find((product) => product.id === parseInt(id));
      setProduct(product);
    }
  }, [id]);

  return (
    <>
      {product ? (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCardClicked={() => dispatch(addProductToCart(product))}
        />
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );
}

export default Product;
