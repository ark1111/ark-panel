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

export const Content = styled.div<{
  $scrollIsActive: boolean;
  $isRtl: boolean;
}>`
  width: 100%;
  max-height: calc(100% - 140px);
  margin: 20px 0px;
  overflow-y: auto;
  padding-right: ${(props) =>
    !props.$isRtl && props.$scrollIsActive ? "20px" : "0px"};
  padding-left: ${(props) =>
    props.$isRtl && props.$scrollIsActive ? "20px" : "0px"};
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
