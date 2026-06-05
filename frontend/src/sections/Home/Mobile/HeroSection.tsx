import { useNavigate } from "react-router-dom";
import heroImage from "../../../assets/icons/Hero/HeroImage.svg";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="grid">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full col-start-1 row-start-1 object-cover"
        />
        <div className="col-start-1 row-start-1 bg-black/30"></div>

        <div className="col-start-1 row-start-1 flex flex-col py-6 pl-5.5 gap-6">
          <h2 className="flex justify-start items-center text-white text-4xl font-['DM_Sans'] font-bold leading-9.25">
            We make infrastructure investing accessible to everyone.
          </h2>
          <div className="justify-start inline-flex items-center">
            <button
              className="flex bg-white rounded-xs border border-[#063B27] text-[#063B27] text-xs font-bold font-['DM_Sans'] leading-3 items-center gap-1 py-2 px-3"
              onClick={() => navigate("/contactus")}
            >
              Join the waitlist
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 pl-5.5 pr-8">
        <p className="text-3 font-['Inter'] leading-5">
          We connect people with institutional level infrastructure investments,
          making it accessible to everyone.
        </p>
      </div>
    </section>
  );
}
