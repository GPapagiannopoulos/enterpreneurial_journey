import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Your Money <br />
            Our Planet <br />
          </h1>
          <p className="text-lg text-gray-500 max-w-md">
            Earn real returns while funding green energy projects that fight
            climate changes.
          </p>
          <div className="flex gap-6">
            <Button
              label="Invest Now"
              onClick={() => navigate("/updateme")}
              variant="cta"
            />
            <Button
              label="Explore"
              onClick={() => navigate("/exploore")}
              variant="secondary"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center"></div>
      </div>
    </section>
  );
}
