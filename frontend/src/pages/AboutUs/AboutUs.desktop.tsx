import Footer from "../../components/layout/Desktop/Footer";
import Navbar from "../../components/layout/Desktop/Navbar";
import Commitments from "../../sections/AboutUs/Desktop/Commitments";
import MeetTheTeam from "../../sections/AboutUs/Desktop/MeetTheTeam";

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
