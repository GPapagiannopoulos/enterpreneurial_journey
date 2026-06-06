import { useState, type SubmitEventHandler } from "react";
import InputField from "../../../components/ui/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import type { registrationPayload } from "../../../api/types";
import { registerInterest } from "../../../api/auth";
import logo from "../../../assets/icons/Navbar/Logo.svg";
import waitlistImage from "../../../assets/icons/ContactUs/WindTurbine.png";

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [role, setRole] = useState<string>("Investor");
  const [emailAddress, setEmailAddress] = useState<string>(
    location.state?.email ?? "",
  );
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    emailRegex.test(emailAddress) &&
    (role === "Investor" || message.trim() !== "");

  const RegisterInterest: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    if (!emailRegex.test(emailAddress)) {
      setError(
        "This does not look like a valid email address. Please try again.",
      );
      return;
    }

    const newUserInterest: registrationPayload = {
      firstName,
      lastName,
      emailAddress,
      role,
    };

    try {
      await registerInterest(newUserInterest);
      setSuccess(true);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <section className="flex justify-center px-5.5 pt-12 pb-16">
      <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col w-full">
        <div className="p-3">
          <img
            src={waitlistImage}
            alt=""
            className="w-full aspect-video object-cover object-top rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-5 px-6 pb-8">
          <div className="flex items-start gap-2">
            <img src={logo} alt="Noverta" className="h-8 w-8" />
            <div className="flex flex-col">
              <h1 className="text-black text-3xl font-bold font-raleway">
                Join waitlist
              </h1>
              <p className="text-neutral-500 text-sm font-inter">
                Sign up to get started
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-inter">
              <input
                type="radio"
                name="role"
                value="Investor"
                checked={role === "Investor"}
                onChange={() => setRole("Investor")}
                className="w-5 h-5 appearance-none rounded-full border-2 border-zinc-900 checked:bg-[#063B27] checked:shadow-[inset_0_0_0_3px_white]"
              />
              Investor
            </label>
            <label className="flex items-center gap-2 text-sm font-inter">
              <input
                type="radio"
                name="role"
                value="Developer"
                checked={role === "Developer"}
                onChange={() => setRole("Developer")}
                className="w-5 h-5 appearance-none rounded-full border-2 border-zinc-900 checked:bg-[#063B27] checked:shadow-[inset_0_0_0_3px_white]"
              />
              Developer
            </label>
          </div>

          <form onSubmit={RegisterInterest} className="flex flex-col gap-4">
            <InputField
              label="First Name"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
            <InputField
              label="Last Name"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
            <InputField
              label="Email"
              type="email"
              value={emailAddress}
              placeholder="Email"
              onChange={(e) => setEmailAddress(e.target.value)}
              required={true}
            />
            {role === "Developer" && (
              <InputField
                label="Message"
                type="text"
                placeholder="Tell us about your project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required={true}
              />
            )}

            {error && (
              <div className="p-3 bg-red-50 text-red-500 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-2 w-full rounded-xl py-3 font-raleway text-base transition-colors duration-200 ${
                isFormValid
                  ? "bg-[#063B27] text-white"
                  : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
              }`}
            >
              Register your interest!
            </button>
          </form>

          {success && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
              <div className="bg-white rounded-xl p-8 text-center max-w-sm">
                <h2 className="font-bold text-xl mb-2">You're on the list!</h2>
                <p className="text-gray-500 mb-6">
                  We'll be in touch when we launch.
                </p>
                <button
                  className="bg-gray-200 transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-600 hover:border-gray-300 border rounded-3xl py-1 px-6 my-1"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
