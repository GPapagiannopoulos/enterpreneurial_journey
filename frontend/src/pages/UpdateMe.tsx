import { useState, type SubmitEventHandler } from "react";
import InputField from "../components/InputField";
import { useNavigate, useLocation } from "react-router-dom";
import type { registrationPayload } from "../api/types";
import { registerInterest } from "../api/auth";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function UpdateMe() {
  const navigate = useNavigate();
  const location = useLocation();

  const [role, setRole] = useState<string>("Investor");
  const [emailAddress, setEmailAddress] = useState<string>(
    location.state?.email ?? "",
  );
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
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
    <section>
      <Navbar />
      <div className="mx-4 my-8 md:m-14 px-4 md:px-8 max-w-2xl md:mx-auto border border-gray-200 rounded-3xl shadow-2xl">
        <div className="text-center pt-12 pb-8">
          <h2 className="font-bold text-2xl">
            Register your interest and we will keep you updated
          </h2>
        </div>
        <div className="mb-6 bg-gray-200 max-w-sm- h-10 mx-auto border-0 rounded-3xl flex items-center justify-evenly px-1">
          <button
            className={
              role === "Investor"
                ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch flex items-center gap-2"
                : "transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch flex items-center gap-2"
            }
            onClick={() => setRole("Investor")}
          >
            For Investors
          </button>
          <button
            className={
              role === "Developer"
                ? "bg-white text-green-600 rounded-3xl shadow-sm py-1 px-6 my-1 self-stretch flex items-center gap-2"
                : "transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-600 rounded-3xl py-1 px-6 my-1 self-stretch flex items-center gap-2"
            }
            onClick={() => setRole("Developer")}
          >
            For Developers
          </button>
        </div>
        <div className="pb-8">
          <form onSubmit={RegisterInterest}>
            <InputField
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
            <InputField
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
            <InputField
              label="Email Address"
              type="text"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required={true}
            />

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
