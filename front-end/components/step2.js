// components/Step2.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext, useUser } from '../utils/contexts/userContext';
import styles from "../styles/upload2.module.css";

const Step2 = () => {
  const [inputData, setInputData] = useState({ address: '', city: '' });
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
    dispatch({ type: 'SET_STEP2_DATA', payload: inputData });

    // Navigate to the next step (Step3)
    router.push('/uploadart/3');
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form onSubmit={handleContinue}>
        <label>Address:</label>
        <input type="text" name="address" value={inputData.address} onChange={handleInputChange} />
        <br />
        <label>City:</label>
        <input type="text" name="city" value={inputData.city} onChange={handleInputChange} />
        <br />
        <button type="submit">Continue</button>
      </form>










      <div className={styles.uploadArt2}>
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
      <div className={styles.giveUsDetails}>Give us details about your art</div>
      <div className={styles.weAreGoing}>
        We are going to need more details about your art work
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.titleParent}>
          <div className={styles.searchForAfrikan}>Title</div>
          <div className={styles.theLostOneWrapper}>
            <div className={styles.searchForAfrikan}>The lost one</div>
          </div>
        </div>
        <div className={styles.titleParent}>
          <div className={styles.searchForAfrikan}>Year</div>
          <div className={styles.theLostOneWrapper}>
            <div className={styles.searchForAfrikan}>2023</div>
          </div>
        </div>
        <div className={styles.titleParent}>
          <div className={styles.searchForAfrikan}>Type of art</div>
          <div className={styles.theLostOneWrapper}>
            <div className={styles.searchForAfrikan}>Painting</div>
          </div>
        </div>
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.marketplace}>Continue</div>
      </div>
    </div>












    </div>
  );
};

export default Step2;



