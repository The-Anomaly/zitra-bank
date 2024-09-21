import { Partners, SeamlessSavings } from "components";
import { HeroSection } from "./heroSection";
import { Team } from "./team";
import { MissionVision } from "./missionVision";

const AboutUI = () => {
  return (
    <>
      <HeroSection />
      <MissionVision />
      <Partners />
      <Team />
      <SeamlessSavings />
    </>
  );
};

export { AboutUI };
