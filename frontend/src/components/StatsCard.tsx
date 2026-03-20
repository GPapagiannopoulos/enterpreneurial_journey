export interface StatsCardProps {
  metric: string;
  label: string;
}

export default function StatsCard({ metric, label }: StatsCardProps) {
  return (
    <section>
      <div>
        <h2 className="font-bold text-xl text-green-600">{metric}</h2>
        <p className="font-light text-gray-600">{label}</p>
      </div>
    </section>
  );
}
