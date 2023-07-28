import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";
import s from "./shop.module.css";

const Shop = () => {
  return (
    <div>
      <h1>SHOP</h1>
      <div className={s.products}>
        {PRODUCTS.map((product, id) => (
          <Product data={product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
