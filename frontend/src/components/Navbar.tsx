import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import LogoIcon from "./icons/logo";
import SolarPanel from "./icons/SolarPanel";
import Storage from "./icons/Storage";
import Wind from "./icons/Wind";
import ChargingStation from "./icons/ChargingStation";
import Windmill from "./icons/Windmill";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);

  return (
    <nav className="h-25 flex bg-white border-b px-30">
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
              <div className="absolute w-72 mt-2 px-8 py-8 top-full right-0 z-50 bg-white shadow-lg rounded-2xl border border-zinc">
                <div className="flex flex-col gap-3">
                  <Button
                    icon={<SolarPanel></SolarPanel>}
                    label="Solar"
                    variant="primary"
                    onClick={() => navigate("/contactus")}
                  />
                  <Button
                    icon={<Storage></Storage>}
                    label="Storage"
                    variant="primary"
                    onClick={() => navigate("/contactus")}
                  />
                  <Button
                    icon={<Wind></Wind>}
                    label="Wind"
                    variant="primary"
                    onClick={() => navigate("/contactus")}
                  />
                  <Button
                    icon={<ChargingStation></ChargingStation>}
                    label="EV Charging"
                    variant="primary"
                    onClick={() => navigate("/contactus")}
                  />
                  <Button
                    icon={<Windmill></Windmill>}
                    label="Energy Mix"
                    variant="primary"
                    onClick={() => navigate("/contactus")}
                  />
                  <div>
                    <Link
                      to="/contactus"
                      className="flex items-center gap-1 text-teal-950 hover:font-bold hover:gap-2 transition-all"
                    >
                      See all projects
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
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
