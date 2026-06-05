import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoIcon from "../../icons/Navbar/logo";
import Button from "../../ui/Button";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import SolarPanel from "../../icons/Navbar/SolarPanel";
import Storage from "../../icons/Navbar/Storage";
import Wind from "../../icons/Navbar/Wind";
import ChargingStation from "../../icons/Navbar/ChargingStation";
import Windmill from "../../icons/Navbar/Windmill";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);

  const go = (path: string) => {
    navigate(path);
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  return (
    <nav className="relative bg-white border-b">
      <div className="p-5.5 flex justify-between items-center w-full">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-3">
            <LogoIcon className="font-teal-950 size-5"></LogoIcon>
            <span className="text-black font-raleway font-bold leading-5">
              Noverta
            </span>
          </div>
        </Link>
        <div className="block">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 z-50 bg-white shadow-lg border-b overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 p-6">
          <Button
            label="Home"
            onClick={() => go("/")}
            active={location.pathname === "/"}
            variant="secondary"
          />
          <div className="flex flex-col gap-3">
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
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                projectsOpen
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-3 pl-4">
                <Button
                  icon={<SolarPanel />}
                  label="Solar"
                  variant="primary"
                  onClick={() => go("/contactus")}
                />
                <Button
                  icon={<Storage />}
                  label="Storage"
                  variant="primary"
                  onClick={() => go("/contactus")}
                />
                <Button
                  icon={<Wind />}
                  label="Wind"
                  variant="primary"
                  onClick={() => go("/contactus")}
                />
                <Button
                  icon={<ChargingStation />}
                  label="EV Charging"
                  variant="primary"
                  onClick={() => go("/contactus")}
                />
                <Button
                  icon={<Windmill />}
                  label="Energy Mix"
                  variant="primary"
                  onClick={() => go("/contactus")}
                />
                <Link
                  to="/contactus"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-1 text-teal-950 hover:font-bold hover:gap-2 transition-all"
                >
                  See all projects
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <Button
            label="Education"
            onClick={() => go("/education")}
            active={location.pathname === "/education"}
            variant="secondary"
          />
          <Button
            label="About Us"
            onClick={() => go("/aboutus")}
            active={location.pathname === "/aboutus"}
            variant="secondary"
          />
        </div>
      </div>
    </nav>
  );
}
