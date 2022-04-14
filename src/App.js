import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/about" element={<About />} />
        <Route to="/contact" element={<Contact />} />
        <Route to="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
