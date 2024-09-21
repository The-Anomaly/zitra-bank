import { AppStore, GooglePlay, seamlessSavingsImg } from "assets";
import styles from "./styles.module.scss";

const SeamlessSavings = () => {
  const iosURL = "https://apps.apple.com/ng/app/zitra-ease/id6478912712";
  const googleURL =
    "https://play.google.com/store/apps/details?id=com.zitrainvestments.app";
  return (
    <>
      <section className={`container ${styles.bg}`}>
        <div className={styles.txtSec}>
          <h3 className={styles.ttl}>
            Seamless savings today, get the Zitra Mobile App
          </h3>
          <p className={styles.txt}>
            Earn very attractive interest on your savings, make affordable
            transfers enjoy cashless payment options all in one account.
          </p>
          {/* <div  className={styles.btnSec1}>
            <button>Open account</button>
            <button>Compare savings</button>
          </div> */}
          <div className={styles.btnSec2}>
            <a href={googleURL} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
            <a href={iosURL} target="_blank" rel="noreferrer">
              <AppStore />
            </a>
          </div>
        </div>
        <img className={styles.img} src={seamlessSavingsImg} />
      </section>
    </>
  );
};

export { SeamlessSavings };
