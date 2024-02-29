import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Cart } from "./components";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
