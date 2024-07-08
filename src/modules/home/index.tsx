import { DebitCard } from "./debitCard";
import { HeroSection } from "./heroSection";
import { Products } from "./products";
import { SeamlessSavings, Partners } from "components";
import styles from "./styles.module.scss";
import { GetStarted } from "./getStarted";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <SeamlessSavings />
      <DebitCard />
      <GetStarted />
      <Partners />
    </>
  );
};

export { HomeUI };
