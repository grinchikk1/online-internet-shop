// моя заготовка для тестов
import React from "react";
import { PRODUCTS } from "./product";
import Product from "../../components/context/Product";

const ShopTest = () => {
  return (
    <div>
      <h1>SHOP</h1>
      <div>
        {PRODUCTS.map((product, id) => (
          <Product data={product} key={id} />
        ))}
      </div>
    </div>
  );
};
export default ShopTest;
