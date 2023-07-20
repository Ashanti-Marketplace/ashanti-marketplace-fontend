import styles from "./index.module.css";
const Onboarding1 = () => {
  return (
    <div className={styles.onboarding1}>
      <img className={styles.onboarding1Child} alt="" src="/frame-173.svg" />
      <div className={styles.marySokohWelcomeContainer}>
        <p className={styles.marySokoh}>Mary Sokoh!</p>
        <p className={styles.marySokoh}>Welcome to Ashanti.</p>
      </div>
      <div className={styles.discoverArtYoull}>
        Discover art you'll adore on Ashanti by personalizing your profile to
        your tastes.
      </div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.afrikanLover}>Get Started</div>
      </div>
      <div className={styles.afrikanLoverContainer}>
        <div className={styles.afrikanLover}>Skip</div>
      </div>
    </div>
  );
};

export default Onboarding1;
