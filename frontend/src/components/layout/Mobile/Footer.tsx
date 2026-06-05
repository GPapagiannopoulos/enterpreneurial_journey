import { Link } from "react-router-dom";
import LogoIcon from "../../icons/Navbar/logo";

export default function Footer() {
  return (
    <section className="flex flex-col gap-2 px-5.5">
      <div className="grid grid-cols-[2fr_3fr] pt-5 pb-2.5 gap-5 border-b border-black">
        <div className="grid start-row-1 start-col-1 gap-2">
          <div className="text-xs font-bold flex flex-inline gap-1.75 font-raleway">
            <LogoIcon className="size-4"></LogoIcon>Noverta
          </div>
          <div className="text-black text-[8px] font-inter">
            Noverta is a London-based startup bringing green energy crowdfunding
            to the UK for investors and green developers
          </div>
        </div>
        <div className="grid start-row-2 start-col-2 grid-cols-3 gap-x-5 gap-y-6 text-black text-[8px] font-inter justify-center">
          <a href="/soon">About Us</a>
          <a href="/soon">Terms & Conditions</a>
          <a href="/soon">X</a>
          <a href="/soon">Learn</a>
          <a href="/soon">Privacy Policy</a>
          <a href="/soon">Facebook</a>
          <a href="/soon">Contact</a>
          <a href="/soon">Become a Partner</a>
          <a href="/soon">Instagram</a>
        </div>
      </div>
      <div className="flex justify-start gap-0.5 pb-4.5 text-[6px] font-inter">
        <Link to="/soon">Privacy Policy</Link>|
        <Link to="/soon">Terms & Conditions</Link>|
        <Link to="/soon">Cookies Policy</Link>
      </div>
    </section>
  );
}
