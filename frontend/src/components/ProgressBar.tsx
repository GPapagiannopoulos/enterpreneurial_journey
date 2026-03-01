interface ProgressBarProps {
  target: number;
  raised: number;
}

export default function ProgressBar({ raised, target }: ProgressBarProps) {
  const percentage = Math.min((raised / target) * 100, 100);

  return (
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${percentage}` }} />
    </div>
  );
}
