import React from "react";
import {
  Box,
  ButtonsContainer,
  Language,
  LanguageText,
  Notification,
  SearchBoxContainer,
  ThemeMode,
} from "./index.styled";
import SearchBox from "../search";
import ArrowDown1 from "../../assets/ArrowDown1";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box>
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
      <ButtonsContainer>
        <Language>
          <LanguageText>En</LanguageText>
          <ArrowDown1 width="12px" color="#111" />
        </Language>
        <ThemeMode>T</ThemeMode>
        <Notification>N</Notification>
      </ButtonsContainer>
    </Box>
  );
};

export default Header;
