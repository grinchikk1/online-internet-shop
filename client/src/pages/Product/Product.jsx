import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/fetchProducts";
import ProductCard from "../../components/Product/Product";
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
    const fetchDataAsync = async () => {
      const data = await getProducts();
      const productById = data.find((product) => product._id === id);
      setProduct(productById || null);
    };

    fetchDataAsync();
  }, [id]);

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((data) => {
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
