import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../sections/ContactUs/ContactForm";

export default function ContactUs() {
  return (
    <section className="min-h-screen">
      <Navbar />
      <ContactForm />
      <Footer />
    </section>
  );
}
