 import styles from "../styles/onboarding1.module.css";
const Onboarding2 = () => {
  return (
    <div className={styles.onboarding2}>
      <img className={styles.onboarding2Child} alt="" src="/frame-173.svg" />
      <div className={styles.haveYouPurchased}>
        Have you purchased art before?
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.afrikanLover}>Get Started</div>
      </div>
      <div className={styles.afrikanLoverContainer}>
        <div className={styles.afrikanLover}>Skip</div>
      </div>
      <div className={styles.instanceParent}>
        <img className={styles.frameChild} alt="" src="/group-10.svg" />
        <div className={styles.yesILove}>Yes, I love collecting art</div>
      </div>
      <div className={styles.instanceGroup}>
        <img className={styles.frameChild} alt="" src="/group-101.svg" />
        <div className={styles.yesILove}>No, I’m just starting out</div>
      </div>
    </div>
  );
};

export default Onboarding2;
