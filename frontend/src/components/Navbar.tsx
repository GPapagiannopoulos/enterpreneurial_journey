import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="flex flex-col items-center justify-between px-16 py-4 bg-white shadow-sm">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <span className="text-3xl font-bold text-green-700">Noverta</span>
        </Link>

        <div className="gap-12 hidden md:flex">
          <Button
            label="Explore"
            onClick={() => navigate("/explore")}
            variant="secondary"
          />
          <Button
            label="About Us"
            onClick={() => navigate("/aboutus")}
            variant="secondary"
          />
          <Button
            label="For Investors"
            onClick={() => navigate("/forinvestors")}
            variant="secondary"
          />
          <Button
            label="For Developers"
            onClick={() => navigate("/fordevelopers")}
            variant="secondary"
          />
          <Button
            label="Start Investing"
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
          label="Explore"
          onClick={() => navigate("/explore")}
          variant="secondary"
        />
        <Button
          label="About Us"
          onClick={() => navigate("/aboutus")}
          variant="secondary"
        />
        <Button
          label="For Investors"
          onClick={() => navigate("/forinvestors")}
          variant="secondary"
        />
        <Button
          label="For Developers"
          onClick={() => navigate("/fordevelopers")}
          variant="secondary"
        />
        <Button
          label="Start Investing"
          onClick={() => navigate("/updateme")}
          variant="cta"
        />
      </div>
    </nav>
  );
}
