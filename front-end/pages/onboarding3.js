import React from 'react'

import styles from "./index.module.css";
const Onboarding3 = () => {
  return (
    <div className={styles.onboarding3}>
      <img className={styles.onboarding3Child} alt="" src="/frame-173.svg" />
      <div className={styles.whatDoYou}>What do you love most about art?</div>
      <div className={styles.afrikanLoverWrapper}>
        <div className={styles.afrikanLover}>Next</div>
      </div>
      <div className={styles.afrikanLoverContainer}>
        <div className={styles.afrikanLover}>Skip</div>
      </div>
      <div className={styles.instanceParent}>
        <img className={styles.frameChild} alt="" src="/group-10.svg" />
        <div className={styles.developingMyArt}>Developing my art tastes.</div>
      </div>
      <div className={styles.instanceGroup}>
        <img className={styles.frameChild} alt="" src="/group-101.svg" />
        <div className={styles.developingMyArt}>
          Keeping track of art I’m interested in.
        </div>
      </div>
      <div className={styles.instanceContainer}>
        <img className={styles.frameChild} alt="" src="/group-102.svg" />
        <div className={styles.developingMyArt}>
          Finding my next great investment.
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.frameChild} alt="" src="/group-103.svg" />
        <div className={styles.developingMyArt}>
          Collecting art that moves me.
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
