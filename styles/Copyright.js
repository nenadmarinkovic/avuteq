import styled from "styled-components";

export const Wrap = styled.div`
  color: white;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 10px;
  text-align: center;

  @media (max-width: 1045px) {
    padding-top: 75px;
  }

  @media (max-width: 520px) {
    padding-top: 25px;
   }
`;

export const Created = styled.div`
  color: white;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

export const Website = styled.a`
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: #ea5730;
  }
`;
