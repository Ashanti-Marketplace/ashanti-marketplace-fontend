// components/Productcard.js

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '../AppContext';
import Image from 'next/image';
import { like, add } from './likeadd';





const ProductCard = (cardStyle) => {
    const { state } = useAppContext();

    let cardClassName = 'product-card';

    if (cardStyle === 'large') {
        cardClassName += ' large-card';
    } else if (cardStyle === 'medium') {
        cardClassName += ' medium-card';
    } else if (cardStyle === 'small') {
        cardClassName += ' small-card';
    }


    return (
        <div>
            <h2>Product Page</h2>
            <ul  key={product.id}>
                {state.products.map((product) => (
                    <li className={cardClassName} key={product.id}>
                        <h3>{product.name}</h3>
                        <Link href={`/products/${product.id}`}>
                            <a>View Details</a>
                        </Link>
                        <like />
                        <add />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCard;
