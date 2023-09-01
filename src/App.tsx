import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container, Content, Page } from "./app.styled";
import Header from "./components/header";
import Nav from "./components/nav";
import { light, dark } from "./theme";
import { ThemeProvider } from "styled-components";
import i18n from "./locals/i18n";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./router/RouterConfig";

const themeList = [light, dark];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [language, setLanguage] = useState("En");
  const [scrollIsActive, setScrollIsActive] = useState(false);
  const contentRef = useRef<any>();

  //language config
  useEffect(() => {
    let lang = localStorage.getItem("language");
    if (lang) {
      i18n.changeLanguage(lang.toLowerCase());
      setLanguage(lang);
    }
  });

  //content scrollbar config
  useEffect(() => {
    let contentScrollHeight = contentRef.current.scrollHeight;
    let contentClientHeight = contentRef.current.clientHeight;
    if (contentScrollHeight > contentClientHeight) {
      setScrollIsActive(true);
    }
  }, []);

  //user default theme
  useLayoutEffect(() => {
    let index = localStorage.getItem("themeIndex");
    if (index) {
      setThemeIndex(Number(index));
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("themeIndex", themeIndex === 0 ? "1" : "0");
    setThemeIndex((index) => Number(!index));
  };
  return (
    <ThemeProvider theme={themeList[themeIndex]}>
      <BrowserRouter>
        <Container
          $direction={language === "Fa" ? "rtl" : "ltr"}
          $language={language}
        >
          <Nav></Nav>
          <Page>
            <Header
              changeTheme={changeTheme}
              themeIndex={themeIndex}
              language={language}
              setLanguage={setLanguage}
            ></Header>
            <Content
              ref={contentRef}
              $scrollIsActive={scrollIsActive}
              $isRtl={language === "Fa" ? true : false}
            >
              <RouterConfig />
            </Content>
          </Page>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
