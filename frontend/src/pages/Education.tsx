import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EducationalLinks from "../sections/Education/EducationalLinks";
import Hero from "../sections/Education/Hero";
import DeveloperFAQs from "../sections/Education/DeveloperFAQs";

export default function Education() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EducationalLinks />
      <DeveloperFAQs />
      <Footer />
    </div>
  );
}
