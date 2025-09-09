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
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event/:id" element={<Event />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
