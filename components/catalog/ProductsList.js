import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <ProductItem key={item._id} data={item} />
      ))}
    </>
  );
};

export default ProductsList;
