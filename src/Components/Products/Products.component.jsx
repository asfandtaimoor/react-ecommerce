import React, { useContext } from "react";

// Components
import { ProductsContext } from "../../Global/ProductsContext";
import Product from "../Product/Product.component";
const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products mt-5 d-flex flex-wrap  justify-content-around justify-content-md-between">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
