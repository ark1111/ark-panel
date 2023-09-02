import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const TabButton = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;

export const TabButtonItem = styled.div<{ $isActive: boolean }>`
  padding: 0 10px;
  font-size: 14px;
  color: ${(props) =>
    props.$isActive
      ? props.theme.colors.secondary
      : props.theme.colors.surfaceText};
  cursor: pointer;
`;

export const TabButtonDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.border};
`;
