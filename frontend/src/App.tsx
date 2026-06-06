import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import UnderConstruction from "./pages/UnderConstruction";
import AboutUs from "./pages/AboutUs";
import Education from "./pages/Education";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/soon" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
