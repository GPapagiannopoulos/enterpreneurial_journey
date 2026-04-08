import StepsCard from "../../components/StepsCard";
import type { StepsCardProps } from "../../components/StepsCard";
import { useState } from "react";

const steps: StepsCardProps[] = [
  {
    stepNumber: 1,
    stepName: "Create Your Account",
    stepDescription:
      "Sign up in minutes and complete a quick risk profile so we can match you to the right projects.",
  },
  {
    stepNumber: 2,
    stepName: "Browse Verified Projects",
    stepDescription:
      "Filter by region, project type, return profile, and impact category to find what matters to you.",
  },
  {
    stepNumber: 3,
    stepName: "Invest & Track Your Impact",
    stepDescription:
      "Fund a project with any amount and follow your real-world impact over time.",
  },
];

export default function HowItWorksSection() {
  const [activeView, setActiveView] = useState<string>("investors");

  return (
    <section>
      <div className="py-12">
        <div className="flex flex-cols justify-between">
          <div>
            <h2 className="text-black text-7xl font-bold font-raleway">
              How it Works
            </h2>
            <p className="text-neutral-500 text-lg font-inter">
              Getting started takes less than five minutes.
            </p>
          </div>
          <div className="w-60 h-14 px-1.5 pt-1.5 bg-white rounded-full outline -outline-offset-1 outline-green-600/20 inline-flex justify-start items-start gap-2">
            <button
              className={
                activeView === "investors"
                  ? "w-32 h-10 px-2 bg-green-600 rounded-full flex justify-center items-center text-white text-base font-medium font-inter leading-6"
                  : "w-32 h-10 px-2 rounded-full flex justify-center items-center text-neutral-500 text-base font-medium font-inter leading-6 transition-colors duration-200 hover:text-green-600"
              }
              onClick={() => setActiveView("investors")}
            >
              Investors
            </button>
            <button
              className={
                activeView === "developers"
                  ? "w-24 h-10 px-4 bg-green-600 rounded-full flex justify-center items-center text-white text-base font-medium font-inter leading-6"
                  : "w-24 h-10 px-4 rounded-full flex justify-center items-center text-neutral-500 text-base font-medium font-inter leading-6 transition-colors duration-200 hover:text-green-600"
              }
              onClick={() => setActiveView("developers")}
            >
              Developers
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 items-stretch relative">
        {steps.map((step) => (
          <StepsCard key={step.stepNumber} {...step} />
        ))}
      </div>
    </section>
  );
}
