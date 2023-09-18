import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/fetchProducts";
import ProductCard from "../../components/Product/Product";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../features/shop/shopSlice";
import { addProductToCart } from "../../features/cart/cartSlice";
import { getCart, updateCart, createCart } from "../../data/fetchCart";
import { CartLocalStorageHelper } from "../../helpers/cartLocalStorageHelper";

function Product() {
  const products = useSelector((store) => store.shop.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((data) => {
        dispatch(setProducts(data.data));
        const product = data.data.find((product) => product._id === id);
        setProduct(product);
      });
    } else {
      const product = products.find((product) => product._id === id);
      setProduct(product);
    }
  }, [dispatch, id, products]);

  const handleAddProductToCart = async (amount = 1) => {
    dispatch(addProductToCart(product));
    if (!!token) {
      const cart = await getCart(token);
      if (cart.data === null) {
        const prod = {
          products: [{ product: product._id, cartQuantity: amount }],
        };
        await createCart(prod, token);
      } else {
        let products = cart.data?.products.map((item) => {
          return {
            product: item.product._id,
            cartQuantity: item.cartQuantity || 1,
          };
        });

        if (products.find((item) => item.product === product._id)) {
          products = products.map((item) => {
            if (item.product === product._id) {
              return {
                ...item,
                cartQuantity: item.cartQuantity + amount,
              };
            }
            return item;
          });
        } else {
          products = [
            ...products,
            {
              product: product._id,
              cartQuantity: amount,
            },
          ];
        }

        await updateCart({ products }, token);
      }
    } else {
      CartLocalStorageHelper.addProductToCart(product, amount);
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
