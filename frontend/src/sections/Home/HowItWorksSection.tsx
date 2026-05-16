import StepsCard from "../../components/StepsCard";
import type { StepsCardProps } from "../../components/StepsCard";
import ListMagnifierGlass from "../../components/icons/ListMagnifierGlass";
import Coins from "../../components/icons/Coins";
import Hourglass from "../../components/icons/Hourglass";
import { Info } from "lucide-react";

const steps: StepsCardProps[] = [
  {
    icon: <ListMagnifierGlass></ListMagnifierGlass>,
    stepName: "Discover projects",
    stepDescription:
      "Browse available projects and review key information, including structure, risks, and project fundamentals.",
  },
  {
    icon: <Coins></Coins>,
    stepName: "Allocate Capital",
    stepDescription:
      "Select a project and choose an amount to allocate, subject to platform availability and eligibility.",
  },
  {
    icon: <Hourglass></Hourglass>,
    stepName: "Track Performance",
    stepDescription:
      "Follow project progress and performance over time through a dedicated platform interface.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-30">
      <div className="py-12 mb-22.5">
        <div>
          <h2 className="text-center text-teal-950 text-8xl font-bold font-['DM_Sans'] tracking-wide">
            How it Works
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 items-stretch relative">
        {steps.map((step, index) => (
          <StepsCard key={index} {...step} />
        ))}
      </div>

      <div className="mt-8 md:mt-12 w-full lg:w-267.25 px-6 md:px-8 py-6 md:py-7 bg-neutral-300/40 rounded-lg border-[1.50px] border-neutral-300 flex justify-center items-center gap-6">
        <Info className="size-18"></Info>
        <p className="text-stone-950 text-2xl font-normal font-['Inter'] leading-7">
          This is not an offer to invest. We are not currently authorised or
          regulated by the Financial Conduct Authority. This information is for
          educational purposes only.
        </p>
      </div>
    </section>
  );
}
