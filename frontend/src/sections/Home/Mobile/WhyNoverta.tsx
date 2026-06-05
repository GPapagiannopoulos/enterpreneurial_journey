import type { WhyCard } from "../../../components/ui/BenefitsCard";
import solarPanelsWhy from "../../../assets/icons/Hero/SolarPanelsWhy.png";
import BenefitsCard from "../../../components/ui/BenefitsCard";

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
    <section>
      <div className="grid">
        <img
          src={solarPanelsWhy}
          className="w-full aspect-3/1 col-start-1 row-start-1 object-cover"
          alt=""
        />
        <div className="col-start-1 row-start-1 bg-black/30"></div>

        <div className="col-start-1 row-start-1 inline-flex justify-center items-center text-white text-2xl font-['DM_Sans']">
          <h3>
            <span className="font-bold">Why invest</span> through Noverta?
          </h3>
        </div>
      </div>

      <div className="py-10.5 px-5.5">
        <p className="text-sm font-inter">
          We connect people and institutions with verified green projects
          worldwide, making it easy to invest where the planet needs it most.
        </p>
        <div className="grid grid-cols-2 pt-6.5 gap-2">
          {benefits.map((benefit, index) => (
            <BenefitsCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
