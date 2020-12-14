import React from "react";
import {
  BannerContainer,
  BannerText,
  ButtonWrap,
  Button,
} from "../styles/Banner";

function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        Senior and Leadership level talent acquisition for the world's leading
        technology platforms
      </BannerText>
      <ButtonWrap>
        <Button>Learn More</Button>
      </ButtonWrap>
    </BannerContainer>
  );
}

export default Banner;
