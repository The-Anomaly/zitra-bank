import { debitCard } from "assets";
import styles from "./styles.module.scss";

const DebitCard = () => {
  return (
    <>
      <section className={styles.bg}>
        <div className={`container ${styles.section}`}>
          <h4 className={styles.ttl} >The Zitra-Bank Debit Card</h4>
          <p className={styles.txt}>
            Pay online or in-store easily and track every kobo; Our security
            measures protect your money, giving you peace of mind while spending
            & budgeting.
          </p>
          <div className={styles.cardSec} >
            <img src={debitCard} />
          </div>
        </div>
      </section>
    </>
  );
};

export { DebitCard };
