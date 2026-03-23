import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-18 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Your Money <br />
            <span className="text-green-600">Our Planet</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-md">
            Earn real returns while funding green energy projects that fight
            climate changes.
          </p>
          <div className="flex gap-6">
            <Button
              label="Invest Now"
              onClick={() => navigate("/updateme")}
              variant="cta"
            />
            <Button
              label="Explore"
              onClick={() => navigate("/explore")}
              variant="secondary"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 w-120 border border-gray-200">
          <p className="text-4xl font-extrabold text-gray-900 mb-1">
            Build a Solar Farm
          </p>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
            alt="a solar farm"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <p className="text-xl font-extrabold text-gray-900">£120,000</p>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Estimated resturn</span>
              <span className="text-green-600 font-semibold">8.56 p.a.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">CO₂ offset</span>
              <span className="text-green-600 font-semibold">200 tonnes</span>
            </div>
          </div>

          <div className="mt-5 bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700">Solar Farm UK</span>
              <span className="text-green-600 font-semibold">73% funded</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
