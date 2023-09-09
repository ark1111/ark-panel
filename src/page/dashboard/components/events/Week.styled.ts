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
  padding: ${(props) => (props.$isActive ? "15px 10px" : "15px 0px")};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "transparent"};
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: center;
  @media (min-width: 1500px) {
    padding: ${(props) => (props.$isActive ? "15px 20px" : "15px 0px")};;
  }
`;

export const DateText = styled.div<{ $isActive: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.primaryText : props.theme.colors.surfaceText};
  @media (min-width: 1500px) {
    font-size: 20px;
  }
`;

export const DayText = styled.div<{ $isActive: boolean }>`
  font-size: 14px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.primaryTextLight : props.theme.colors.surfaceTextLight};
`;
