import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";
import ProjectCard from "../../components/ProjectCard";
import ImpactDashboard from "../../components/ImpactDashboard";
import InputField from "../../components/InputField";

export default function HeroSection() {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState<string>("");

  return (
    <section className="bg-white">
      <div className="mt-82.5 pb-42.5 flex flex-col lg:flex-row items-center md:gap-12 border-b">
        <div className="w-240.25">
          <h1 className="text-8xl text-black font-bold font-raleway leading-29 whitespace-nowrap">
            Think long term,
            <br />
            invest <span className="text-green-700">green</span>.
          </h1>
          <p className="pt-39 w-156.25">
            <span className="text-neutral-500 text-2xl font-normal font-inter leading-10 tracking-tight">
              Invest in renewable energy projects.{" "}
              <span className="text-green-600 font-semibold">
                Earn 6-10% returns.
              </span>{" "}
              Track your personal impact in real time.
            </span>
          </p>
          <div className="mt-17.5 flex items-center ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/updateme", { state: { email: emailAddress } });
              }}
              className="inline-flex items-center gap-6"
            >
              <InputField
                placeholder="Enter your email"
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <Button label="Get Started" type="submit" variant="primary" />
            </form>
          </div>
        </div>

        <div className="bg-green-100 rounded-[40px] w-153.25 h-153.25 relative">
          <ProjectCard />
          <ImpactDashboard />
        </div>
      </div>
    </section>
  );
}
