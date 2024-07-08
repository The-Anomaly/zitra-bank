import * as React from "react";
import { SeamlessSavings } from "components";
import { Questions } from "./questions";
import { HeroSection } from "./heroSection";

const FAQUI = () => {
  return (
    <>
      <HeroSection />
      <Questions />
      <SeamlessSavings />
    </>
  );
};

export { FAQUI };
