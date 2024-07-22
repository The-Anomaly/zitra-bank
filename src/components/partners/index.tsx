import {
  appzoneLogo,
  bidellusLogo,
  onepipeLogo,
  PagaLogo,
  primepayLogo,
  providusLogo,
  SuntrustLogo,
  youverifyLogo,
  remitaLogo,
  krediLogo,
  ifitnessLogo,
  filmhouseLogo,
  dinkuLogo,
  globusBankLogo,
  interswitchLogo,
  redSlateLogo,
} from "assets";
import styles from "./styles.module.css";

const Partners = () => {
  return (
    <section className={`container ${styles.proofContainer}`}>
      <h2 className={styles.ttl}>Our Partners</h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <PagaLogo className={styles.logo1} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={providusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <SuntrustLogo className={styles.logo3} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo4} src={appzoneLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo9} src={remitaLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo5} src={youverifyLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo6} src={primepayLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo7} src={onepipeLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo10} src={krediLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={bidellusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={ifitnessLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={filmhouseLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo3} src={dinkuLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={globusBankLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={interswitchLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={redSlateLogo} alt="" />
          </div>

          {/* Second */}
          <div className={styles.slide}>
            <PagaLogo className={styles.logo1} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={providusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <SuntrustLogo className={styles.logo3} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo4} src={appzoneLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo9} src={remitaLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo5} src={youverifyLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo6} src={primepayLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo7} src={onepipeLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo10} src={krediLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={bidellusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={ifitnessLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={filmhouseLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo3} src={dinkuLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={globusBankLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={interswitchLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={redSlateLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partners };
