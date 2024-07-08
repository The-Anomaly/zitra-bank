import { aboutHeroImg } from "assets";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero} >
        <div className={styles.txtSec}>
          <h1 className={styles.ttl} >About Us</h1>
          <p  className={styles.txt} >
            Lorem ipsum dolor sit amet consectetur. Amet mauris vitae malesuada
            ut. Mauris dolor ac sit orci orci morbi. Ut ipsum et est
            sollicitudin risus eget eros pretium. Mauris semper id bibendum
            aliquet eu eu posuere orci sagittis. At nisl et elit egestas velit
            ipsum. Cursus vitae a vitae ut orci sit ut ultricies. Pretium velit
            massa enim arcu vestibulum ornare aliquet. Elementum dignissim diam
            egestas aliquam ultricies varius. Congue feugiat gravida sit cursus
            dictumst.
          </p>
        </div>
        <img className={styles.img} src={aboutHeroImg} />
      </section>
    </>
  );
};

export { HeroSection };
