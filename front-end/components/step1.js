// components/Step1.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext, useUser } from '../utils/contexts/userContext';
import styles from "../styles/upload1.module.css";

const Step1 = () => {
  const [inputData, setInputData] = useState({ name: '', email: '' });
  const router = useRouter();
  const { dispatch } = useUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Save the input data to the state (universal state manager)
    dispatch({ type: 'SET_STEP1_DATA', payload: inputData });

    // Navigate to the next step (Step2)
    router.push('/uploadart/2');
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form onSubmit={handleContinue}>
        <label>Name:</label>
        <input type="text" name="name" value={inputData.name} onChange={handleInputChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={inputData.email} onChange={handleInputChange} />
        <br />
        <button type="submit">Continue</button>
      </form>





      <div className={styles.uploadArt1}>
      
      <div className={styles.logoParent}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.marketplaceParent}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.explore}>Explore</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceGroup}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.explore}>Explore</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceContainer}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.explore}>Explore</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
            <div className={styles.explore}>Blah</div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.div}>@2023</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.contactInformation}>Contact Information</div>
      <div className={styles.letUsKnow}>Let us know how to reach you</div>
      <div className={styles.weWillOnly}>
        We will only use these details to contact you regarding your submission
      </div>
      <div className={styles.frameParent}>
        <div className={styles.nameParent}>
          <div className={styles.explore}>Name</div>
          <div className={styles.marySokohWrapper}>
            <div className={styles.explore}>Mary Sokoh</div>
          </div>
        </div>
        <div className={styles.nameParent}>
          <div className={styles.explore}>Email</div>
          <div className={styles.marySokohWrapper}>
            <div className={styles.explore}>marysokoh4@gmail.com</div>
          </div>
        </div>
        <div className={styles.nameParent}>
          <div className={styles.explore}>Phone number</div>
          <div className={styles.marySokohWrapper}>
            <div className={styles.explore}>08131014376</div>
          </div>
        </div>
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.marketplace}>Continue</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.log0Parent}>
          <b className={styles.log0}>Log0</b>
          <div className={styles.searchForAfrikanVibesParent}>
            <div className={styles.explore}>Search for afrikan vibes</div>
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
        <div className={styles.frameChild2} />
      
      
      
      </div>


    </div>











    </div>
  );
};

export default Step1;



