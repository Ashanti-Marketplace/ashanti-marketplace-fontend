import styles from "./index.module.css";
const UploadArt3 = () => {
  return (
    <div className={styles.uploadArt3}>
      <div className={styles.frameParent}>
        <div className={styles.log0Parent}>
          <b className={styles.log0}>Log0</b>
          <div className={styles.searchForAfrikanVibesParent}>
            <div className={styles.searchForAfrikan}>
              Search for afrikan vibes
            </div>
            <img
              className={styles.materialSymbolssearchRoundeIcon}
              alt=""
              src="/materialsymbolssearchrounded.svg"
            />
          </div>
          <div className={styles.createAccountParent}>
            <div className={styles.createAccount}>
              <div className={styles.createAccount1}>Buy</div>
            </div>
            <div className={styles.createAccount}>
              <div className={styles.createAccount1}>Sell</div>
            </div>
          </div>
          <div className={styles.icoutlineShoppingCartParent}>
            <img
              className={styles.materialSymbolssearchRoundeIcon}
              alt=""
              src="/icoutlineshoppingcart.svg"
            />
            <img
              className={styles.materialSymbolssearchRoundeIcon}
              alt=""
              src="/mdiuseroutline.svg"
            />
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.logoParent}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.marketplaceParent}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.searchForAfrikan}>Explore</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceGroup}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.searchForAfrikan}>Explore</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceContainer}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.searchForAfrikan}>Explore</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
            <div className={styles.searchForAfrikan}>Blah</div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.div}>@2023</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameInner} />
        <div className={styles.lineDiv} />
        <div className={styles.frameInner} />
        <div className={styles.lineDiv} />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.contactInformation}>Contact Information</div>
      <div className={styles.artDetails}>Art details</div>
      <div className={styles.uploadImages}>Upload images</div>
      <div className={styles.uploadPhotosOf}>Upload photos of your artwork</div>
      <div className={styles.dragAndDrop}>Drag and drop photos here</div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.searchForAfrikan}>Upload Artworks</div>
      </div>
      <div className={styles.pleaseUploadHighQuality}>
        Please upload high-quality photos of the work’s front and back.
      </div>
      <div className={styles.afrikanLoverContainer}>
        <div className={styles.marketplace}>Submit Upload</div>
      </div>
      <div className={styles.uploadArt3Child} />
      <div className={styles.uploadArt3Item} />
      <img
        className={styles.uploadArt3Inner}
        alt=""
        src="/rectangle-88@2x.png"
      />
      <div className={styles.jpg}>3894574543_5763.jpg</div>
      <img
        className={styles.materialSymbolsdeleteOutlinIcon}
        alt=""
        src="/materialsymbolsdeleteoutlinerounded.svg"
          />
          
      </div>

  );
};

export default UploadArt3;



// import React from 'react';
// import { useAppContext } from './AppProvider'; // Import the context hook

// const ButtonComponent = () => {
//   const { handleUploadButtonClick } = useAppContext(); // Access the handleUploadButtonClick function from the context

//   const handleButtonClick = () => {
//     // Perform any logic related to the upload process in this component
//     // For simplicity, we are calling the handleUploadButtonClick function directly here
//     handleUploadButtonClick();
//   };

//   return (
//     <button onClick={handleButtonClick}>Upload</button>
//   );
// };

// export default ButtonComponent;


// import { useUser } from './UserProvider';

// const MyComponent = () => {
//   const { state, dispatch } = useUser();

//   const handleUploadButtonClick = () => {
//     // Simulate an upload and set details
//     const uploadedDescription = 'Sample description';
//     const uploadedArtistName = 'Sample artist name';
//     const uploadedPricing = 'Sample pricing';

//     dispatch({
//       type: 'SET_DETAILS',
//       payload: { description: uploadedDescription, artistName: uploadedArtistName, pricing: uploadedPricing },
//     });
//   };

//   // ... (rest of the component)
// };



// ... (other imports and constants)

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
    // ... (other cases)

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

    // ... (other cases)
  }
};

const uploadDataToServer = async (data) => {
  try {
    // Assuming the backend API URL is '/api/uploadData'
    await fetch('/api/uploadData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return true; // Return true on successful upload
  } catch (error) {
    console.error('Error while uploading data to the server:', error);
    return false; // Return false on upload failure
  }
};

// ... (other functions)

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);
//   useEffect(() => {
//     // Fetch products when the component mounts
//     fetchProducts()
//       .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data }))
//       .catch((error) => console.error(error));
//   }, []); // Run the effect only once on mount

//   const handleUploadButtonClick = async () => {
//     // Simulate an upload and set details
//     const uploadedDescription = 'Sample description';
//     const uploadedArtistName = 'Sample artist name';
//     const uploadedPricing = 'Sample pricing';

//     dispatch({
//       type: 'SET_DETAILS',
//       payload: { description: uploadedDescription, artistName: uploadedArtistName, pricing: uploadedPricing },
//     });

//     // Upload data to the server
//     const isUploadSuccess = await uploadDataToServer({
//       description: uploadedDescription,
//       artistName: uploadedArtistName,
//       pricing: uploadedPricing,
//     });

//     if (isUploadSuccess) {
//       dispatch({ type: 'UPLOAD_TO_SERVER_SUCCESS' });
//     } else {
//       // Handle upload failure, if needed
//     }
//   };

//   return (
//     <UserContext.Provider value={{ state, dispatch, handleUploadButtonClick }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // ... (other exports)



