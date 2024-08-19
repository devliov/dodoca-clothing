import { Container } from "@mui/material";
import Header from "./components/Header";
import AboutUs from "./components/About";
import ProductComponent from "./components/Products";

function App() {
  return (
    <Container style={{ backgroundColor: "#FDF7EC" }}>
      <Header />
      <AboutUs />
      <ProductComponent />
    </Container>
  );
}

export default App;
