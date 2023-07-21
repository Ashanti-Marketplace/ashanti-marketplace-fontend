
import { createContext, useState, useEffect, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  loggedIn: false,
  user: null,
  likedProducts: [],
  cartItems: [],
  totalPrice: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_LIKED_PRODUCTS':
      return { ...state, likedProducts: [...state.likedProducts, action.payload] };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    case 'CALCULATE_TOTAL_PRICE':
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return { ...state, totalPrice: totalPrice.toFixed(2) };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
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
