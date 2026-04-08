import Navbar from "../components/Navbar";
import HeroSection from "../sections/Home/HeroSection";
import TaglineSection from "../sections/Home/TaglineSection";
import HowItWorksSection from "../sections/Home/HowItWorksSection";
import CTASection from "../sections/Home/CTASection";
import GlobalInvestment from "../sections/Home/GlobalInvestment";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen px-35">
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <HowItWorksSection />
      <GlobalInvestment />
      <CTASection />
      <Footer />
    </div>
  );
}
