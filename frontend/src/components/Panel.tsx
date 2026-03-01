import ProgressBar from "./ProgressBar";
import type { ProjectDetails } from "../api/types";

interface ProjectPanelProps {
  project: ProjectDetails;
}

export default function ProjectPanel({ project }: ProjectPanelProps) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  return (
    <article className="project-panel">
      <img
        src={project.imageUrl}
        alt={`Visual representation of ${project.name}`}
      />

      <h3>{project.name}</h3>
      <p>
        <strong>Location:</strong> {project.location}
      </p>

      <div className="financial-metrics">
        <p>
          <strong>Target:</strong> {formatCurrency(project.targetAmount)}
        </p>
        <p>
          <strong>Raised:</strong> {formatCurrency(project.raisedAmount)}
        </p>
        <ProgressBar
          target={project.targetAmount}
          raised={project.raisedAmount}
        />
      </div>

      <p>
        <strong>Expected Return:</strong> {project.expectedReturnPercentage}%
      </p>
    </article>
  );
}
