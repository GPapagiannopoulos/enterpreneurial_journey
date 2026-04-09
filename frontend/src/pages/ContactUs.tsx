import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../sections/ContactUs/ContactForm";

export default function ContactUs() {
  return (
    <section className="min-h-screen mx-35">
      <Navbar />
      <ContactForm />
      <Footer />
    </section>
  );
}
