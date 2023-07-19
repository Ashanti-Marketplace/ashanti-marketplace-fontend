
import { createContext, useState,useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, calculateTotalPrice] = useState('')
  const addToLikedProducts = (productId) => {
    setLikedProducts((prevLikedProducts) => [...prevLikedProducts, productId]);
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

   useEffect( () => {
           let totalPrice = 0;
            cartItems.forEach((item) => {
              totalPrice += item.price * item.quantity;
           });
            return totalPrice;
          }, []
  )
    


  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        likedProducts,
        addToLikedProducts,
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        calculateTotalPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
