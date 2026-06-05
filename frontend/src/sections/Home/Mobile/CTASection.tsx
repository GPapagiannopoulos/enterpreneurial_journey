import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section>
      <div className="bg-[#063B27] flex flex-col gap-4 py-8.5">
        <h2 className="text-center text-white text-2xl font-['DM_Sans']">
          Ready to Start <br />
          <span className="font-bold">Building Green?</span>
        </h2>
        <div className="flex justify-center">
          <div className="bg-white text-[#063B27] text-sm font-bold font-['DM_Sans'] rounded-lg px-5 py-3">
            <Link
              to="/contactus"
              className="group inline-flex items-center gap-2"
            >
              <span>Join the waitlist</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
