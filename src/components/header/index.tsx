import { useState } from "react";
import {
  Box,
  ButtonsContainer,
  Language,
  LanguageItem,
  LanguageItems,
  LanguageText,
  Notification,
  SearchBoxContainer,
  ThemeMode,
  ThemeModeBox,
  ThemeModeBoxItem,
} from "./index.styled";
import SearchBox from "../search";
import ArrowDown1 from "../../assets/ArrowDown1";
import Notification1 from "../../assets/Notification1";
import Sun1 from "../../assets/Sun1";
import Moon1 from "../../assets/Moon1";
import { languages } from "../../locals/languages";

type Props = {
  changeTheme: Function;
  themeIndex: number;
};

const Header = ({ changeTheme, themeIndex }: Props) => {
  const [languageIsActive, setLanguageIsActive] = useState(false);

  const activeLanguageHandler = () => {
    setLanguageIsActive((state) => !state);
  };
  return (
    <Box>
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
      <ButtonsContainer>
        <Language onClick={activeLanguageHandler}>
          <LanguageText>En</LanguageText>
          <ArrowDown1 width="12px" color="#111" />
          {languageIsActive && (
            <LanguageItems>
              {languages.map((item, index) => (
                <LanguageItem key={index}>{item}</LanguageItem>
              ))}
            </LanguageItems>
          )}
        </Language>
        <ThemeMode onClick={() => changeTheme()}>
          <ThemeModeBox $modeIndex={themeIndex}>
            <ThemeModeBoxItem>
              <Sun1 />
            </ThemeModeBoxItem>
            <ThemeModeBoxItem>
              <Moon1 />
            </ThemeModeBoxItem>
          </ThemeModeBox>
        </ThemeMode>
        <Notification>
          <Notification1 />
        </Notification>
      </ButtonsContainer>
    </Box>
  );
};

export default Header;
