import { Container } from "@mui/material";
import Header from "./components/Header";
import AboutUs from "./components/About";
import ProductComponent from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <Container style={{ backgroundColor: "#000000" }}>
      <Header />
      <AboutUs />
      <ProductComponent />
      <Footer />
    </Container>
  );
}

export default App;
