// utils/productFetcher.js
const API_BASE_URL = 'https://example-api.com'; // Replace this with your actual backend API URL

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching products.');
    }
};
