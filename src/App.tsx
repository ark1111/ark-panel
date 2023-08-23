import { useEffect, useState } from "react";
import { Container, Page } from "./app.styled";
import Header from "./components/header";
import Nav from "./components/nav";
import { light, dark } from "./theme";
import { ThemeProvider } from "styled-components";
import i18n from "./locals/i18n";

const themeList = [light, dark];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [language, setLanguage] = useState("En");

  useEffect(() => {
    let lang = localStorage.getItem("language");
    if (lang) {
      i18n.changeLanguage(lang.toLowerCase());
      setLanguage(lang);
    }
  });

  const changeTheme = () => {
    setThemeIndex((index) => Number(!index));
  };
  return (
    <ThemeProvider theme={themeList[themeIndex]}>
      <Container $direction={language === "Fa" ? "rtl" : "ltr"}>
        <Nav></Nav>
        <Page>
          <Header
            changeTheme={changeTheme}
            themeIndex={themeIndex}
            language={language}
            setLanguage={setLanguage}
          ></Header>
        </Page>
      </Container>
    </ThemeProvider>
  );
}

export default App;
