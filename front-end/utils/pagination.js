import React from "react";
import { useUser } from "./contexts/userContext";cd 
 // Inside a component


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const {state} = useUser();
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>

      <div>
  {/* Display current page and total pages */}
  <p>Page {state.pagination.currentPage} of {totalPages}</p>
</div>
    </div>
  );
};

export default Pagination;

// Inside a component
<div>
  {/* Previous button */}
  <button onClick={handlePrevPage} disabled={state.pagination.currentPage === 1}>
    Previous
  </button>
  
  {/* Next button */}
  <button onClick={handleNextPage} disabled={state.pagination.currentPage === totalPages}>
    Next
  </button>
</div>
