import styles from "./index.module.css";
const UploadArt1 = () => {
  return (
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
  );
};

export default UploadArt1;
