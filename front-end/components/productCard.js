// components/ProductCard.js

import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, cardStyle }) => {
  let cardClassName = 'product-card';

  if (cardStyle === 'large') {
    cardClassName += ' large-card';
  } else if (cardStyle === 'medium') {
    cardClassName += ' medium-card';
  } else if (cardStyle === 'small') {
    cardClassName += ' small-card';
  }

  return (
    <div className={cardClassName} key={product.id}>
      <h3>{product.name}</h3>
      <Image src={product.image} width={300} height={200} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
