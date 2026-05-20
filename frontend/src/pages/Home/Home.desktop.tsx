import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../sections/Home/HeroSection";
import HowItWorksSection from "../../sections/Home/HowItWorksSection";
import WhyNoverta from "../../sections/Home/WhyNoverta";
import CTASection from "../../sections/Home/CTASection";

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
