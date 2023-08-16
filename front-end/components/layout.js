
import Head from 'next/head'
import Link from "next/link";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.homePage}>
         <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
       
        <meta name="og:title"  />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
       <header className={styles.frameParent13}>
      <nav >
        <div className={styles.log0Parent}>
          <b className={styles.log0}>Log0</b>
          <div className={styles.searchForAfrikanVibesParent}>
            <div className={styles.raisingGodlyChildren}>
              Search for afrikan vibes
            </div>
            <img
              className={styles.mdicardsHeartOutlineIcon}
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
              className={styles.mdicardsHeartOutlineIcon}
              alt=""
              src="/icoutlineshoppingcart.svg"
            />
            <img
              className={styles.mdicardsHeartOutlineIcon}
              alt=""
              src="/mdiuseroutline.svg"
            />
          </div>
        </div>
        <div className={styles.frameChild12} />
      </nav>
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
        <div className={styles.lineDiv} /> //463-484
        <div className={styles.div}>@2023</div>
      </div>
      </footer>
      </div>
  );
};

export default Layout;
