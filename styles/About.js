import styled from "styled-components";

export const Wrap = styled.div`
  padding: 30px 0 120px;

  @media (max-width: 960px) {
    padding: 30px 0 0;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  padding-top: 40px;
  font-family: "Sofia Pro";
  font-weight: 600;

 
`;

export const FlexItem = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    margin-top: 30px;
  }
`;

export const FlexText = styled.div`
  width: 55%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const FlexIllustration = styled.div`

`;

export const FlexTitle = styled.div`
  color: #ea5730;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const FlexBig = styled.div`
  color: #17262e;
  font-family: "Sofia Pro", sans-serif;
  font-size: 28px;
  line-height: 1.5;
`;

export const FlexMain = styled.div`
  margin-top: 20px;
  font-family: "Rubik", sans-serif;
  color: #17262e;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 300;
`;

export const SVG = styled.svg`
  width: 400px;
  height: 400px;

  @media (max-width: 720px) {
    width: 400px;
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: 530px) {
    height: 300px;
    width: 300px;
    padding: 20px;
  }
`;
