import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicePage from "./pages/ServicePage";
import { Routes, Route } from "react-router-dom";
import RefundPage from "./pages/RefundPage";
import TermPage from "./pages/TermPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/terms" element={<TermPage />} />
      </Routes>
    </div>
  );
}

export default App;
