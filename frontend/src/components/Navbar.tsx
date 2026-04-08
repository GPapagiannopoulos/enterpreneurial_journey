import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "./icons/logo";

export default function Navbar() {
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
            label="About Us"
            onClick={() => navigate("/aboutus")}
            variant="secondary"
          />
          <Button
            label="Learn"
            onClick={() => navigate("/aboutus")}
            variant="secondary"
          />
          <Button
            label="Contact"
            onClick={() => navigate("/forinvestors")}
            variant="secondary"
          />
        </div>
        <div>
          <Button
            label="Join Waitlist"
            onClick={() => navigate("/updateme")}
            variant="cta"
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
