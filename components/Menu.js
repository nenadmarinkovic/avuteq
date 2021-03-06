import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks";
import ScrollIntoView from "react-scroll-into-view";
import { HeaderItem } from "../styles/Header";
import useScrollPosition from "@react-hook/window-scroll";

const StyledMenu = styled.div`
  background: white;
  border-left: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  height: 300px;
  text-align: left;
  padding: 80px 20px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;
const HeaderItems = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 180px;
`;

const MenuComponent = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
     <HeaderItems>
            <ScrollIntoView selector="#about" smooth={true}>
              <HeaderItem>About us</HeaderItem>
            </ScrollIntoView>

            <ScrollIntoView selector="#projects" smooth={true}>
              <HeaderItem>Our projects</HeaderItem>
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
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 20px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 2px;
    background: ${({ open }) => (open ? "#0D0C1D" : "#0D0C1D")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

function Menu() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const scrollY = useScrollPosition(60 /*frames per second*/);
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (scrollY > 0) {
      setOpen(false);
    }
  });

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuComponent open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Menu;
