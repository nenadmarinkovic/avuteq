import styled from "styled-components";

export const Wrap = styled.div`
  padding-bottom: 20px;

  @media (max-width: 960px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 520px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Comment = styled.div`
  font-family: "Rubik";
  font-size: 19px;
  font-weight: 300;
  line-height: 1.8;
  text-align: center;
`;

export const SliderText = styled.div`
  margin-top: 10px;
`;

export const DownText = styled.div`
  font-family: "Rubik";
  font-size: 19px;
  font-weight: 300;
  margin-top: 30px;
`;

export const SVGLeft = styled.svg`
  transition: 0.3s;
  margin-right: 30px;
  :hover {
    cursor: pointer;
    fill: #ea5730;
  }

  @media (max-width: 520px) {
    margin-right: 0;
  }
`;

export const SVGRight = styled.svg`
  transition: 0.3s;
  margin-left: 30px;
  :hover {
    cursor: pointer;
    fill: #ea5730;
  }

  @media (max-width: 520px) {
   margin-left: 0;
  }
`;
