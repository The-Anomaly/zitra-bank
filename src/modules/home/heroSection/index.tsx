import { AppStore, GooglePlay, heroMockup } from "assets";
import styles from "./styles.module.scss";

const HeroSection = () => {
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
            <a>
              <GooglePlay />
            </a>
            <a>
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
