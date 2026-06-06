import Footer from "../../components/layout/Mobile/Footer";
import Navbar from "../../components/layout/Mobile/Navbar";
import ContactForm from "../../sections/ContactUs/Mobile/ContactForm";
import CTASection from "../../sections/Home/Mobile/CTASection";

export default function ContactUs() {
  return (
    <section>
      <Navbar />
      <ContactForm />
      <CTASection />
      <Footer />
    </section>
  );
}
