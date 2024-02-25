import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles /> {/* doesn't accept children */}
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("test")}>Check in</Button>
        <Button onClick={() => alert("test")}>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
