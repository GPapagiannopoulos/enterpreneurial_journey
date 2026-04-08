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
          <a href="#">About Us</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">X</a>
          <a href="#">Learn</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Facebook</a>
          <a href="#">Contact</a>
          <a href="#">Become a Partner</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="flex justify-center pb-18">
        <Link to="/">Privacy Policy</Link>|
        <Link to="/">Terms & Conditions</Link>|
        <Link to="/">Cookies Policy</Link>
      </div>
    </section>
  );
}
