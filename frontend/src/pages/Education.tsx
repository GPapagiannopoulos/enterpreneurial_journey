import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EducationalLinks from "../sections/Education/EducationalLinks";
import Hero from "../sections/Education/Hero";

export default function Education() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EducationalLinks />
      <Footer />
    </div>
  );
}
