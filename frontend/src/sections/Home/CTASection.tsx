import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="-mx-35">
      <div className="bg-[#063B27] flex flex-col gap-17.25 pt-47.75 pb-56.5">
        <h2 className="text-center text-white text-8xl font-bold font-raleway">
          Ready to Start <br />
          Building Green?
        </h2>
        <div className="flex justify-center">
          <div className="bg-white text-teal-950 text-xl font-bold font-['DM_Sans'] rounded-lg px-8 py-4">
            <Link
              to="/contactus"
              className="group inline-flex items-center gap-2"
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
        </div>
      </div>
    </section>
  );
}
