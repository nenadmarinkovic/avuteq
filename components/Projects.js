import React from "react";
import {
  Wrap,
  FlexTitle,
  Title,
  FlexBig,
  FlexMain,
  FlexItem,
  FlexText,
} from "../styles/Projects";
// import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <Wrap>
      <div className="container">
        <Title id="projects">Our projects</Title>
        <FlexItem>
          <FlexText>
        
            <FlexMain>
              <FlexBig>Gereto</FlexBig>
              <p>
                An analytics platform for on-boarding and off-boarding feedback
                management.
              </p>
              <FlexTitle href="https://app.gereto.com" target="_blank" >Go to link</FlexTitle>
            </FlexMain>
       
          </FlexText>
          <FlexText>
        
            <FlexMain>
              <FlexBig>Diversify</FlexBig>
              <p>
                A platform that connects tech companies with high-performing
                female leaders for advisory and board-level executive
                engagements.
              </p>
              <FlexTitle href="https://diversify.team" target="_blank" >Go to link</FlexTitle>
            </FlexMain>
          
          </FlexText>
        </FlexItem>
      </div>
    </Wrap>
  );
}

export default Projects;
