import React from "react";

import "./Product.style.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="product text-center mb-4">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price}</p>

      <p
        className={`status ${
          product.status === "hot" ? "primary" : "secondary"
        }`}
      >
        {product.status}
      </p>

      <div className="d-grid gap-2">
        <button className="btn primary btn-lg text-white" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
