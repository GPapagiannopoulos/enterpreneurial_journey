import React from "react";

export interface StepsCardProps {
  stepNumber: number;
  emoji: string;
  stepName: string;
  stepDescription: string;
}

export default function StepsCard({
  stepNumber,
  emoji,
  stepName,
  stepDescription,
}: StepsCardProps) {
  return (
    <div className="bg-white p-6 border-2 rounded-xl border-gray-200 flex flex-col gap-3 h-full z-10">
      <div className="w-8 h-8 bg-green-600 rounded-lg text-white font-bold flex items-center justify-center">
        {stepNumber}
      </div>
      <div className="pl-2">
        <span>{emoji}</span>
        <h2 className="font-extrabold text-2xl text-black">{stepName}</h2>
        <p className="font-light text-gray-500">{stepDescription}</p>
      </div>
    </div>
  );
}
