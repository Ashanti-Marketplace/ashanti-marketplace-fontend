import { useCallback } from "react";
import styles from "./index.module.css";
const ResultSearchOption = () => {
  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Search Result Section(Art)" to the project
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Search Result section(artists)" to the project
  }, []);

  return (
    <div className={styles.resultSearchOption}>
      <div className={styles.artworksParent}>
        <div className={styles.artworks}>Artworks</div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.artistsParent}>
        <div className={styles.artworks}>Artists</div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameParent}>
        <div
          className={styles.seeMoreResultsParent}
          onClick={onFrameContainer2Click}
        >
          <div className={styles.artworks}>See more results</div>
          <img
            className={styles.materialSymbolsarrowBackIoIcon}
            alt=""
            src="/materialsymbolsarrowbackiosnewrounded.svg"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.rectangleParent}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-89@2x.png"
        />
        <div className={styles.africanWorksParent}>
          <div className={styles.artworks}>African works</div>
          <div className={styles.categories}>Categories</div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-891@2x.png"
        />
        <div className={styles.africanWorksParent}>
          <div className={styles.artworks}>African works</div>
          <div className={styles.categories}>Categories</div>
        </div>
      </div>
      <div className={styles.ellipseParent} onClick={onFrameContainer9Click}>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-9@2x.png" />
        <div className={styles.africanWorksParent}>
          <div className={styles.artworks}>Kayode David</div>
          <div className={styles.categories}>Artist</div>
        </div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-91@2x.png" />
        <div className={styles.africanWorksParent}>
          <div className={styles.artworks}>Kayode David</div>
          <div className={styles.categories}>Artist</div>
        </div>
      </div>
    </div>
  );
};

export default ResultSearchOption;
