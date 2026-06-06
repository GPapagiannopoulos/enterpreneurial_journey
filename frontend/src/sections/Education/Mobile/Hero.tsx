import { useNavigate } from "react-router-dom";
import solarPanelsEdu from "../../../assets/icons/Education/SolarPanelsEdu.png";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section>
      <div
        className="bg-cover bg-center flex flex-col py-8 pl-5.5 gap-7"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${solarPanelsEdu})`,
        }}
      >
        <h2 className="flex justify-start items-center text-white text-4xl font-['DM_Sans'] font-bold leading-9.25 pr-25">
          Everything you need to know
        </h2>
        <div className="justify-start inline-flex items-center">
          <button
            className="flex bg-white rounded-xs border border-[#063B27] text-[#063B27] text-xs font-bold font-['DM_Sans'] leading-3 items-center gap-1 py-3 px-5"
            onClick={() => navigate("/contactus")}
          >
            Join the waitlist
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
      <div className="pt-7 px-5.5">
        <p className="text-sm font-inter leading-5">
          We connect people and institutions with verified green projects
          worldwide, making it easy to invest where the planet needs it most.
        </p>
      </div>
    </section>
  );
}
