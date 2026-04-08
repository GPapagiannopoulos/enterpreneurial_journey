import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EducationalLinks from "../sections/Learn/EducationalLinks";
import Hero from "../sections/Learn/Hero";

export default function Learn() {
  return (
    <div className="min-h-screen px-35">
      <Navbar />
      <Hero />
      <EducationalLinks />
      <Footer />
    </div>
  );
}
