import Footer from "../../components/layout/Desktop/Footer";
import Navbar from "../../components/layout/Desktop/Navbar";
import EducationalLinks from "../../sections/Education/Desktop/EducationalLinks";
import Hero from "../../sections/Education/Desktop/Hero";
import DeveloperFAQs from "../../sections/Education/Desktop/DeveloperFAQs";

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
