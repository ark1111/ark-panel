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
import { useTheme } from "styled-components";
import i18n from "../../locals/i18n";
import NotificationBox from "../notification";

type Props = {
  changeTheme: Function;
  themeIndex: number;
  language: string;
  setLanguage: Function;
};

const Header = ({ changeTheme, themeIndex, language, setLanguage }: Props) => {
  const theme = useTheme();

  const [languageIsActive, setLanguageIsActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const activeLanguageHandler = () => {
    setLanguageIsActive((state) => !state);
  };

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value.toLowerCase());
    setLanguage(value);
    localStorage.setItem("language", value);
  };

  const showNotificationHandler = () => {
    setShowNotification(true);
  };

  const hideNotificationHandler = () => {
    setShowNotification(false);
  };
  return (
    <Box>
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
      <ButtonsContainer>
        <Language onClick={activeLanguageHandler}>
          <LanguageText>{language}</LanguageText>
          <ArrowDown1 width="12px" color={theme.colors.surfaceText} />
          {languageIsActive && (
            <LanguageItems>
              {languages.map((item, index) => (
                <LanguageItem key={index} onClick={() => changeLanguage(item)}>
                  {item}
                </LanguageItem>
              ))}
            </LanguageItems>
          )}
        </Language>
        <ThemeMode onClick={() => changeTheme()}>
          <ThemeModeBox $modeIndex={themeIndex} $isRtl={language === "Fa"}>
            <ThemeModeBoxItem>
              <Sun1 />
            </ThemeModeBoxItem>
            <ThemeModeBoxItem>
              <Moon1 />
            </ThemeModeBoxItem>
          </ThemeModeBox>
        </ThemeMode>
        <Notification onClick={showNotificationHandler}>
          <Notification1 />
        </Notification>
      </ButtonsContainer>
      {showNotification && <NotificationBox hideNotificationHandler={hideNotificationHandler} />}
    </Box>
  );
};

export default Header;
