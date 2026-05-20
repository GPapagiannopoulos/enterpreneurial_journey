import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import ContactForm from "../../sections/ContactUs/ContactForm";

export default function ContactUs() {
  return (
    <section className="min-h-screen">
      <Navbar />
      <ContactForm />
      <Footer />
    </section>
  );
}
