import styled from "styled-components";

export const FormText = styled.div`
  padding: 80px 0 20px;
  margin-top: 10px;
  font-size: 21px;
  text-align: center;
  line-height: 1.5;
  color: white;
`;

export const FlexListText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-top: 20px;
`;

export const FlexList = styled.ul`
  padding: 0;
  display: flex;
  font-size: 18px;
`;

export const FlexDiv = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const FlexItemMessage = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainForm = styled.main`
  margin-top: 30px;
  font-size: 21px;
  line-height: 1.65;
  color: white;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-row-gap: 1em;
`;
export const FormLabel = styled.label`
  font-family: "Sofia Pro", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  width: 40%;
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const FormInput = styled.input`
  margin: 0;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  width: 70%;
  color: white;
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  border: none;
  border-bottom: 1px solid white;

  :focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  margin: 0;
  color: white;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  border-radius: 8px;
  width: 70%;
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  transition: all 0.2s ease;
  border: 1px solid white;
  height: 140px;
  border-bottom: 1px solid white;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 0.65em 1em;
  cursor: pointer;
  line-height: 1;
  transition: all 0.2s ease;
  background: #ea5730;
  color: white;
  font-family: "Rubik", sans-serif;
  border: 1px solid #ea5730;
  border-radius: 8px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background: white;
    color: #ea5730;
    border: 1px solid white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const Error = styled.div`
  background: #ee0000;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
`;

export const Copyright = styled.span`
  margin-top: 75px;
  display: block;
  text-align: center;
  padding: 20px 0;
`;
