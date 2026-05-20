import { useIsMobile } from "../../hooks/useIsMobile";
import HomeDesktop from "./Home.desktop";
import HomeMobile from "./Home.mobile";

export default function Home() {
  return useIsMobile() ? <HomeMobile /> : <HomeDesktop />;
}
