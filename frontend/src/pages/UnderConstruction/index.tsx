import { useIsMobile } from "../../hooks/useIsMobile";
import UnderConstructionDesktop from "./UnderConstruction.desktop";
import UnderConstructionMobile from "./UnderConstruction.mobile";

export default function UnderConstruction() {
  return useIsMobile() ? (
    <UnderConstructionMobile />
  ) : (
    <UnderConstructionDesktop />
  );
}
