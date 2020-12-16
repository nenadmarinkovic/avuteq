import styled from "styled-components";

export const Wrap = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

export const Logo = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  margin-left: 30px;
  font-size: 15px;
  font-family: "Sofia Pro";
  font-weight: 600;
  transition: 0.3s;

  :hover {
    color: #ea5730;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
