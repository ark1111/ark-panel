import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//need responsive setting
export const BoxItem = styled.div<{ $isActive: boolean }>`
  padding: 15px 0px;
  padding: ${(props) => (props.$isActive ? "15px 20px" : "15px 0px")};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.secondary : "transparent"};
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: center;
`;

export const DateText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const DayText = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceTextLight};
`;
