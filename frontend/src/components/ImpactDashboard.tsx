import { TrendingUp } from "lucide-react";
import ProgressBar from "./ProgressBar";

export default function ImpactDashboard() {
  return (
    <div className="w-118.75 left-42.5 top-32.5 p-10 shadow-2xl rounded-2xl bg-white outline outline-neutral-400 absolute flex flex-col gap-4">
      <div className="text-neutral-500 text-lg font-semibold font-inter">
        Your Impact Dashboard
      </div>

      <div className="w-96 h-40 bg-linear-to-b from-green-600 to-green-800 rounded-2xl flex flex-col p-6 font-inter">
        <div className="text-white text-sm font-normal opacity-90">
          Portfolio Value
        </div>
        <div className="text-white text-5xl font-bold tracking-tight mt-1">
          £10,500
        </div>
        <div className="flex items-center gap-2 text-white text-sm mt-auto">
          <TrendingUp className="w-4 h-4" />
          +7.2% average return
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 flex flex-col p-4 bg-stone-100 rounded-2xl gap-1">
          <span className="text-3xl">🌍</span>
          <span className="text-green-600 text-2xl font-bold font-inter">
            42.5t
          </span>
          <span className="text-neutral-500 text-xs font-inter">
            CO₂ Avoided
          </span>
        </div>
        <div className="flex-1 flex flex-col p-4 bg-stone-100 rounded-2xl gap-1">
          <span className="text-3xl">🏡</span>
          <span className="text-green-600 text-2xl font-bold font-inter">
            3
          </span>
          <span className="text-neutral-500 text-xs font-inter">
            Active Projects
          </span>
        </div>
      </div>

      <div className="flex flex-col p-4 gap-3">
        <div>
          <div className="flex justify-between text-sm font-inter mb-1">
            <span>Solar Energy</span>
            <span>73%</span>
          </div>
          <ProgressBar raised={73} target={100} />
        </div>
        <div>
          <div className="flex justify-between text-sm font-inter mb-1">
            <span>Wind Energy</span>
            <span>64%</span>
          </div>
          <ProgressBar raised={64} target={100} />
        </div>
      </div>
    </div>
  );
}
