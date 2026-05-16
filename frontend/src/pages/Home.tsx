import Navbar from "../components/Navbar";
import HeroSection from "../sections/Home/HeroSection";
import HowItWorksSection from "../sections/Home/HowItWorksSection";
import WhyNoverta from "../sections/Home/WhyNoverta";
import CTASection from "../sections/Home/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <WhyNoverta />
      <CTASection />
      <Footer />
    </div>
  );
}
