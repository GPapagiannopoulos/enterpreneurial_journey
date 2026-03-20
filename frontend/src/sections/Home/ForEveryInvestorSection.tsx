import { useState } from "react";

export default function ForEveryInvestorSection() {
  const [activeView, setActiveView] = useState("impact");
  return (
    <section>
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
              ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch"
              : "transition-colours duration-100 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch"
          }
          onClick={() => setActiveView("impact")}
        >
          Impact Driven
        </button>
        <button
          className={
            activeView === "returns"
              ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch"
              : "transition-colours duration-100 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch"
          }
          onClick={() => setActiveView("returns")}
        >
          Return Focused
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
    </section>
  );
}
