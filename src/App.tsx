import { useEffect, useRef, useState } from "react";
import { Container, Content, Page } from "./app.styled";
import Header from "./components/header";
import Nav from "./components/nav";
import { light, dark } from "./theme";
import { ThemeProvider } from "styled-components";
import i18n from "./locals/i18n";

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
          <Content
            ref={contentRef}
            $scrollIsActive={scrollIsActive}
            $isRtl={language === "Fa" ? true : false}
          >
            <div
              style={{ width: "100%", height: "130vh", background: "yellow" }}
            >
              h
            </div>
          </Content>
        </Page>
      </Container>
    </ThemeProvider>
  );
}

export default App;
