import React from "react";
import {
  Wrap,
  FlexItem,
  FlexItems,
  CountText,
  CountWrap,
  Companies
} from "../styles/Partners";
import Count from "../components/Count";

function Partners() {
  return (
      <>
    <Wrap>
      <div className="container">
        <FlexItems>
          <FlexItem>
            <CountWrap>
              <Count end={200} duration={5} /> +
            </CountWrap>

            <CountText>Senior and leadership hires</CountText>
          </FlexItem>

          <FlexItem>
            <CountWrap>
              <Count end={17} duration={5} /> +
            </CountWrap>

            <CountText>Senior and leadership hires</CountText>
          </FlexItem>
        </FlexItems>
      </div>
    </Wrap>

<Companies>


</Companies>


    </>
  );
}

export default Partners;
