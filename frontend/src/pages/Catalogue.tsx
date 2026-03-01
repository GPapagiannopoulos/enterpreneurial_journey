import { useState, useEffect } from "react";
import ProjectPanel from "../components/Panel";
import { retrieveProjects } from "../api/Project";
import type { ProjectDetails } from "../api/types";

export default function Catalogue() {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (isLoading)
    return <div className="loading-banner"> Loading projects...</div>;
  if (error) return <div className="error">System Failure: {error}</div>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-8">Investment Catalogue</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectPanel key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
