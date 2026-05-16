import type { WhyCard } from "../../components/BenefitsCard";
import BenefitsCard from "../../components/BenefitsCard";

const benefits: WhyCard[] = [
  {
    title: "Access to investments",
    description: "Invest in any UK renewable projects starting from £10",
  },
  {
    title: "Rigorous selection",
    description: "Each project undergoes structured due diligence",
  },
  {
    title: "Clear Information",
    description: "The process is immediately visible to you",
  },
  {
    title: "No investor fees",
    description: "The platform does not charge investors any fees",
  },
  {
    title: "Portfolio diversification",
    description: "Access long-term assets beyond traditional markers",
  },
];

export default function WhyNoverta() {
  return (
    <section className="px-30">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-25 gap-y-9 py-30">
        <h2 className="lg:col-start-1 lg:row-start-1 text-teal-950 text-8xl font-bold font-['DM_Sans'] leading-tight tracking-wide">
          Why invest <span className="font-normal">through Noverta?</span>
        </h2>

        <div className="lg:col-start-1 lg:row-start-2 flex flex-col gap-9">
          <p className="font-inter text-black text-3xl font-medium leading-10 tracking-tight">
            We connect people and institutions with verified green projects
            worldwide, making it easy to invest where the planet needs it most.
          </p>
          <img
            className="w-full rounded-lg pt-25"
            src="../../assets/icons/SolarPanelsWhy.png"
            alt="Solar panels"
          />
        </div>

        <div className="lg:col-start-2 lg:row-start-2 flex flex-col gap-6">
          {benefits.map((benefit, index) => (
            <BenefitsCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
