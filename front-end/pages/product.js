import {like, add} from '../components/likeadd'
import React from "react";
import ProductFetcher from "../utils/product-fetcher";
const Product = ({ product }) => {
    return (
        <ProductFetcher>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <like/>
        <add />
      </div>
      </ProductFetcher>
    );
  };
  
  export default Product;
  