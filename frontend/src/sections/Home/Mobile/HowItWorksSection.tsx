import { ArrowRight, Coins, Hourglass, Info } from "lucide-react";
import ListMagnifierGlass from "../../../components/icons/Home/ListMagnifierGlass";
import type { StepsCardProps } from "../../../components/ui/StepsCard";
import StepsCard from "../../../components/ui/StepsCard";
import { Link } from "react-router-dom";

const steps: StepsCardProps[] = [
  {
    icon: <ListMagnifierGlass className="size-4"></ListMagnifierGlass>,
    stepName: "Discover projects",
    stepDescription:
      "Browse available projects and review key information, including structure, risks, and project fundamentals.",
  },
  {
    icon: <Coins className="size-4"></Coins>,
    stepName: "Allocate Capital",
    stepDescription:
      "Select a project and choose an amount to allocate, subject to platform availability and eligibility.",
  },
  {
    icon: <Hourglass className="size-4"></Hourglass>,
    stepName: "Track Performance",
    stepDescription:
      "Follow project progress and performance over time through a dedicated platform interface.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="flex flex-col gap-4.5 px-5.5">
      <div>
        <h2 className="text-[#063B27] text-2xl font-bold">How it works</h2>
      </div>
      <div className="flex flex-col gap-3.5">
        {steps.map((step, index) => (
          <StepsCard key={index} {...step} />
        ))}
      </div>

      <div className="inline-flex items-center border border-[#063B276B] bg-[#F5F5F2] p-2.5 gap-1.75">
        <Info className="size-5 text-[#063B27]"></Info>
        <p className="text-[7px] font-inter">
          This is not an offer to invest. We are not currently authorised or
          regulated by the Financial Conduct Authority. This information is for
          educational purposes only.
        </p>
      </div>

      <div className="flex justify-center py-12">
        <Link
          to="/contactus"
          className="bg-[#063B27] text-white text-sm font-bold font-['DM_Sans'] rounded-lg px-5 py-3 self-start group inline-flex items-center gap-2"
        >
          <span className="">Join the waitlist</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
