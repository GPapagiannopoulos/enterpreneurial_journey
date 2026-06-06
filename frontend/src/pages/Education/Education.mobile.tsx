import Footer from "../../components/layout/Mobile/Footer";
import Navbar from "../../components/layout/Mobile/Navbar";
import DeveloperFAQs from "../../sections/Education/Mobile/DeveloperFAQs";
import EducationalLinks from "../../sections/Education/Mobile/EducationalLinks";
import Hero from "../../sections/Education/Mobile/Hero";
import CTASection from "../../sections/Home/Mobile/CTASection";

export default function Education() {
  return (
    <section>
      <Navbar />
      <Hero />
      <EducationalLinks />
      <DeveloperFAQs />
      <CTASection />
      <Footer />
    </section>
  );
}
