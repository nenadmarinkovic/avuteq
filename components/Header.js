import React from "react";
import Image from "next/image"
import {Wrap, HeaderContainer, Logo, HeaderItems, HeaderItem} from "../styles/Header"

function Header() {
  return (
    
    <Wrap>
      <div className="container">
      <HeaderContainer>
      <Logo>
        <Image src="/logo.png" width={148} height={38} ></Image>
      </Logo>
      <HeaderItems>
        <HeaderItem>About us</HeaderItem>
        <HeaderItem>How We Work</HeaderItem>
        <HeaderItem>Partners</HeaderItem>
        <HeaderItem>Get In Touch</HeaderItem>
      </HeaderItems>
      </HeaderContainer>
      </div>
    </Wrap>
  );
}

export default Header;
