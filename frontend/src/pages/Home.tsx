import Navbar from "../components/Navbar";
import HeroSection from "../sections/Home/HeroSection";
import TaglineSection from "../sections/Home/TaglineSection";
import FeaturesSection from "../sections/Home/FeatureSection";
import StatsSection from "../sections/Home/StatsSection";
import HowItWorksSection from "../sections/Home/HowItWorksSection";
import ForEveryInvestorSection from "../sections/Home/ForEveryInvestorSection";
import CTASection from "../sections/Home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen px-35">
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <ForEveryInvestorSection />
      <CTASection />
    </div>
  );
}
