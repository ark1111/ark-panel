import { Container, Page } from "./app.styled";
import Header from "./components/header";
import Nav from "./components/nav";

function App() {
  return (
    <Container>
      <Nav></Nav>
      <Page>
        <Header></Header>
      </Page>
    </Container>
  );
}

export default App;
