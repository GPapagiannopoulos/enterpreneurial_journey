import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white shadow-sm">
      <span className="text-3xl font-bold text-green-700">Noverta</span>

      <div className="flex gap-12">
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
          onClick={() => navigate("/investors")}
          variant="secondary"
        />
        <Button
          label="For Developers"
          onClick={() => navigate("/developers")}
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
