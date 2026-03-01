import type { ProjectDetails } from "./types";

export const retrieveProjects = async (): Promise<ProjectDetails[]> => {
  const response = await fetch("http://localhost:8000/api/projects", {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to fetch projects.");
  }
  return response.json();
};
