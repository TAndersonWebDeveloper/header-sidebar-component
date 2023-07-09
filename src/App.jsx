import styled from "styled-components";
import Sidebar from "./ui/Sidebar";
import Header from "./ui/Header";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main``;

function App() {
  return (
    <StyledApp>
      <Header />
      <Sidebar />
      <Main></Main>
      <GlobalStyles />
    </StyledApp>
  );
}

export default App;
