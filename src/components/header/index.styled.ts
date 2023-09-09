import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBoxContainer = styled.div`
  width: 250px;
  height: 50px;
  @media (min-width: 1200px) {
    width: 400px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Notification = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeMode = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ThemeModeBox = styled.div<{ $modeIndex: number; $isRtl: boolean }>`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  transform: ${(props) =>
    props.$modeIndex === 0
      ? "translateX(0px)"
      : props.$isRtl
      ? "translateX(50px)"
      : "translateX(-50px)"};
`;

export const ThemeModeBoxItem = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Language = styled.div`
  height: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  cursor: pointer;
  position: relative;
`;

export const LanguageText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.surfaceText};
`;

export const LanguageItems = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const LanguageItem = styled.div`
  width: 100%;
  padding: 10px 5px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.surfaceText};
  cursor: pointer;
  text-align: center;
`;
