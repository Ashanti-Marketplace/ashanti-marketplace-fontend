
// CartCard.js

// import Cart from './Cart';

// const CartCard = () => {
//   return (
//     <div>
//       <h2>Cart Card</h2>
//       <Cart />
//     </div>
//   );
// };

// export default CartCard;


import styles from "./index.module.css";
const CartPage = () => {
  return (
    <div className={styles.cartPage}>
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
      <div className={styles.yourShoppingCartWrapper}>
        <div className={styles.explore}>YOUR SHOPPING CART</div>
      </div>
      <div className={styles.description}>DESCRIPTION</div>
      <div className={styles.price}>PRICE</div>
      <div className={styles.cartPageChild} />
      <div className={styles.n35000Parent}>
        <div className={styles.n35000}>N35,000</div>
        <img className={styles.groupChild} alt="" src="/ellipse-5@2x.png" />
        <b className={styles.mordernArtFuture}>MORDERN ART: FUTURE</b>
        <div className={styles.oghenetegaBright}>Oghenetega Bright</div>
        <img
          className={styles.materialSymbolsdeleteOutlinIcon}
          alt=""
          src="/materialsymbolsdeleteoutlinerounded.svg"
        />
      </div>
      <div className={styles.n35000Group}>
        <div className={styles.n35000}>N35,000</div>
        <img className={styles.groupChild} alt="" src="/ellipse-51@2x.png" />
        <b className={styles.mordernArtFuture}>MORDERN ART: FUTURE</b>
        <div className={styles.oghenetegaBright}>Oghenetega Bright</div>
        <img
          className={styles.materialSymbolsdeleteOutlinIcon}
          alt=""
          src="/materialsymbolsdeleteoutlinerounded1.svg"
        />
      </div>
      <b className={styles.total}>TOTAL</b>
      <div className={styles.orderSummaryParent}>
        <div className={styles.orderSummary}>ORDER SUMMARY</div>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.n70000}>N70,000</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.subtotalParent}>
            <div className={styles.subtotal}>Subtotal</div>
            <div className={styles.n35000Container}>
              <div className={styles.n350002}>N35,000</div>
              <div className={styles.n350002}>N35,000</div>
            </div>
          </div>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.enterShippingAddressWrapper}>
          <div className={styles.explore}>Enter shipping address</div>
        </div>
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.marketplace}>Proceed to payment</div>
      </div>
      <div className={styles.frameContainer}>
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
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default CartPage;
