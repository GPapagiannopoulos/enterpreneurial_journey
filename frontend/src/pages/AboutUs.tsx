import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Commitments from "../sections/AboutUs/Commitments";
import MeetTheTeam from "../sections/AboutUs/MeetTheTeam";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MeetTheTeam />
      <Commitments />
      <Footer />
    </div>
  );
}
