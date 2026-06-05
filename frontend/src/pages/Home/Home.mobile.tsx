import Footer from "../../components/layout/Mobile/Footer";
import Navbar from "../../components/layout/Mobile/Navbar";
import CTASection from "../../sections/Home/Mobile/CTASection";
import HeroSection from "../../sections/Home/Mobile/HeroSection";
import HowItWorksSection from "../../sections/Home/Mobile/HowItWorksSection";
import WhyNoverta from "../../sections/Home/Mobile/WhyNoverta";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <WhyNoverta />
      <CTASection />
      <Footer />
    </section>
  );
}
