import { keyframes, styled } from "styled-components";

const toggle = keyframes`
  from {
    transform: translateX(400px);
  }

  to {
    transform: translateX(0px);
  }
`;

const toggle_rtl = keyframes`
  from {
    transform: translateX(-400px);
  }

  to {
    transform: translateX(0px);
  }
`;

export const BackSurface = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
`;

export const Box = styled.div<{ $isRtl: boolean }>`
  width: 400px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.surface};
  position: fixed;
  right: ${(props) => (props.$isRtl ? "initial" : "0px")};
  left: ${(props) => (props.$isRtl ? "0px" : "initial")};
  top: 0;
  z-index: 30;
  box-shadow: 0px 0px 19px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: ${(props) => (props.$isRtl ? toggle_rtl : toggle)} 0.5s ease-in-out
    normal;
  transition: all 0.5s ease-in-out;
`;

// -webkit-box-shadow: 0px 0px 19px -4px rgba(0,0,0,0.67)
// -moz-box-shadow: 0px 0px 19px -4px rgba(0,0,0,0.67)

export const Header = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;

export const Title = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const List = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  overflow: auto;
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

export const ListItem = styled.div`
  width: 100%;
`;
