import { useIsMobile } from "../../hooks/useIsMobile";
import EducationDesktop from "./Education.desktop";
import EducationMobile from "./Education.mobile";

export default function Education() {
  return useIsMobile() ? <EducationMobile /> : <EducationDesktop />;
}
