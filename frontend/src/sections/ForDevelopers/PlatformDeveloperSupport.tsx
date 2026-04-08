import { useState } from "react";

export interface DeveloperSupportProps {
  supportType: string;
  supportDetail: string;
}

const DeveloperSupportMechanisms: DeveloperSupportProps[] = [
  {
    supportType: "Development Capital",
    supportDetail: "Details on development Capital",
  },
  {
    supportType: "Construction Finance",
    supportDetail: "Details on construction Finance",
  },
  {
    supportType: "Mezzanine",
    supportDetail: "Details on mezzanine",
  },
  {
    supportType: "Community bonds",
    supportDetail: "Details on community bonds",
  },
  {
    supportType: "Refinancing",
    supportDetail: "Details on refinancing",
  },
];

export default function PlatformDeveloperSupport() {
  const [mechanismsExpanded, setMechanismsExpanded] = useState<Set<number>>(
    new Set(),
  );

  const toggleExpansion = (value: number) => {
    setMechanismsExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  return (
    <section>
      <h2 className="font-bold text-3xl mx-4 md:mx-14 my-8">
        How the Platform Supports Developers
      </h2>
      {DeveloperSupportMechanisms.map((mechanism, index) => (
        <div
          key={index}
          className="border-gray-400 border-b-2 py-4 max-w-5xl mx-auto mb-8"
        >
          <div className="flex justify-between items-center px-4 md:px-14">
            <h2 className="font-bold text-lg">{mechanism.supportType}</h2>
            <button
              onClick={() => toggleExpansion(index)}
              className="text-3xl text-gray-500 font-light ease-in-out duration-300"
            >
              {mechanismsExpanded.has(index) ? "-" : "+"}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${mechanismsExpanded.has(index) ? "max-h-96" : "max-h-0"} px-4 md:px-14`}
          >
            {mechanism.supportDetail}
          </div>
        </div>
      ))}
    </section>
  );
}
