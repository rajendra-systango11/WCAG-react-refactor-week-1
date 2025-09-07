import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event/:id" element={<Event />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
