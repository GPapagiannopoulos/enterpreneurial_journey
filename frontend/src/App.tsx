import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import Explore from "./pages/Explore.tsx";
import ForDevelopers from "./pages/ForDevelopers.tsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/fordevelopers" element={<ForDevelopers />} />
      </Routes>
    </BrowserRouter>
  );
}
