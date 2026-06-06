import Footer from "../../components/layout/Desktop/Footer";
import Navbar from "../../components/layout/Desktop/Navbar";
import HeroSection from "../../sections/Home/Desktop/HeroSection";
import HowItWorksSection from "../../sections/Home/Desktop/HowItWorksSection";
import WhyNoverta from "../../sections/Home/Desktop/WhyNoverta";
import CTASection from "../../sections/Home/Desktop/CTASection";

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
