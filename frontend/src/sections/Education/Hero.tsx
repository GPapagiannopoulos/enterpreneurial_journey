import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-28 pb-20.5 px-30">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
        <div className="lg:col-start-1 flex flex-col gap-10.5 justify-left">
          <h2 className="text-9xl text-teal-950 font-bold font-['DM_Sans'] tracking-wide leading-32">
            Everything you need to know
          </h2>
          <p className="text-black text-2xl font-medium font-inter leading-9 tracking-tight">
            We connect people and institutions with verified green projects
            worldwide, making it easy to invest where the planet needs it most.
          </p>
          <Link
            to="/contactus"
            className="bg-teal-950 text-white w-auto text-xl font-bold font-['DM_Sans'] rounded-lg px-8 py-4 self-start group inline-flex items-center gap-2"
          >
            <span className="relative inline-block">
              <span className="invisible font-extrabold">Join Waitlist</span>
              <span className="absolute inset-0 group-hover:font-extrabold transition-all">
                Join Waitlist
              </span>
            </span>
            <ArrowRight
              size={26}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <img
          src="/src/assets/icons/SolarPanelsEdu.png"
          alt="Solar Panels"
          className="lg:col-start-2 w-full aspect-4/5 object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
