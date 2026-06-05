import Footer from "../../components/layout/Desktop/Footer";
import Navbar from "../../components/layout/Desktop/Navbar";
import ContactForm from "../../sections/ContactUs//Desktop/ContactForm";

export default function ContactUs() {
  return (
    <section className="min-h-screen">
      <Navbar />
      <ContactForm />
      <Footer />
    </section>
  );
}
