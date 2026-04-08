import { useState } from "react";
import type { SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "../api/auth";
import type { newUserPayload } from "../api/types";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDOB] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conf_password, setConfPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const RegisterUser: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length <= 8) {
      setError("Password must exceed 8 characters.");
      return;
    }
    if (password !== conf_password) {
      setError("Cryptographic verification failed. Passwords do not match.");
      return;
    }

    const newUserData: newUserPayload = {
      firstName,
      lastName,
      email,
      dob,
      password,
    };

    try {
      await registerNewUser(newUserData);
      navigate("/login");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Account Registration
        </h2>

        <form onSubmit={RegisterUser} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <InputField
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required={true}
          />
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <InputField
            label="Confirm Password"
            type="password"
            value={conf_password}
            onChange={(e) => setConfPassword(e.target.value)}
            required={true}
          />

          {error && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <div className="pt-4 space-y-3">
            <Button label="Sign-Up" type="submit" variant="primary" />
            <Button
              label="Log In"
              type="button"
              onClick={() => navigate("/login")}
              variant="secondary"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
