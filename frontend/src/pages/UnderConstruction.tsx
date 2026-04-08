import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-35 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-9">
        <h1 className="text-8xl font-bold font-raleway text-black">
          Coming <span className="text-green-700">Soon</span>
        </h1>
        <p className="text-neutral-500 text-xl font-inter max-w-lg">
          We're still building this page. Check back soon.
        </p>
        <Button
          label="Back to Home"
          variant="primary"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
