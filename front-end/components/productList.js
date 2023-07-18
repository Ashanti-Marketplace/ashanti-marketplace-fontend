// components/ProductList.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, cardStyle }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} cardStyle={cardStyle} />
      ))}
    </div>
  );
};

export default ProductList;
