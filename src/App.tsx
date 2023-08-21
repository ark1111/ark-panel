import { useState } from "react";
import { Container, Page } from "./app.styled";
import Header from "./components/header";
import Nav from "./components/nav";
import { light, dark } from "./theme";
import { ThemeProvider } from "styled-components";

const themeList = [light, dark];
function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  const changeTheme = () => {
    setThemeIndex((index) => Number(!index));
  };
  return (
    <ThemeProvider theme={themeList[themeIndex]}>
      <Container>
        <Nav></Nav>
        <Page>
          <Header changeTheme={changeTheme}></Header>
        </Page>
      </Container>
    </ThemeProvider>
  );
}

export default App;
