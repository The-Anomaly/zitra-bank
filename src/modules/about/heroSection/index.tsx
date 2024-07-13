import { aboutHeroImg } from "assets";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.txtSec}>
          <h1 className={styles.ttl}>About Us</h1>
          <p className={styles.txt}>
            Zitra Microfinance Bank is a licensed and innovative financial
            institution committed to delivering a wide range of financial
            services. Our client-centric approach extends from individuals to
            micro-businesses, small and medium-sized enterprises (SMEs), and
            large corporations. We are dedicated to assisting our clients in
            achieving their diverse financial objectives. Our Mission: At Zitra
            Microfinance Bank, our mission is to empower individuals and
            businesses by providing them with the financial tools and support
            they need to thrive. We strive to be a trusted partner on our
            clients’ financial journeys, enabling them to achieve success and
            financial security
          </p>
        </div>
        <img className={styles.img} src={aboutHeroImg} />
      </section>
    </>
  );
};

export { HeroSection };
