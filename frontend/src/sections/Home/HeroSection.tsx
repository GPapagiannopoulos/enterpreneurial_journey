import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="h-1 w-full bg-zinc-300/60 blur-[10.40px]" />

      <div className="mx-auto max-w-410 px-6 md:px-12 lg:px-35 py-12 md:py-20 lg:py-30">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          <h1 className="lg:flex-[3] text-teal-950 font-bold font-['DM_Sans'] tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[90px]">
            We make infrastructure investing accessible to everyone.
          </h1>

          <div className="mt-8 lg:mt-0 lg:flex-[2] flex flex-col gap-16">
            <p className="text-black font-medium font-['Inter'] tracking-tight text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-9">
              We connect people with institutional level infrastructure
              investments, making it accessible to everyone.
            </p>

            <button
              onClick={() => navigate("/waitlist")}
              className="self-start inline-flex items-center gap-3 px-12 py-4 bg-teal-950 rounded-lg outline-1 -outline-offset-1 outline-green-700 text-white text-xl font-bold font-['DM_Sans'] hover:bg-teal-900 transition-colors"
            >
              Join the waitlist
              <ArrowRight className="w-7 h-6" />
            </button>
          </div>
        </div>

        <img
          className="mt-40 w-full"
          src="/src/assets/icons/HeroImage.svg"
          alt="Hero"
        />

        <div className="mt-8 md:mt-12 w-full lg:w-267.25 px-6 md:px-8 py-6 md:py-7 bg-neutral-300/40 rounded-lg border-[1.50px] border-neutral-300 flex justify-center items-center">
          <p className="text-center md:text-left text-base md:text-xl lg:text-2xl font-['Inter'] leading-7">
            <span className="text-stone-950 font-normal">
              If you're a project developer or infrastructure partner looking to
              list opportunities on Noverta, please{" "}
            </span>
            <span className="text-teal-950 font-bold cursor-pointer hover:underline">
              click here.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
