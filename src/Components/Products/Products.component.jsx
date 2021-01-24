import React, { useContext } from "react";

import { ProductsContext } from "../../Global/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products">
      {products.map((product) => (
        <div>Product</div>
      ))}
    </div>
  );
};

export default Products;
