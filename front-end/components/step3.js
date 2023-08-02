// components/Step3.js
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import { useRouter } from 'next/router';

const Step3 = () => {
  const { state, dispatch } = useAppContext();
  const [uploadedImages, setUploadedImages] = useState([]);
  const router = useRouter();

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Process the uploaded image files as needed

    // For this example, we are just storing the file names in state
    const fileNames = Array.from(files).map((file) => file.name);
    setUploadedImages(fileNames);
  };

  const handleUploadArtwork = async (e) => {
    e.preventDefault();
    try {
      // Collect data from all steps
      const formData = {
        step1Data: state.step1Data,
        step2Data: state.step2Data,
        step3Images: uploadedImages,
      };

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
      <h2>Step 3: Upload Artwork</h2>
      <div
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ border: '1px dashed black', padding: '10px', marginBottom: '10px' }}
      >
        Drag and drop images here to upload
      </div>
      {uploadedImages.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          <ul>
            {uploadedImages.map((imageName, index) => (
              <li key={index}>{imageName}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleUploadArtwork}>Upload Artwork</button>
    </div>
  );
};

export default Step3;
