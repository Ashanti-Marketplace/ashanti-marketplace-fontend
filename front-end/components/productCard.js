import React from 'react';
import Image from 'next/image';
//import { useUser } from '../contexts/UserContext';
import { like, add } from './likeadd';

const ProductCard = ({ product, cardStyle }) => {
 // const { likedProducts, addToLikedProducts, addToCart } = useUser();

  // const handleLike = (productId) => {
  //   addToLikedProducts(productId);
  // };

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  // };

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
      <like/>
      <add/>
      {/* Add a link to the image profile */}
      <Link href={`/image/${product.id}`}>
        <a>View Image Profile</a>
      </Link>
    </div>
  );
};

export default ProductCard;
