


// // CartCard.js

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
const CartAppers = () => {
  return (
    <div className={styles.cartAppers}>
      <div className={styles.itemsInYour}>(2) ITEMS IN YOUR CART</div>
      <div className={styles.cartAppersChild} />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-4@2x.png" />
        <div className={styles.modernTheFuture}>Modern: the future</div>
        <div className={styles.byOghenetegaBright}>By: OgheneTega Bright</div>
        <div className={styles.priceN35000}>price: N35,000</div>
        <img
          className={styles.materialSymbolsdeleteOutlinIcon}
          alt=""
          src="/materialsymbolsdeleteoutlinerounded.svg"
        />
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.groupChild} alt="" src="/ellipse-41@2x.png" />
        <div className={styles.modernTheFuture}>Lady in art</div>
        <div className={styles.byOghenetegaBright}>By: Mary Sokoh</div>
        <div className={styles.priceN35000}>price: N25,000</div>
        <img
          className={styles.materialSymbolsdeleteOutlinIcon}
          alt=""
          src="/materialsymbolsdeleteoutlinerounded1.svg"
        />
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.afrikanLover}>Continue to Cart</div>
      </div>
    </div>
  );
};

export default CartAppers;

