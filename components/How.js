import React from "react";
import {
  Wrap,
  FlexItem,
  FlexItems,
  FlexTop,
  Icon,
  Text,
  FlexText,
} from "../styles/How";
import { Title } from "../styles/About";

function How() {
  return (
    <Wrap>
      <Title>How We Work</Title>
      <div className="container">
        <FlexItems>
          <FlexItem>
            <FlexTop>
              <Text>Focus</Text>
              <Icon>
                <svg
                  fill="#ea5730"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="36px"
                  height="36px"
                >
                  <path d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z" />
                </svg>
              </Icon>
            </FlexTop>
            <FlexText>
              We work only within the Software technology domain, making it our
              priority to have a strong understanding of the sector we work
              within.
            </FlexText>
          </FlexItem>
          <FlexItem>
            <FlexTop>
              <Text>Scale</Text>
              <Icon>
                <svg
                  fill="#ea5730"
                  id="Capa_1"
                  enableBackground="new 0 0 512.004 512.004"
                  height="28px"
                  viewBox="0 0 512.004 512.004"
                  width="34px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m497 512.004h-482c-8.284 0-15-6.716-15-15s6.716-15 15-15h482c8.284 0 15 6.716 15 15s-6.716 15-15 15z" />
                  <path d="m106 512.004h-60c-8.284 0-15-6.716-15-15v-110c0-13.785 11.215-25 25-25h40c13.785 0 25 11.215 25 25v110c0 8.284-6.716 15-15 15zm-45-30h30v-90h-30zm35-90h.01z" />
                  <path d="m226 512.004h-60c-8.284 0-15-6.716-15-15v-146c0-13.785 11.215-25 25-25h40c13.785 0 25 11.215 25 25v146c0 8.284-6.716 15-15 15zm-45-30h30v-126h-30zm35-126h.01z" />
                  <path d="m346 512.004h-60c-8.284 0-15-6.716-15-15v-201c0-13.785 11.215-25 25-25h40c13.785 0 25 11.215 25 25v201c0 8.284-6.716 15-15 15zm-45-30h30v-181h-30zm35-181h.01z" />
                  <path d="m466 512.004h-60c-8.284 0-15-6.716-15-15v-301c0-13.785 11.215-25 25-25h40c13.785 0 25 11.215 25 25v301c0 8.284-6.716 15-15 15zm-45-30h30v-281h-30zm35-281h.01z" />
                  <path d="m15 322.308c-8.284 0-15-6.716-15-15s6.716-15 15-15c88.206 0 184.244-32.12 270.421-90.443 79.281-53.655 142.455-123.995 173.323-192.984 3.384-7.562 12.257-10.95 19.818-7.565 7.562 3.383 10.949 12.256 7.565 19.818-33.086 73.947-100.112 148.877-183.891 205.576-91.089 61.647-193.099 95.598-287.236 95.598z" />
                  <path d="m496.991 121.678c-6.624 0-12.684-4.42-14.479-11.122l-20.681-77.181-77.181 20.681c-8.005 2.146-16.227-2.604-18.371-10.606s2.604-16.227 10.606-18.371l91.67-24.563c8.005-2.145 16.227 2.605 18.371 10.606l24.563 91.67c2.144 8.002-2.604 16.227-10.606 18.371-1.301.348-2.607.515-3.892.515z" />
                </svg>
              </Icon>
            </FlexTop>
            <FlexText>
              Avuteq has undertaken hundreds of projects from individual hires to
              50+ project hiring solutions From 1 to 10 specialists we can embed
              to your team to the scale that you require.
            </FlexText>
          </FlexItem>
          <FlexItem>
            <FlexTop>
              <Text>Global</Text>
              <Icon>
                <svg
                  fill="#ea5730"
                  version="1.1"
                  id="Capa_1"
                  width="32"
                  height="32"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490 490"
                >
                  <g>
                    <path
                      d="M143.984,315.671c24.551,14.172,52.441,21.666,80.656,21.666c0,0,0,0,0.005,0c28.44,0,56.534-7.515,81.243-21.728
		c24.724-14.223,45.278-34.715,59.444-59.25c14.161-24.535,21.631-52.573,21.59-81.1c-0.087-57.749-31.086-111.486-80.901-140.247
		c-49.273-28.431-112.585-28.25-161.78,0c-0.041,0.022-0.084,0.038-0.124,0.061c-24.713,14.224-45.271,34.704-59.444,59.25
		c-14.162,24.546-21.631,52.583-21.59,81.1C63.17,233.172,94.169,286.908,143.984,315.671z M154.439,297.558
		c-16.375-9.455-23.255-36.955-17.056-73.212l88.976,51.367c-19.501,16.331-39.213,25.847-55.946,25.847
		C164.405,301.56,159.029,300.212,154.439,297.558z M276.184,216.965c-10.348,16.547-21.899,31.364-33.88,43.803l-49.49-28.571
		l-50.522-29.169c4.617-16.102,11.552-33.385,21.056-51.21L276.184,216.965z M173.817,133.714
		c10.348-16.547,21.901-31.363,33.883-43.802l36.566,21.11l63.355,36.577c-4.787,16.786-11.871,34.15-20.97,51.259L173.817,133.714z
		 M224.646,316.426h-0.005c-7.111,0-14.196-0.565-21.196-1.642c13.893-6.102,28.149-15.663,41.988-28.06l33.042,19.075
		C261.424,312.792,243.119,316.426,224.646,316.426z M300.561,294.401l-39.672-22.903c11.881-12.797,23.203-27.629,33.426-44.064
		l47.341,27.333C330.864,270.571,316.861,284.089,300.561,294.401z M335.009,87.098c15.824,19.828,26.22,43.784,29.706,69.313
		l-33.045-19.078c1.966-9.389,3.243-18.563,3.772-27.39C335.929,101.828,335.774,94.197,335.009,87.098z M365.894,181.243
		c-0.781,19.266-5.488,38.154-13.782,55.409l-47.342-27.333c9.035-16.907,16.26-34.129,21.451-50.982L365.894,181.243z
		 M295.566,53.124c13.723,7.923,20.65,28.169,19.007,55.563c-0.342,5.703-1.034,11.579-2.06,17.585l-88.868-51.305
		c19.5-16.33,39.212-25.846,55.943-25.846C285.601,49.122,290.976,50.47,295.566,53.124z M246.21,36.054
		c-13.782,6.108-27.914,15.61-41.637,27.903l-33.041-19.075C195.054,35.238,221.096,32.327,246.21,36.054z M149.445,56.28
		l39.671,22.903c-11.882,12.797-23.205,27.628-33.43,44.063l-47.329-27.325C119.149,80.099,133.152,66.582,149.445,56.28z
		 M97.899,114.032l47.333,27.328c-9.205,17.211-16.37,34.402-21.473,50.97l-39.647-22.89
		C84.893,150.174,89.599,131.286,97.899,114.032z M118.315,213.337c-3.813,18.262-4.9,35.352-3.228,50.357
		c-15.874-19.85-26.303-43.846-29.795-69.421L118.315,213.337z"
                    />
                    <path
                      d="M326.233,0l-10.455,18.113c123.464,75.489,97.508,201.993,66.449,247.998c-30.69,45.459-106.565,132.646-247.998,66.447
		l-10.455,18.114c20.625,11.906,42.751,19.937,65.514,24.029v33.096c-32.622,2.43-99.887,11.017-99.887,40.463
		c0,32.949,85.236,41.74,135.603,41.74c50.366,0,135.607-8.791,135.607-41.74c0-29.446-67.265-38.033-99.887-40.463V374.61
		c5.577-1.009,85.622-9.983,139.615-98.044C426.35,234.141,468.303,89.096,326.233,0z M339.353,448.271
		c-5.948,7.862-47.034,20.819-114.35,20.819c-67.316,0-108.397-12.956-114.345-20.819c4.774-6.074,34.006-17.367,89.621-20.216
		c5.56-0.285,9.919-4.881,9.919-10.445V377.34c4.814,0.349,9.644,0.542,14.484,0.542c5.037,0,10.084-0.212,15.132-0.592v40.32
		c0,5.565,4.36,10.16,9.919,10.445C305.347,430.904,334.579,442.196,339.353,448.271z"
                    />
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
                </svg>
              </Icon>
            </FlexTop>
            <FlexText>
              We make it our mission to understand the moving parts of the
              global technology space and ascertain and source the strongest
              profiles from any corner of the globe.
            </FlexText>
          </FlexItem>
        </FlexItems>
      </div>
    </Wrap>
  );
}

export default How;
