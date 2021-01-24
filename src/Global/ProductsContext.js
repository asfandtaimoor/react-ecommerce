import React, { createContext, useState } from "react";

// Import images
import dslr from "../images/dslr.jpg";
import iphone from "../images/iphone.jpg";
import microphone from "../images/microphone.jpg";
import money from "../images/money.jpg";
import perfume from "../images/perfume.jpg";
import rings from "../images/rings.jpg";
import shoes from "../images/shoes.jpg";
import watch from "../images/watch.jpg";
import shoppingBages from "../images/shopping-bages.jpg";

export const ProductsContext = createContext();

export const ProductContextProvider = () => {
  const [products, setProduct] = useState([
    { id: 1, name: "Dslr", price: 300, image: dslr, status: "hot" },
    { id: 2, name: "Iphone", price: 30, image: iphone, status: "new" },
    { id: 3, name: "Microphone", price: 300, image: microphone, status: "hot" },
    { id: 4, name: "Money", price: 300, image: money, status: "new" },
    { id: 5, name: "Perfume", price: 300, image: perfume, status: "hot" },
    { id: 6, name: "Rings", price: 100, image: rings, status: "hot" },
    { id: 7, name: "Shoes", price: 300, image: shoes, status: "new" },
    { id: 8, name: "Watch", price: 120, image: watch, status: "hot" },
    {
      id: 9,
      name: "Shopping Cart",
      price: 300,
      image: shoppingBages,
      status: "hot",
    },
  ]);
  return (
    <ProductsContext.Provider
      values={{ products: [...products] }}
    ></ProductsContext.Provider>
  );
};
