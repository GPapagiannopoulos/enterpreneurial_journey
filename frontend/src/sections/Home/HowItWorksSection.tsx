import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import StepsCard from "../../components/StepsCard";
import type { StepsCardProps } from "../../components/StepsCard";

const steps: StepsCardProps[] = [
  {
    stepNumber: 1,
    emoji: "🔍",
    stepName: "Browse",
    stepDescription: "Pick projects you love",
  },
  {
    stepNumber: 2,
    emoji: "\u{1F4B0}",
    stepName: "Invest",
    stepDescription: "Start from £500",
  },
  {
    stepNumber: 3,
    emoji: "📈",
    stepName: "Track",
    stepDescription: "Watch your impact grow",
  },
  {
    stepNumber: 4,
    emoji: "🎉",
    stepName: "Earn",
    stepDescription: "Get paid!",
  },
];

export default function HowItWorksSection() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="py-12 max-w-2xl mx-auto text-center">
        <h2 className="font-extrabold text-4xl">
          Dead Simple. <span className="text-green-600">Seriously.</span>
        </h2>
        <p className="font-light text-gray-500">
          Four steps away from making an impact
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-stretch relative">
        <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-green-300 z-0" />
        {steps.map((step) => (
          <StepsCard key={step.stepNumber} {...step} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          label="Let's Do This"
          onClick={() => navigate("/updateme")}
          variant="cta"
        />
      </div>
    </section>
  );
}
