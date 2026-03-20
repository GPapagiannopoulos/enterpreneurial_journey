import { useState } from "react";
import { Leaf, TrendingUp } from "lucide-react";

interface PanelCard {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const panelData: Record<string, PanelCard[]> = {
  impact: [
    {
      title: "Make Your Values Visible",
      description:
        "See exactly where your money goes and the real-world change it drives.",
      metric: "8,400t",
      metricLabel: "CO2 avoided",
    },
    {
      title: "Projects You Believe In",
      description:
        "Solar farms, wind energy, reforestation — pick causes that matter to you.",
      metric: "50+",
      metricLabel: "green projects",
    },
    {
      title: "Share Your Impact",
      description:
        "Track and share your personal impact score with friends and family.",
      metric: "9,400+",
      metricLabel: "tonnes saved by our community",
    },
  ],
  returns: [
    {
      title: "Honest, Consistent Returns",
      description:
        "6–10% annual returns with no hidden fees and no nasty surprises.",
      metric: "7.5%",
      metricLabel: "average return rate",
    },
    {
      title: "On-Time, Every Time",
      description:
        "Our projects have a strong track record of paying back on schedule.",
      metric: "98.5%",
      metricLabel: "on-time repayment",
    },
    {
      title: "Start Small, Grow Big",
      description: "Begin investing from just £500 and scale at your own pace.",
      metric: "£24M+",
      metricLabel: "funded so far",
    },
  ],
};

export default function ForEveryInvestorSection() {
  const [activeView, setActiveView] = useState("impact");

  return (
    <section className="pb-16">
      <div className="py-12 max-w-2xl mx-auto text-center">
        <h2 className="font-extrabold text-4xl text-gray-600">
          Built for <span className="text-green-600">Every Investor</span>
        </h2>
        <p className="font-light text-gray-600">
          Whether you're driven by impact or returns, we got you.
        </p>
      </div>
      <div className="bg-gray-200 max-w-sm h-14 mx-auto border-0 rounded-3xl flex items-center justify-evenly px-1">
        <button
          className={
            activeView === "impact"
              ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch flex items-center gap-2"
              : "transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch flex items-center gap-2"
          }
          onClick={() => setActiveView("impact")}
        >
          <Leaf size={16} /> Impact Driven
        </button>
        <button
          className={
            activeView === "returns"
              ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch flex items-center gap-2"
              : "transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch flex items-center gap-2"
          }
          onClick={() => setActiveView("returns")}
        >
          <TrendingUp size={16} /> Return Focused
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        {panelData[activeView].map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-3"
          >
            <h3 className="font-bold text-lg text-gray-900">{card.title}</h3>
            <p className="text-gray-500 text-sm flex-1">{card.description}</p>
            <p className="text-green-600 font-bold text-2xl">
              {card.metric}{" "}
              <span className="text-gray-400 text-sm font-normal">
                {card.metricLabel}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
