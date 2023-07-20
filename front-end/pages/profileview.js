import React from 'react'
import withAuth from '../utils/withAuth'

import styles from "./index.module.css";
const MyProfileView = () => {
  return (
    <div className={styles.myProfileView}>
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
      <div className={styles.myProfileViewChild} />
      <div className={styles.ellipseParent}>
        <img className={styles.frameItem} alt="" src="/ellipse-3@2x.png" />
        <div className={styles.frameWrapper}>
          <div className={styles.marySokohParent}>
            <div className={styles.explore}>Mary Sokoh</div>
            <div className={styles.memberSince2023}>Member since 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.worksFromOghenetega}>
        Works from OGHENETEGA BRIGHT
      </div>
      <div className={styles.savesParent}>
        <div className={styles.saves}>Saves</div>
        <div className={styles.follows}>Follows</div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameInner} alt="" src="/rectangle-52@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-75@2x.png"
        />
        <div className={styles.frameGroup}>
          <div className={styles.modernTheFutureParent}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline1.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd1.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <img className={styles.frameChild1} alt="" src="/rectangle-64@2x.png" />
        <div className={styles.frameContainer}>
          <div className={styles.modernTheFutureContainer}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline2.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd2.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.frameChild1} alt="" src="/rectangle-76@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent1}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline3.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd3.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-74@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.modernTheFutureContainer}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline4.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd4.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-51@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline5.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd5.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <img className={styles.frameChild5} alt="" src="/rectangle-73@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent4}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline6.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd6.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <img className={styles.frameChild6} alt="" src="/rectangle-69@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent5}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline7.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd7.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent5}>
        <img className={styles.frameChild7} alt="" src="/rectangle-50@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureContainer}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline8.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd8.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent6}>
        <img className={styles.frameChild7} alt="" src="/rectangle-65@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureContainer}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline9.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd9.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent7}>
        <img className={styles.frameChild7} alt="" src="/rectangle-71@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent8}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline10.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd10.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent8}>
        <img className={styles.frameChild7} alt="" src="/rectangle-66@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureContainer}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline11.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd11.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent9}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-68@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.modernTheFutureParent}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline12.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd12.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent10}>
        <img className={styles.frameChild7} alt="" src="/rectangle-72@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent11}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline13.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd13.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.frameParent12}>
        <div className={styles.log0Parent}>
          <b className={styles.log0}>Log0</b>
          <div className={styles.searchForAfrikanVibesParent}>
            <div className={styles.explore}>Search for afrikan vibes</div>
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
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.rectangleParent11}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-67@2x.png"
        />
        <div className={styles.frameParent13}>
          <div className={styles.modernTheFutureParent}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline14.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd14.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.rectangleParent12}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-70@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.modernTheFutureParent13}>
            <div className={styles.explore}>Modern: The future</div>
            <div className={styles.mdicardsHeartOutlineParent}>
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/mdicardsheartoutline15.svg"
              />
              <img
                className={styles.mdicardsHeartOutlineIcon}
                alt=""
                src="/materialsymbolsadd15.svg"
              />
            </div>
          </div>
          <b className={styles.n10000}>N10,000</b>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.materialSymbolskeyboardArroParent}>
          <img
            className={styles.mdicardsHeartOutlineIcon}
            alt=""
            src="/materialsymbolskeyboardarrowuprounded.svg"
          />
          <div className={styles.explore}>Prev</div>
        </div>
        <div className={styles.materialSymbolskeyboardArroGroup}>
          <img
            className={styles.mdicardsHeartOutlineIcon}
            alt=""
            src="/materialsymbolskeyboardarrowuprounded1.svg"
          />
          <div className={styles.next}>Next</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.log0}>1</div>
          <div className={styles.explore}>2</div>
          <div className={styles.explore}>3</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileView;
