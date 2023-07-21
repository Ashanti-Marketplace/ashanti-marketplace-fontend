

import Link from "next/link";
import styles from "../styles/homePage.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        {/* Header content goes here */}
        <div className={styles.log0Parent}>
          <b className={styles.log0}>Log0</b>
          <div className={styles.searchForAfrikanVibesParent}>
            <div className={styles.raisingGodlyChildren}>
              Search for afrikan vibes
            </div>
            <img
              className={styles.heartIcon}
              alt=""
              src="/materialsymbolssearchrounded.svg"
            />
          </div>
          <div className={styles.createAccountParent}>
            <div className={styles.createAccount}>
              <Link className={styles.createAccount1} href= '/buyer'>Buy</Link>
            </div>
            <div className={styles.createAccount}>
              <Link className={styles.createAccount1} href= '/buyer'>Sell</Link>
            </div>
          </div>
          <div className={styles.createAccountGroup}>
            <div className={styles.createAccount4}>
              <Link href="/login">Login</Link>
            </div>
            <div className={styles.createAccount6}>
              <Link className={styles.createAccount1} href= '/buyer'>Create Account</Link>
            </div>
          </div>
        </div>
        
      </header>
      
     <main> {children} </main> 
    

      <footer>
  
  <div className={styles.logoParent}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.marketplaceParent}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.raisingGodlyChildren}>Explore</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceGroup}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.raisingGodlyChildren}>Explore</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
          </div>
        </div>
        <div className={styles.marketplaceContainer}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.exploreParent}>
            <div className={styles.raisingGodlyChildren}>Explore</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
            <div className={styles.raisingGodlyChildren}>Blah</div>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.div}>@2023</div>
      </div>
      </footer>
      </div>
  );
};

export default Layout;
