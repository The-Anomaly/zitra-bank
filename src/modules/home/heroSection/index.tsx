import { AppStore, GooglePlay, heroMockup } from "assets";
import styles from "./styles.module.scss";

const HeroSection = () => {
  const iosURL = "https://apps.apple.com/ng/app/zitra-ease/id6478912712";
  const googleURL =
    "https://play.google.com/store/apps/details?id=com.zitrainvestments.app";
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.hero}`}>
          <h1 className={styles.ttl}>
            Unlocking possibilities for a better tomorrow
          </h1>
          <p className={styles.txt}>
            Earn very attractive interest on your savings, make affordable
            transfers, enjoy cashless payment options all in one account - Zitra
            is all you need.
          </p>
          <div className={styles.btns}>
            <a href={googleURL} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
            <a href={iosURL} target="_blank" rel="noreferrer">
              <AppStore />
            </a>
          </div>
          <img className={styles.img} src={heroMockup} />
        </div>
      </section>
    </>
  );
};

export { HeroSection };
