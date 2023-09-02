/* The code is importing various hooks and functions from the React library, as well as some custom
functions from other files. It then defines a UserContext using the createContext() function. */
import React,{
  createContext,
  useState,
  useMemo,
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
  step1Data: { name: "", email: "" },
  step2Data: { address: "", city: "" },
  step3Images: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
  },
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH_STATUS":
      const { user, isLoggedIn } = action.payload;
      if (state.user === user && state.loggedIn === isLoggedIn) {
        return state;
      }
      return {
        ...state,
        user,
        loggedIn: isLoggedIn,
      };

    case "LOGOUT":
      return { ...state, user: null, loggedIn: false };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_LIKED_PRODUCTS":
      if (state.likedProducts.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        likedProducts: [...state.likedProducts, action.payload],
      };

    case "ADD_TO_CART":
      if (state.cartItems.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

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

    case "SET_STEP1_DATA":
      return { ...state, step1Data: action.payload };
    case "SET_STEP2_DATA":
      return { ...state, step2Data: action.payload };
    case "SET_STEP3_IMAGES":
      return { ...state, step3Images: action.payload };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload },
      };

    default:
      return state;
  }
};

// Calculate the total price in the component or a selector when it's needed
// const totalPrice = useMemo(() => {
//   let totalPrice = 0;
//   state.cartItems.forEach((item) => {
//     totalPrice += item.price * item.quantity;
//   });
//   return totalPrice.toFixed(2);
// }, [initialState.cartItems]);

// Use the 'totalPrice' variable in the component where it's needed

//save uploaded data to backend


// const getProductById = async (productId) => {
//   return state.products.find((product) => product.id === productId);
// };

// export const getAllProducts = async () => {
//   return state.products;
// };

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  
  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts()
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }))
      .catch((error) => console.error(error));
  }, []); // Run the effect only once on mount

  // Pagination logic
  const currentPageData = useMemo(() => {
    const { currentPage, itemsPerPage } = state.pagination;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return state.products.slice(startIndex, endIndex);
  }, [state.products, state.pagination]);

  const totalPages = Math.ceil(state.products.length / state.pagination.itemsPerPage);

 
 
  const contextValue = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
    )
};

export const useUser = () => {
  const context = useContext(UserContext);
   if (!context) {
    throw new Error('useUser must be used within a UserContext');
   }
  return context;
};


