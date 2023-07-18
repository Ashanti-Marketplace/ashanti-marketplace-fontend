// pages/products.js

import React from 'react';
import ProductFetcher from '../utils/product-fetcher';
import ProductList from '../components/ProductList';

const Products = () => {
  return (
    <ProductFetcher>
      <ProductList cardStyle="large" />
    </ProductFetcher>
  );
};

export default Products;
