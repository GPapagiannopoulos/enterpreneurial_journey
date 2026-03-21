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
    <article className="border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full">
      <img
        src={project.imageUrl}
        alt={`Visual representation of ${project.name}`}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Location:</span>{" "}
          {project.location}
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
          <div className="flex justify-between text-sm mb-2">
            <p>
              <span className="font-semibold text-gray-800">Raised:</span>{" "}
              {formatCurrency(project.raisedAmount)}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Target:</span>{" "}
              {formatCurrency(project.targetAmount)}
            </p>
          </div>
          <ProgressBar
            target={project.targetAmount}
            raised={project.raisedAmount}
          />
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 mt-auto">
        <p className="text-sm font-bold text-green-600">
          Expected Return: {project.expectedReturnPercentage}%
        </p>
      </div>
    </article>
  );
}
