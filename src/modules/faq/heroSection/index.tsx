import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <>
      <section className={`${styles.bg}`}>
        <div className={`container ${styles.introSec}`}>
          <h1 className={styles.ttl1}>Frequently Asked Questions</h1>
          <p className={styles.txt1}>Everything you need to know about us</p>
        </div>
      </section>
    </>
  );
};

export { HeroSection };
