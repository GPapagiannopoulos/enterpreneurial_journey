import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="-mx-35">
      <div className="bg-green-700 flex flex-col gap-17.25 pt-47.75 pb-56.5">
        <h2 className="text-center text-white text-8xl font-bold font-raleway">
          Ready to Start <br />
          Building Green?
        </h2>
        <div className="flex justify-center gap-8">
          <div>
            <Button
              label="I want to get funded"
              variant="primary"
              onClick={() => navigate("/")}
            ></Button>
          </div>
          <div>
            <Button
              label="Get Started"
              variant="cta"
              onClick={() => navigate("/")}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
