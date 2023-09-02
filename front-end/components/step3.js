// components/Step3.js
import React, { useState } from 'react';
import { useAppContext, useUser } from '../utils/contexts/userContext';
import { useRouter } from 'next/router';
import styles from "../styles/upload3.module.css";


const Step3 = () => {
  const { state, dispatch } = useUser();
  const [uploadedImages, setUploadedImages] = useState([]);
  const router = useRouter();

   const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
     const fileNames = Array.from(files).map((file) => file.name);
    if (files) {
      displayImage(fileNames);
    }
  };

   const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      displayImage(file);
    }
  };


  const displayImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages(reader.result);
    };
    reader.readAsDataURL(file);
  };


  // const handleFileDrop = (e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;
  //   // Process the uploaded image files as needed

  //   //  we are just storing the file names in state
  //   const fileNames = Array.from(files).map((file) => file.name);
  //   setUploadedImages(fileNames);
  // };

 
  const handleUploadArtwork = async (e) => {
    e.preventDefault();
    try {
      // Collect data from all steps
      const formData = {
        step1Data: state.step1Data,
        step2Data: state.step2Data,
        step3Images: uploadedImages,
      };
 alert(formData.step3Images)
 console.log(formData.step3Images);
      // Send the form data to the server using an API call
      // For this example, we are using the fetch API
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the upload was successful (you may adjust this based on your server response)
      if (response.ok) {
        const updatedData = await response.json();
        // Update the state in the universal state manager with data from the server response
        dispatch({ type: 'SET_SERVER_DATA', payload: updatedData });
        // Navigate to a success page or perform any other action
        router.push('/success');
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading artwork:', error);
    }
  };

  return (
    <div>
    









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


      <div
         onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
        className={styles.dragAndDrop}
      >
        Drag and drop images here to upload
      </div>

     <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />


      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.searchForAfrikan}>Upload Artworks</div>
        <button onClick={displayImage}> Upload Artworks</button>
      </div>
      <div className={styles.pleaseUploadHighQuality}>
        Please upload high-quality photos of the work’s front and back.
      </div>
      <div className={styles.afrikanLoverContainer}>
        
        <button className={styles.marketplace} onClick={handleUploadArtwork}> Submit Upload</button>
      </div>
      <div className={styles.uploadArt3Child} />
      <div className={styles.uploadArt3Item} />

      {/* <ul>
            {uploadedImages.map((imageName, index) => (
              <li  className={styles.uploadArt3Inner}key={index}>{imageName}  
               <div className={styles.jpg}>image</div></li>
            ))}
          </ul> */}


  < ul>
      
   { uploadedImages.map((imageName, index)=>(
      <li>
          <img
           src={uploadedImages}
          alt="Preview"
           style={styles.uploArt3Inner}
           key={index}
       />
       <div className={styles.jpg}>image</div>
      </li>
    ))} 
    </ul>
//         
     
      <img
        className={styles.materialSymbolsdeleteOutlinIcon}
        alt=""
        src="/materialsymbolsdeleteoutlinerounded.svg"
          />
          
      </div>










    </div>
  );
};

export default Step3;



// const handleUploadButtonClick = async (event) => {
//   //stop the form from refreshing the page
//   event.preventDefault();

//   // Simulate an upload and set details
//   const data = {
//     uploadedDescription: "Sample description",
//     uploadedArtistName: "Sample artist name",
//     uploadedPricing: "Sample pricing",
//   };

//   dispatch({
//     type: "SET_DETAILS",
//     payload: data,
//   });

//   // Save the data to the backend whenever description, artistName, or pricing changes
//   useEffect(async () => {
//     await saveDataToBackend({
//       description: data.uploadedDescription,
//       artistName: data.uploadedArtistName,
//       pricing: data.uploadedPricing,
//     });
//     if (isUploadSuccess) {
//       dispatch({ type: "UPLOAD_TO_SERVER_SUCCESS" });
//     } else {
//       // Handle upload failure, if needed
//     }
//   }, [description, artistName, pricing]);
// };



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



//   const [previewImage, setPreviewImage] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       displayImage(file);
//     }
//   };

//   const handleFileInput = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       displayImage(file);
//     }
//   };

//   const displayImage = (file) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="App">
//       <div
//         className="dropzone"
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()}
//         onClick={() => document.getElementById('fileInput').click()}
//       >
//         <p>Click or drag and drop an image here</p>
//       </div>

//       <input
//         type="file"
//         id="fileInput"
//         style={{ display: 'none' }}
//         onChange={handleFileInput}
//       />

//       {previewImage && (
//         <img
//           src={previewImage}
//           alt="Preview"
//           style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '20px' }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [previewImage, setPreviewImage] = useState(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       displayImage(file);
//     }
//   };

//   const handleFileInput = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       displayImage(file);
//     }
//   };

//   const handleSearch = () => {
//     document.getElementById('fileInput').click();
//   };

//   const displayImage = (file) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="App">
//       <div
//         className="dropzone"
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()}
//         onClick={handleSearch}
//       >
//         <p>Click or drag and drop an image here</p>
//       </div>

//       <input
//         type="file"
//         id="fileInput"
//         style={{ display: 'none' }}
//         onChange={handleFileInput}
//       />

//       {previewImage && (
//         <img
//           src={previewImage}
//           alt="Preview"
//           style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '20px' }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;






//const saveDataToBackend = async (data) => {
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
// };
