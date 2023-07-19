
import React from "react";
import ProductFetcher from "../utils/product-fetcher";
const Product = ({ product }) => {
    return (
        <ProductFetcher>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      </ProductFetcher>
    );
  };
  
  export default Product;
  