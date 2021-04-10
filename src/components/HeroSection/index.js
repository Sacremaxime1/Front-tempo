import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src="video/trailer.mp4" type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tempo V</HeroH1>
        <HeroP>
          Site d'entraide communautaire de joueurs de Dofus. Pour profiter à
          fond de la nouvelle édition de Temporis.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/inscription"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Rejoins-nous {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
