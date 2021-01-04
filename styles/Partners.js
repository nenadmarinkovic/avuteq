import styled from "styled-components";

export const Wrap = styled.div`
  background: #17262e;
  height: 300px;
  margin-top: 120px;

  @media (max-width: 960px) {
    height: 200px;
  }

  @media (max-width: 780px) {
    height: 350px;
    margin-top: 0;
  }
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const FlexItem = styled.div`
  color: white;
  font-family: "Sofia Pro", sans-serif;
  padding-top: 50px;
  font-size: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    font-size: 42px;
  }
`;

export const CountText = styled.div`
  color: white;
  font-size: 28px;

  @media (max-width: 960px) {
    font-size: 21px;
    text-align: center;
  }
`;

export const CountWrap = styled.div`
  display: flex;
  align-items: center;
`;
