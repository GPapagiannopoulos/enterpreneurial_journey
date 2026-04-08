import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../sections/AboutUs/Hero";
import DeveloperFAQs from "../sections/AboutUs/DeveloperFAQs";
import HowItWorksSection from "../sections/Home/HowItWorksSection";

export default function AboutUs() {
  return (
    <div className="min-h-screen px-35">
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <DeveloperFAQs />
      <Footer />
    </div>
  );
}
