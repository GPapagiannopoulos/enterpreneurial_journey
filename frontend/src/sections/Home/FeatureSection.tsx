import FeatureCard from "../../components/FeatureCard";
import type { FeatureCardProps } from "../../components/FeatureCard";
import { TrendingUp, Leaf, Shield, Heart } from "lucide-react";

const features: FeatureCardProps[] = [
  {
    icon: TrendingUp,
    title: "Returns that actually return",
    description:
      "6-10% annual returns. No hidden fees. Just honest, green growth.",
    metric: "7.5% avg",
    metric_description: " return rate",
  },
  {
    icon: Leaf,
    title: "Impact You Can Show Off",
    description:
      "Track the good you do, share your impact, feel good about investing",
    metric: "8,400t",
    metric_description: " CO2 saved",
  },
  {
    icon: Shield,
    title: "Transparent AF",
    description:
      "Every number. Every update. Every payment. No fine print, no surprises, no BS.",
    metric: "100%",
    metric_description: " transparent",
  },
  {
    icon: Heart,
    title: "Values Meet Value",
    description:
      "It's your money doing what you believe in. Finally, investments that match your morals",
    metric: "2,400+",
    metric_description: " investors",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-10 md:py-20 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </section>
  );
}
