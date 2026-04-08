import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import ForDevelopers from "./pages/ForDevelopers.tsx";
import UpdateMe from "./pages/UpdateMe.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";
import AboutUs from "./pages/AboutUs.tsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/fordevelopers" element={<ForDevelopers />} />
        <Route path="/updateme" element={<UpdateMe />} />
        <Route path="/soon" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
