import React from "react";
import { type LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  metric_description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  metric,
  metric_description,
}: FeatureCardProps) {
  const Icon = icon;

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
      <Icon className="text-green-600 mb-4" size={36} />
      <h2 className="font-bold text-xl text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <p>
        <span className="text-green-600 font-bold text-2xl">{metric}</span>
        <span className="text-gray-500 text-sm">{metric_description}</span>
      </p>
    </div>
  );
}
