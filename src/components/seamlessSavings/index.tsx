import { AppStore, GooglePlay, seamlessSavingsImg } from "assets";
import styles from "./styles.module.scss";

const SeamlessSavings = () => {
  return (
    <>
      <section className={`container ${styles.bg}`}>
        <div className={styles.txtSec} >
          <h3 className={styles.ttl}>Seamless savings today, get the Zitra Mobile App</h3>
          <p  className={styles.txt}>
            Earn very attractive interest on your savings, make affordable
            transfers enjoy cashless payment options all in one account.
          </p>
          <div  className={styles.btnSec1}>
            <button>Open account</button>
            <button>Compare savings</button>
          </div>
          <div className={styles.btnSec2}>
            <a>
              <GooglePlay />
            </a>
            <a>
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
