import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoIcon from "./icons/logo";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);

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
          <div className="relative">
            <Button
              label="Projects"
              icon={
                <ChevronDown
                  className={`transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                />
              }
              variant="secondary"
              onClick={() => setProjectsOpen(!projectsOpen)}
              active={location.pathname.startsWith("/projects")}
            />
            {projectsOpen && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white shadow-lg rounded-2xl">
                <div>Solar</div>
                <div>Storage</div>
                <div>Wind</div>
                <div>EV Charging</div>
                <div>Energy Mix</div>
                <div>See all projects</div>
              </div>
            )}
          </div>
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
