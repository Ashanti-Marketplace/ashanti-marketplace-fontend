import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, totalPrice } = useUser();

   const handleRemoveFromCart = (productId) => {
     removeFromCart(productId);
   };

   

  return (
    <div>
      <h2>Shopping Cart</h2>
      {
      cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {
          cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
            </li>
           
          ))
          }
        </ul>
      )
      }

<p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;









// // Cart.js

// import { useState } from 'react';


 // Function to add an item to the cart
//   const addItemToCart = (item) => {
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//   };

// const Cart = () => {
//   // Initialize an empty cart state
//   const [cartItems, setCartItems] = useState([]);

//  
// addItemToCart(item)

//   // Function to remove an item from the cart
//   const removeItemFromCart = (itemIndex) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((_, index) => index !== itemIndex)
//     );
//   };

//   // Calculate the total price of all items in the cart
//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//       totalPrice += item.price * item.quantity;
//     });
//     return totalPrice;
//   };

//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price} x {item.quantity}
//             <button onClick={() => removeItemFromCart(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${calculateTotalPrice()}</p>
//     </div>
//   );
// };

// export default Cart;
