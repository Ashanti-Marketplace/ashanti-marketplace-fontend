import styles from "./index.module.css";
const MyProfileView = () => {
  return (
    <div className={styles.myProfileView}>
      <div className={styles.frameParent}>
        <div className={styles.mdiuserOutlineParent}>
          <img
            className={styles.mdiuserOutlineIcon}
            alt=""
            src="/mdiuseroutline.svg"
          />
          <div className={styles.myProfile}>My Profile</div>
        </div>
        <div className={styles.mdiuserOutlineParent}>
          <img
            className={styles.mdiuserOutlineIcon}
            alt=""
            src="/mdicardsheartoutline.svg"
          />
          <div className={styles.myProfile}>Saves</div>
        </div>
        <div className={styles.mdiuserOutlineParent}>
          <img
            className={styles.mdiuserOutlineIcon}
            alt=""
            src="/phusersbold.svg"
          />
          <div className={styles.myProfile}>Follow</div>
        </div>
        <div className={styles.mdiuserOutlineParent}>
          <img
            className={styles.mdiuserOutlineIcon}
            alt=""
            src="/antdesignlogoutoutlined.svg"
          />
          <div className={styles.myProfile}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileView;
