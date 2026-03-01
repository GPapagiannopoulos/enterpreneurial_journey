interface ProgressBarProps {
  raised: number;
  target: number;
}

export default function ProgressBar({ raised, target }: ProgressBarProps) {
  const percentage = Math.min((raised / target) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
