import Footer from "../../components/layout/Mobile/Footer";
import Navbar from "../../components/layout/Mobile/Navbar";
import EducationalLinks from "../../sections/Education/Mobile/EducationalLinks";
import Hero from "../../sections/Education/Mobile/Hero";

export default function Education() {
  return (
    <section>
      <Navbar />
      <Hero />
      <EducationalLinks />
      <Footer />
    </section>
  );
}
