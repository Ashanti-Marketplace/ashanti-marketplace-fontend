import styles from "./index.module.css";
const Onboarding4 = () => {
  return (
    <div className={styles.onboarding4}>
      <img className={styles.onboarding4Child} alt="" src="/frame-173.svg" />
      <div className={styles.almostDoneNow}>
        Almost done! Now select some artworks and artists to tailor Ashanti to
        your tastes.
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.afrikanLover}>Next</div>
      </div>
      <div className={styles.afrikanLoverContainer}>
        <div className={styles.afrikanLover}>Skip</div>
      </div>
      <div className={styles.instanceParent}>
        <img className={styles.frameChild} alt="" src="/group-10.svg" />
        <div className={styles.take}>Take</div>
      </div>
      <div className={styles.instanceGroup}>
        <img className={styles.frameChild} alt="" src="/group-101.svg" />
        <div className={styles.take}>
          Keeping track of art I’m interested in.
        </div>
      </div>
      <div className={styles.instanceContainer}>
        <img className={styles.frameChild} alt="" src="/group-102.svg" />
        <div className={styles.take}>Finding my next great investment.</div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.frameChild} alt="" src="/group-103.svg" />
        <div className={styles.take}>Collecting art that moves me.</div>
      </div>
    </div>
  );
};

export default Onboarding4;
