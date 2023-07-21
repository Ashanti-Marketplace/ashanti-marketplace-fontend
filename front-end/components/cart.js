

// Cart.js

import React from 'react';
import { useUser } from '../utils/contexts//userContext';

const Cart = () => {
  const { state, dispatch } = useUser();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
      
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${state.totalPrice}</p>
    </div>
  );
};

export default Cart;
