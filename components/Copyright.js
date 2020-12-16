import React from "react";
import { Wrap, Created, Website } from "../styles/Copyright";

function Copyright() {
  return (
    <Wrap>
      © {new Date().getFullYear()} Avuteq, Global Technology Stuffing Solutions{" "}
      <br />
      <Created>
        Design and development:{" "}
        <Website
          className="created"
          rel="noreferrer"
          target="_blank"
          href="https://nenadmarinkovic.com"
        >
          nenadmarinkovic.com
        </Website>
      </Created>
    </Wrap>
  );
}

export default Copyright;
