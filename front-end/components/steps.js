// // components/Step1.js
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import { useAppContext } from '../AppContext';

// const Step1 = () => {
//   const [inputData, setInputData] = useState({ name: '', email: '' });
//   const router = useRouter();
//   const { dispatch } = useAppContext();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleContinue = (e) => {
//     e.preventDefault();
//     // Save the input data to the state (universal state manager)
//     dispatch({ type: 'SET_STEP1_DATA', payload: inputData });

//     // Navigate to the next step (Step2)
//     router.push('/form/2');
//   };

//   return (
//     <div>
//       <h2>Step 1: Personal Information</h2>
//       <form onSubmit={handleContinue}>
//         <label>Name:</label>
//         <input type="text" name="name" value={inputData.name} onChange={handleInputChange} />
//         <br />
//         <label>Email:</label>
//         <input type="email" name="email" value={inputData.email} onChange={handleInputChange} />
//         <br />
//         <button type="submit">Continue</button>
//       </form>
//     </div>
//   );
// };

// export default Step1;

// // components/Step2.js
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import { useAppContext } from '../AppContext';

// const Step2 = () => {
//   const [inputData, setInputData] = useState({ address: '', city: '' });
//   const router = useRouter();
//   const { dispatch } = useAppContext();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleContinue = (e) => {
//     e.preventDefault();
//     // Save the input data to the state (universal state manager)
//     dispatch({ type: 'SET_STEP2_DATA', payload: inputData });

//     // Navigate to the next step (Step3)
//     router.push('/form/3');
//   };

//   return (
//     <div>
//       <h2>Step 2: Address Information</h2>
//       <form onSubmit={handleContinue}>
//         <label>Address:</label>
//         <input type="text" name="address" value={inputData.address} onChange={handleInputChange} />
//         <br />
//         <label>City:</label>
//         <input type="text" name="city" value={inputData.city} onChange={handleInputChange} />
//         <br />
//         <button type="submit">Continue</button>
//       </form>
//     </div>
//   );
// };

// export default Step2;

// // components/Step3.js
// import React, { useState } from 'react';
// import { useAppContext } from '../AppContext';

// const Step3 = () => {
//   const { state, dispatch } = useAppContext();
//   const [uploadedImages, setUploadedImages] = useState([]);

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     // Process the uploaded image files as needed

//     // For this example, we are just storing the file names in state
//     const fileNames = Array.from(files).map((file) => file.name);
//     setUploadedImages(fileNames);
//   };

//   const handleUploadArtwork = (e) => {
//     e.preventDefault();
//     // Send the form data and uploaded images to the server using API call
//     // Example: fetch('/api/upload', { method: 'POST', body: formData })
//     // After server-side processing, update the state in universal state manager

//     // For this example, we just display the uploaded images on the page
//     dispatch({ type: 'SET_STEP3_IMAGES', payload: uploadedImages });
//   };

//   return (
//     <div>
//       <h2>Step 3: Upload Artwork</h2>
//       <div
//         onDrop={handleFileDrop}
//         onDragOver={(e) => e.preventDefault()}
//         style={{ border: '1px dashed black', padding: '10px', marginBottom: '10px' }}
//       >
//         Drag and drop images here to upload
//       </div>
//       {uploadedImages.length > 0 && (
//         <div>
//           <h3>Uploaded Images:</h3>
//           <ul>
//             {uploadedImages.map((imageName, index) => (
//               <li key={index}>{imageName}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button onClick={handleUploadArtwork}>Upload Artwork</button>
//     </div>
//   );
// };

// export default Step3;
