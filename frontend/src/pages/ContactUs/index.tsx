import { useIsMobile } from "../../hooks/useIsMobile";
import ContactUsDesktop from "./ContactUs.desktop";
import ContactUsMobile from "./ContactUs.mobile";

export default function ConctactUs() {
  return useIsMobile() ? <ContactUsMobile /> : <ContactUsDesktop />;
}
