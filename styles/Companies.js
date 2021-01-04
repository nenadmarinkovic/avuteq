import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 60px;
`;

export const Flex = styled.div`
  text-align: center;

  @media (max-width: 960px) {
    margin-left: 10px;
    margin-right: 10px;
   }

   @media (max-width: 520px) {
    margin-left: 0;
    margin-right: 0;
   }
`;

export const FlexItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
