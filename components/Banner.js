import React from "react";
import {
  BannerContainer,
  BannerText,
  ButtonWrap,
  Button,
} from "../styles/Banner";
import ScrollIntoView from "react-scroll-into-view";

function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        Senior and Leadership level talent acquisition for the world's leading
        technology platforms
      </BannerText>
      <ButtonWrap>
        <ScrollIntoView selector="#about" smooth={true}>
          <Button>Learn More</Button>
        </ScrollIntoView>
      </ButtonWrap>
    </BannerContainer>
  );
}

export default Banner;
