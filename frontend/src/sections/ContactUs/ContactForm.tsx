import { useState, type SubmitEventHandler } from "react";
import InputField from "../../components/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import type { registrationPayload } from "../../api/types";
import { registerInterest } from "../../api/auth";
import Button from "../../components/Button";
import starsSvg from "../../assets/icons/stars.svg";

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
    <section className="flex flex-col gap-25 pt-35 pb-28 border-b">
      <div className="text-black text-7xl font-bold font-raleway">
        Contact Us
      </div>
      <div className="relative overflow-hidden bg-[#F3F3F3] border-zinc-100 rounded-[45px] flex flex-col justify-start gap-10 pt-15 pb-20 pl-25">
        <img
          src={starsSvg}
          alt=""
          aria-hidden="true"
          className="absolute -right-36 top-98 -translate-y-1/2 z-10 pointer-events-none"
        />
        <div className="flex items-start gap-16">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="Investor"
              checked={role === "Investor"}
              onChange={() => setRole("Investor")}
              className="w-7 h-7 appearance-none rounded-full border-2 border-zinc-900 checked:bg-[#B9FF66] checked:shadow-[inset_0_0_0_4px_white]"
            />{" "}
            Investor
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="Developer"
              checked={role === "Developer"}
              onChange={() => setRole("Developer")}
              className="w-7 h-7 appearance-none rounded-full border-2 border-zinc-900 checked:bg-[#B9FF66] checked:shadow-[inset_0_0_0_4px_white]"
            />{" "}
            Developer
          </label>
        </div>
        <div className="pb-8">
          <form onSubmit={RegisterInterest} className="flex flex-col gap-6.25">
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
              label="Email Address"
              type="text"
              value={emailAddress}
              placeholder="Email Address"
              onChange={(e) => setEmailAddress(e.target.value)}
              required={true}
            />
            <label className={role === "Investor" ? "hidden" : "h-47.5"}>
              <InputField
                label="Message"
                type="text"
                placeholder="Tell us about your project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required={false}
              />
            </label>
            {error && (
              <div className="p-3 bg-red-50 text-red-500 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}

            {success && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 text-center max-w-sm">
                  <h2 className="font-bold text-xl mb-2">
                    You're on the list!
                  </h2>
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

            <div className="mt-12 text-center">
              <Button
                label="Register Your Interest"
                type="submit"
                variant="cta"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
