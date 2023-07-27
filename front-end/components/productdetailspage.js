// components/ProductDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import { useUser} from '../AppContext';

const ProductDetailsPage = () => {
    const router = useRouter();
    const { state } = useUser();
    const productId = router.query.id;

    const product = state.products.find((product) => product.id === productId);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Artist Name: {product.artistName}</p>
            <p>Pricing: {product.pricing}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
        </div>
    );
};

export default ProductDetailsPage;
