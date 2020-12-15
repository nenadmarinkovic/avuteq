import React from "react";
import { Wrap, Created } from "../styles/Copyright";

function Copyright() {
  return (
    <Wrap>
      © {new Date().getFullYear()} Avuteq, Global Technology Stuffing Solutions{" "}
      <br />
      <Created>
        Design and development:{" "}
        <a
          className="created"
          rel="noreferrer"
          target="_blank"
          href="https://nenadmarinkovic.com"
        >
          nenadmarinkovic.com
        </a>
      </Created>
    </Wrap>
  );
}

export default Copyright;
