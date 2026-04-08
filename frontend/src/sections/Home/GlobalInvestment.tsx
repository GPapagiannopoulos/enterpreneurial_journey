import MapIcon from "../../components/icons/map";

export default function GlobalInvestment() {
  return (
    <section className="pt-35 pb-60 flex flex-col items-center gap-32">
      <div className="flex flex-col text-center gap-9">
        <div className="text-black text-7xl font-bold font-raleway">
          Invest in <span className="text-green-700">Green</span> Projects{" "}
          <span className="text-green-700">Globally</span>
        </div>
        <div className="text-black text-xl font-raleway">
          Fund sustainable initiatives across every corner of the world.
        </div>
      </div>
      <div className="w-full">
        <MapIcon className="w-full h-auto" />
      </div>
      <div className="flex justify-between gap-60 text-center text-black text-xl font-raleway">
        <div>
          <span className="text-9xl font-bold font-['Manrope']">2.4B+</span>{" "}
          <br />
          Invested in green projects
        </div>
        <div>
          <span className="text-9xl font-bold font-['Manrope']">120+</span>{" "}
          <br />
          Countries with active projects
        </div>
        <div>
          <span className="text-9xl font-bold font-['Manrope']">8.5K+</span>{" "}
          <br />
          Verified green initiatives
        </div>
      </div>
    </section>
  );
}
