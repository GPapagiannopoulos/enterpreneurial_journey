import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="flex flex-col gap-9">
      <div className="flex justify-between pt-35 pb-10 gap-50 border-b border-black">
        <div className="flex flex-col gap-7">
          <div className="text-4xl font-bold font-raleway">Novatech</div>
          <div className="text-black text-xl font-raleway">
            Novatech is a London-based startup bringing green energy
            crowdfunding to the UK for investors and green developers
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-30 gap-y-15 text-black text-xl font-raleway">
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
      <div className="flex justify-center pb-18">
        <Link to="/soon">Privacy Policy</Link>|
        <Link to="/soon">Terms & Conditions</Link>|
        <Link to="/soon">Cookies Policy</Link>
      </div>
    </section>
  );
}
