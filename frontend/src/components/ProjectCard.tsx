export default function ProjectCard() {
  return (
    <div className="w-82.5 bg-white relative rounded-xl top-12.25 right-10.5 shadow-2xl">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
          alt="a solar farm"
          className="w-full h-52 object-cover rounded-t-xl"
        />
        <div className="left-3 top-2 absolute bg-amber-500/90 rounded-full shadow-md p-2">
          <span className="text-white text-base font-inter">☀️ Solar</span>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-3">
        <div className="text-neutral-800 text-xl font-medium font-inter">
          Syne Solar Farm
        </div>
        <div className="text-neutral-500 text-sm font-inter">
          Sussex, UK • GreenTech Energy
        </div>
        <div className="self-stretch h-2.5 rounded-full overflow-hidden bg-linear-to-r from-green-600 to-green-400" />
        <div className="flex justify-between items-center">
          <div className="text-green-600 text-sm font-semibold font-inter">
            73% Funded
          </div>
          <div className="text-neutral-500 text-sm font-inter">
            £182.5k of 250k
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-green-600 font-semibold font-inter">
              7.2%
            </span>
            <span className="text-neutral-500 text-sm font-inter">return</span>
          </div>
          <span className="text-neutral-500 text-sm font-inter">5 years</span>
        </div>
        <div className="h-11 bg-stone-100 pl-3 flex items-center gap-2 rounded-2xl">
          <span>🌱</span>
          <span className="text-neutral-500 text-sm font-inter">
            Avoids{" "}
            <span className="text-green-600 font-semibold">420t CO₂</span>{" "}
            annually
          </span>
        </div>
        <div className="h-12 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white font-medium font-inter">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
}
