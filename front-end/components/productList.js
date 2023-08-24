// components/ProductList.js
import { useState } from 'react';
import React from 'react';
import { useUser } from '../utils/contexts/userContext';
import ProductCard from './productCard';
import Pagination from '../utils/pagination';

const ProductList = ({ products, cardStyle }) => {

  const { state } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(state.products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = state.products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-container">

      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} cardStyle={cardStyle} />
      ))}

      {/* Render the Pagination component */}
    <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
    </div>

    
  );
};

export default ProductList;


