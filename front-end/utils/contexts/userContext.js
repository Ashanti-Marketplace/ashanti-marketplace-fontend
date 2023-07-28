
import { createContext, useState, useEffect, useContext, useReducer } from 'react';
import {fetchProducts } from '../product-fetcher'

const UserContext = createContext();

const initialState = {
  loggedIn: false,
  user: null,
  products: [],
  likedProducts: [],
  cartItems: [],
  totalPrice: '',
  description: '',
  artistName: '',
  pricing: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH_STATUS':
      const { user, isLoggedIn } = action.payload;
      return { ...state, user, loggedIn: isLoggedIn };
    
    case 'LOGOUT':
      return { ...state, loggedIn: false };
   
      case 'SET_PRODUCTS':
          return { ...state, products: action.payload };
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

      case 'SET_DETAILS':
        return {
          ...state,
          description: action.payload.description,
          artistName: action.payload.artistName,
          pricing: action.payload.pricing,
        };

        case 'UPLOAD_TO_SERVER_SUCCESS':
          return {
            ...state,
            description: '',
            artistName: '',
            pricing: '',
          };
    
    default:
      return state;
  }
};

//save uploaded data to backend

const saveDataToBackend = async (data) => {
  try {
    // Assuming the backend API URL is '/api/saveData'
    await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return true; // Return true on successful upload
  } catch (error) {
    
    console.error('Error while saving data to the backend:', error);
    return false; // Return false on upload failure

  }

};



  
const getProductById = async (productId) => {
    return state.products.find((product) => product.id === productId);
};

export const getAllProducts = async () => {
    return state.products;
};


export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    useEffect(() => {
        // Fetch products when the component mounts
        fetchProducts()
            .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data }))
            .catch((error) => console.error(error));
    }, []); // Run the effect only once on mount

    const handleUploadButtonClick = async () => {
      // Simulate an upload and set details
      const uploadedDescription = 'Sample description';
      const uploadedArtistName = 'Sample artist name';
      const uploadedPricing = 'Sample pricing';
  
      dispatch({
        type: 'SET_DETAILS',
        payload: { description: uploadedDescription, artistName: uploadedArtistName, pricing: uploadedPricing },
      });
  



      useEffect(async () => {
        // Save the data to the backend whenever description, artistName, or pricing changes
        await saveDataToBackend({
          description: uploadedDescription,
          artistName: uploadedArtistName,
          pricing: uploadedPricing,
        });
        if (isUploadSuccess) {
          dispatch({ type: 'UPLOAD_TO_SERVER_SUCCESS' });
        } else {
          // Handle upload failure, if needed
        }

      }, [state.description, state.artistName, state.pricing]);
    
    };
    
   

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




