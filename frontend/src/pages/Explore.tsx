import { useState, useEffect } from "react";
import ProjectPanel from "../components/Panel";
import { retrieveProjects } from "../api/Project";
import type { ProjectDetails } from "../api/types";
import Navbar from "../components/Navbar";

export interface EnergyTypeProps {
  type: string;
  emoji: string;
}

const energyTypesOffered: EnergyTypeProps[] = [
  {
    type: "Solar",
    emoji: "\u{2600}\u{1F331}",
  },
  {
    type: "Wind",
    emoji: "\u{1F32C}",
  },
  {
    type: "Hydro",
    emoji: "\u{1F4A7}",
  },
  {
    type: "Biomass",
    emoji: "\u{1F33F}",
  },
  {
    type: "Green Hydrogen",
    emoji: "\u{1F7E2}\u{1F4A8}",
  },
];

export default function Explore() {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [energyTypes, setEnergyTypes] = useState<Set<string>>(new Set());
  //const [minExpectedReturn, setExpectedReturn] = useState<number>(0);
  //const [projectStage, setProjectStage] = useState<Set<string>>(new Set());

  useEffect(() => {
    const initializeCatalogue = async () => {
      try {
        const data = await retrieveProjects();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCatalogue();
  }, []);

  const toggleEnergyType = (type: string) => {
    setEnergyTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  if (isLoading)
    return <div className="p-8 text-center">Loading infrastructure...</div>;
  if (error) return <div className="error">System Failure: {error}</div>;

  return (
    <main className="p-6">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 pt-12">
        <aside className="flex flex-col gap-4">
          <div className="bg-white shadow-sm p-4 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              ENERGY TYPE
            </h2>
            <div className="flex flex-wrap gap-2">
              {energyTypesOffered.map((energyType) => (
                <div key={energyType.type} className="flex items-center gap-2">
                  <button
                    onClick={() => toggleEnergyType(energyType.type)}
                    className={
                      energyTypes.has(energyType.type)
                        ? "bg-green-100 text-green-700 border border-green-400 rounded-full px-3 py-1 text-sm"
                        : "bg-white border border-gray-200 rounded-full px-3 py-1 text-sm hover:border-green-400"
                    }
                  >
                    {energyType.emoji} {energyType.type}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-sm mb-8 p-4 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              EXPECTED RETURN
            </h2>
          </div>
          <div className="bg-white shadow-sm p-4 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              PROJECT STAGE
            </h2>
          </div>
        </aside>
        <div className="px-16">
          <h1 className="text-3xl font-bold">
            Explore <span className="text-green-700">Green Projects</span>
          </h1>
          <p className="font-light text-xl text-gray-700">
            Discover renewable projects on offer
          </p>
          <p className="font-light text-xl text-gray-700 my-4">
            Current showing <span className="font-bold">{projects.length}</span>{" "}
            projects
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectPanel key={project.id} project={project} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
