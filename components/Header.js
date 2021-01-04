import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrap,
  HeaderContainer,
  Logo,
  HeaderItems,
  HeaderItem,
  MenuDiv,
} from "../styles/Header";
import ScrollIntoView from "react-scroll-into-view";
import Menu from "./Menu";

function Header() {
  return (
    <Wrap>
      <div className="container">
        <HeaderContainer>
          <Logo>
            <Link href="/">
              <a>
                <Image src="/logo.png" width={148} height={38} />
              </a>
            </Link>
          </Logo>
          <HeaderItems>
            <ScrollIntoView selector="#about" smooth={true}>
              <HeaderItem>About us</HeaderItem>
            </ScrollIntoView>

            <ScrollIntoView selector="#how" smooth={true}>
              <HeaderItem>How We Work</HeaderItem>
            </ScrollIntoView>

            <ScrollIntoView selector="#partners" smooth={true}>
              <HeaderItem>Partners</HeaderItem>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact" smooth={true}>
              <HeaderItem>Get In Touch</HeaderItem>
            </ScrollIntoView>
          </HeaderItems>
          <MenuDiv>
            <Menu />
          </MenuDiv>
        </HeaderContainer>
      </div>
    </Wrap>
  );
}

export default Header;
