const EnergyTypes: string[] = [
  "Solar PV",
  "Onshore Wind",
  "Offshore Wind",
  "BESS",
  "Hydro",
  "Biomass",
];

const DevelopmentStages: string[] = [
  "Development",
  "Ready-to-build",
  "Construction",
  "Operational",
];

export default function EligibleProjects() {
  return (
    <section className="px-4 md:px-14 mt-8 md:mt-14">
      <h2 className="font-bold text-3xl">Eligible Projects</h2>
      <p className="font-light text-sm mb-4">
        We are here for you regardless of the energy type or development stage
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-200 shadow-2xs rounded-2xl p-4">
          <h3 className="font-bold">Technology Types</h3>
          <div className="flex flex-wrap gap-2">
            {EnergyTypes.map((type) => (
              <div key={type} className="flex items-center gap-2 m-4">
                <span className="border border-gray-200 rounded-full text-sm px-3 py-1">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-200 shadow-2xs rounded-2xl p-4">
          <h3 className="font-bold">Development Stages</h3>
          <div className="flex flex-wrap gap-2">
            {DevelopmentStages.map((stage) => (
              <div key={stage} className="flex items-center gap-2 m-4">
                <span className="border border-gray-200 rounded-full text-sm px-3 py-1">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
