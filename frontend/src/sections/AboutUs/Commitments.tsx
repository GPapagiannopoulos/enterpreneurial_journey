import SolarPanel from "/src/assets/icons/SolarPanelsAboutUs.png";

export default function Commitments() {
  return (
    <section className="px-30 flex flex-col gap-12">
      <div className="text-teal-950 text-8xl font-bold font-raleway">
        Commitments
      </div>
      <div className="grid grid-cols-[2fr_1fr] justify-center gap-12 border-[#DCD3D3] border-2">
        <img src={SolarPanel} alt="Solar Panels" />
        <div className="flex flex-col justify-center gap-10 text-2xl font-medium font-['DM_sans'] pr-15">
          <h3 className="text-teal-950 text-6xl font-bold tracking-wide leading-12">
            Noverta’s commitment is in our Nature
          </h3>
          <p className="text-[#063B27A8] leading-10 tracking-wide">
            We support projects that contribute to a sustainable model
          </p>
          <p className="font-inter leading-10 tracking-tight">
            We connect people and institutions with verified green projects
            worldwide, making it easy to invest where the planet needs it most.
            We connect people and institutions with verified green projects
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
