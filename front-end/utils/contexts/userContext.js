import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { fetchProducts } from "../product-fetcher";
import { useRouter } from "next/router";

const UserContext = createContext();

const initialState = {
  loggedIn: false,
  user: null,
  products: [],
  likedProducts: [],
  cartItems: [],
  totalPrice: "",
  description: "",
  artistName: "",
  pricing: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH_STATUS":
      const { user, isLoggedIn } = action.payload;
      return {
        ...state,
        user,
        loggedIn: localStorage.setItem("loggedIn", isLoggedIn),
      };

    case "LOGOUT":
      return { ...state, user: null, loggedIn: false };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_LIKED_PRODUCTS":
      return {
        ...state,
        likedProducts: [...state.likedProducts, action.payload],
      };
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "CALCULATE_TOTAL_PRICE":
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      return { ...state, totalPrice: totalPrice.toFixed(2) };

    case "SET_DETAILS":
      return {
        ...state,
        description: action.payload.description,
        artistName: action.payload.artistName,
        pricing: action.payload.pricing,
      };

    case "UPLOAD_TO_SERVER_SUCCESS":
      return {
        ...state,
        description: "",
        artistName: "",
        pricing: "",
      };

    default:
      return state;
  }
};

//handle login to server
const loginToserver = async (data) => {
  try {
    const JSONdata = JSON.stringify(data), // Send the data to the server in JSON format.
      endpoint = "/api/form"; // API endpoint where we send form data.

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options), // Send the form data to our forms API  and get a response.
      result = await response.json(); // Get the response data from server as JSON. If server returns the name submitted, that means the form works.
    return true;
    alert(`Is this your full name: ${result.data}`);
  } catch (error) {
    return false;
  }
};

//save uploaded data to backend

const saveDataToBackend = async (data) => {
  try {
    // Assuming the backend API URL is '/api/saveData'
    await fetch("/api/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return true; // Return true on successful upload
  } catch (error) {
    console.error("Error while saving data to the backend:", error);
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
  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts()
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }))
      .catch((error) => console.error(error));
  }, []); // Run the effect only once on mount

  //handle login
  const handleLogin = (event) => {
    // prebent login form form refreshing the page

    event.preventDefault();

    //data entery from form
    try {
      const data = {
        email: event.target.email.value,
        pwd: event.target.password.value,
      };

      alert(data.email);

      //save to backend on submit
      useEffect(async () => {
        await loginToserver(data);
        if (result.ok) {
          console.log(result);
          // If login is successful, store authentication status in local storage
          //localStorage.setItem('isLoggedIn', true);

          // If login is successful, update the user state with server response Update the login status state

          dispatch({
            type: "SET_AUTH_STATUS",
            payload: { data, loggedIn: true },
          });

          // Redirect to products page
          router.push("/products");
        } else {
          //user doesnt exist
          router.replace("/signup");
          throw new Error();
          // Handle login error, show error message, etc.
        }
      }, [data]);
    } catch (error) {
      console.log(error);
    }
  };

  // upload art functionality
  const handleUploadButtonClick = async (event) => {
    //stop the form from refreshing the page
    event.preventDefault();

    // Simulate an upload and set details
    const data = {
      uploadedDescription: "Sample description",
      uploadedArtistName: "Sample artist name",
      uploadedPricing: "Sample pricing",
    };

    dispatch({
      type: "SET_DETAILS",
      payload: data,
    });

    // Save the data to the backend whenever description, artistName, or pricing changes
    useEffect(async () => {
      await saveDataToBackend({
        description: data.uploadedDescription,
        artistName: data.uploadedArtistName,
        pricing: data.uploadedPricing,
      });
      if (isUploadSuccess) {
        dispatch({ type: "UPLOAD_TO_SERVER_SUCCESS" });
      } else {
        // Handle upload failure, if needed
      }
    }, [description, artistName, pricing]);
  };

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        getProductById,
        getAllProducts,
        saveDataToBackend,
        handleUploadButtonClick,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  // if (!context) {
  //  throw new Error('useUser must be used within a UserProvider');
  // }
  return context;
};


// AppContext.js
// import React, { createContext, useReducer, useContext } from 'react';

// // Initial state for the app
// const initialState = {
//   step1Data: { name: '', email: '' },
//   step2Data: { address: '', city: '' },
//   step3Images: [],
// };

// // Reducer function to update state based on actions
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_STEP1_DATA':
//       return { ...state, step1Data: action.payload };
//     case 'SET_STEP2_DATA':
//       return { ...state, step2Data: action.payload };
//     case 'SET_STEP3_IMAGES':
//       return { ...state, step3Images: action.payload };
//     default:
//       return state;
//   }
// };

// // Create the context
// const AppContext = createContext();

// // Create the provider to wrap the app with
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hook to use the app context
// const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within an AppProvider');
//   }
//   return context;
// };

// export { AppProvider, useAppContext };
