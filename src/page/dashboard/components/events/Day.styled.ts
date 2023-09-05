import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;
