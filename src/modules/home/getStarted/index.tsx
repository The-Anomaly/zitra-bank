import { AppStore, getStartedImg, GooglePlay } from "assets";
import styles from "./styles.module.scss";

const GetStarted = () => {
  const iosURL = "https://apps.apple.com/ng/app/zitra-ease/id6478912712";
  const googleURL =
    "https://play.google.com/store/apps/details?id=com.zitrainvestments.app";
  return (
    <>
      <section className={`container ${styles.section}`}>
        <img className={styles.img} src={getStartedImg} />
        <div>
          <h5 className={styles.ttl}>Get Started in these 4 easy steps</h5>
          <div className={styles.steps}>
            <div className={styles.step}>
              <p className={styles.step__count}>01</p>
              <div>
                <p className={styles.step__ttl}>Download the App</p>
                <p className={styles.step__txt}>
                  Begin by downloading the Zitra app from the Google Play Store
                  or App Store
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.step__count}>02</p>
              <div>
                <p className={styles.step__ttl}>Register</p>
                <p className={styles.step__txt}>
                  Click ‘Register’ and enter your personal details to create an
                  account
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.step__count}>03</p>
              <div>
                <p className={styles.step__ttl}>Fund Wallet</p>
                <p className={styles.step__txt}>
                  Fund your wallet using a debit card from any bank or online
                  transfer
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.step__count}>04</p>
              <div>
                <p className={styles.step__ttl}>Enjoy best rates</p>
                <p className={styles.step__txt}>
                  Select the investment option you’d like and enter an amount to
                  invest
                </p>
              </div>
            </div>
          </div>

          <div className={styles.btns}>
            <a href={googleURL} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
            <a href={iosURL} target="_blank" rel="noreferrer">
              <AppStore />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export { GetStarted };
