import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex justify-between gap-25 pt-60 pb-26 border-b border-neutral-400">
      <div className="text-black text-8xl font-bold font-raleway">
        We make <span className="text-green-700">green</span> investing
        accessible to everyone
      </div>
      <div className="flex flex-col justify-center gap-17">
        <div className="text-neutral-500 text-2xl font-inter">
          We connect individuals and institutions with verified green projects
          around the world, from solar farms in sub-Saharan Africa to
          reforestation efforts in Southeast Asia. Our platforms makes it simple
          to put your money where the planet needs it the most.
        </div>
        <div>
          <Button
            label="Book a consultation"
            variant="primary"
            onClick={() => navigate("/soon")}
          ></Button>
        </div>
      </div>
    </section>
  );
}
