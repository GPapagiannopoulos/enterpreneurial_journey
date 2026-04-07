import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-col items-center justify-between px-4 md:px-16 py-4 bg-white shadow-sm">
      <div className="flex justify-between items-baseline w-full border-b pb-[20px]">
        <Link to="/">
          <span className="text-black font-raleway text-[30px] font-bold leading-10">
            Noverta
          </span>
        </Link>

        <div className="gap-12 hidden md:flex">
          <Button
            label="About Us"
            onClick={() => navigate("/explore")}
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

      <div className={menuOpen ? "flex flex-col" : "hidden"}>
        <Button
          label="About Us"
          onClick={() => navigate("/explore")}
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
        <Button
          label="Join Waitlist"
          onClick={() => navigate("/updateme")}
          variant="cta"
        />
      </div>
    </nav>
  );
}
