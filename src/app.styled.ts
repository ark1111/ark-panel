import { styled } from "styled-components";

export const Container = styled.div<{ $direction: string }>`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  direction: ${(props) => props.$direction};
  column-gap: 20px;
`;

export const Page = styled.div`
  width: calc(100% - 400px);
  height: 100%;
`;
