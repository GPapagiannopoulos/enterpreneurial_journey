import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "./icons/logo";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="h-25 flex bg-white border-b">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <div className="flex items-center gap-3">
            <LogoIcon></LogoIcon>
            <span className="text-black font-raleway text-[30px] font-bold leading-10">
              Noverta
            </span>
          </div>
        </Link>

        <div className="gap-12 hidden md:flex">
          <Button
            label="Home"
            onClick={() => navigate("/")}
            active={location.pathname === "/"}
            variant="secondary"
          />
          <Button
            label="Projects"
            onClick={() => navigate("/projects")}
            active={location.pathname === "/projects"}
            variant="secondary"
          />
          <Button
            label="Education"
            onClick={() => navigate("/learn")}
            active={location.pathname === "/learn"}
            variant="secondary"
          />
          <Button
            label="About Us"
            onClick={() => navigate("/aboutus")}
            active={location.pathname === "/aboutus"}
            variant="secondary"
          />
        </div>
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
