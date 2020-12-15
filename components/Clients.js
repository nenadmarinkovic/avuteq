import React from "react";
import { Wrap } from "../styles/Clients";
import Slider from "./Slider";
import Companies from "./Companies";
import { Title } from "../styles/About";

function Clients() {
  return (
    <>
      <Wrap>
        <div className="container-slider">
          <Title>Client Testimonials</Title>
          <Slider />
        </div>
      </Wrap>
      <Companies />
    </>
  );
}

export default Clients;
