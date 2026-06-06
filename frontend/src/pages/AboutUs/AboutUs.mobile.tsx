import Footer from "../../components/layout/Mobile/Footer";
import Navbar from "../../components/layout/Mobile/Navbar";
import MeetTheTeam from "../../sections/AboutUs/Mobile/MeetTheTeam";
import CTASection from "../../sections/Home/Mobile/CTASection";

export default function AboutUs() {
  return (
    <section>
      <Navbar />
      <MeetTheTeam />
      <CTASection />
      <Footer />
    </section>
  );
}
