import StatsCard from "../../components/StatsCard";
import type { StatsCardProps } from "../../components/StatsCard";

const stats: StatsCardProps[] = [
  {
    metric: "£24M+",
    label: "Funded",
  },
  {
    metric: "2,400+",
    label: "Investors",
  },
  {
    metric: "8,400t",
    label: "Avoided",
  },
  {
    metric: "98.5%",
    label: "On-time Repayment",
  },
];
export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4 md:px-0">
        {stats.map((stat) => (
          <StatsCard key={stat.metric} {...stat} />
        ))}
      </div>
    </section>
  );
}
