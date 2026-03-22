import { useState } from "react";

export default function FinancingChallenge() {
  const [isSectionExpanded, setIsSectionExpanded] = useState<boolean>(false);

  return (
    <section className="mx-14">
      <h2 className="font-bold text-3xl my-8">The Financing Challenge</h2>
      <p className="text-lg text-gray-500">
        This is where our short summary paragraph is going to go in
      </p>
      <button
        className="font-bold"
        onClick={() => {
          setIsSectionExpanded(!isSectionExpanded);
        }}
      >
        {isSectionExpanded ? "Read Less" : "Read More"}
      </button>
      <p
        className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isSectionExpanded ? "max-h-96" : "max-h-0"}
      `}
      >
        This is going to be our read more section
      </p>
    </section>
  );
}
