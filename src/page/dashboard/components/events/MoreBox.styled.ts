import { styled } from "styled-components";

export const Box = styled.div<{ $isRtl: boolean }>`
  width: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.surface};
  position: absolute;
  top: 10px;
  right: ${(props) => (props.$isRtl ? "initial" : "10px")};
  left: ${(props) => (props.$isRtl ? "10px" : "initial")};
  z-index: 10;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
