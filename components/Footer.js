import React from "react";
import Form from "../components/Form";
import {
  Wrap,
  Text,
  FooterWrap,
  FlexItems,
  FlexItem,
  Social,
  Mail,
  Title,
  SVG
} from "../styles/Footer";
import Copyright from "../components/Copyright";

function Footer() {
  return (
    <Wrap id="contact">
      <div className="container">
        <FooterWrap>
          <FlexItems>
            <FlexItem>
                <Title>Avuteq, Global Technology Stuffing Solutions</Title>
              <Text>
                Not only do we not discriminate over age, race, gender, we
                actively celebrate and encourage diversity. We actively accept
                job applications from individuals from all corners of the globe
                and all walks of life.
              </Text>
              <Social>
                <a href="https://twitter.com/avuteq?lang=en" target="_blank" rel="noreferrer">
                  <SVG
                    style={{ marginTop: "5px" }}
                    height="30"
                    fill="white"
                    width="30"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </SVG>
                </a>
                <a href="https://www.linkedin.com/company/avuteq/" target="_blank" rel="noreferrer">
                  <SVG
                    id="Bold"
                    fill="white"
                    enableBackground="new 0 0 24 24"
                    height="30"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                    <path d="m.396 7.977h4.976v16.023h-4.976z" />
                    <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
                  </SVG>
                </a>
              </Social>
              <Mail>contact@avuteq.com</Mail>
            </FlexItem>
            <FlexItem>
              <Form />
            </FlexItem>
          </FlexItems>
        </FooterWrap>
      </div>
      <Copyright />
    </Wrap>
  );
}

export default Footer;
