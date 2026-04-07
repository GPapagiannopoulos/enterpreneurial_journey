import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="bg-linear-to-br from-green-800 to-green-500 max-w-2xl mx-auto text-center rounded-2xl mb-12 p-6 md:p-8">
        <h2 className="font-extrabold text-2xl md:text-4xl text-white leading-loose">
          Ready to Put Your Money Where Your{" "}
          <span className="bg-white text-green-700 rounded-xl p-2 mx-4">
            Heart Is?
          </span>
        </h2>
        <p className="text-white mt-4">
          Thousands of people are already investing in the future they want to
          see.
        </p>
        <p className="font-bold text-white">Your turn.</p>
        <button
          className="bg-white rounded-3xl my-12 px-6 py-2 flex items-center gap-2 mx-auto text-green-700 font-bold"
          onClick={() => navigate("/updateme")}
        >
          <Sparkles size={16} />
          Join the Movement
        </button>
      </div>
    </section>
  );
}
