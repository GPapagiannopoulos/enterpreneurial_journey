import { useIsMobile } from "../../hooks/useIsMobile";
import AboutUsDesktop from "./AboutUs.desktop";
import AboutUsMobile from "./AboutUs.mobile";

export default function AboutUs() {
  return useIsMobile() ? <AboutUsMobile /> : <AboutUsDesktop />;
}
