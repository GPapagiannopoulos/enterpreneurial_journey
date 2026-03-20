import { useState } from "react";
import type { SubmitEventHandler } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api/auth";
import type { loginCredentials } from "../api/types";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmission: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    const userCredentials: loginCredentials = {
      email,
      password,
    };

    try {
      const token = await authenticateUser(userCredentials);
      localStorage.setItem("authToken", token);
      navigate("/catalogue");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Account Login
        </h2>

        <form onSubmit={handleSubmission} className="space-y-4">
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

          {error && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <div className="pt-2 space-y-3">
            <Button label="Submit" type="submit" variant="primary" />
            <div className="flex gap-3">
              <Button
                label="Sign-Up"
                type="button"
                onClick={() => navigate("/signup")}
                variant="secondary"
              />
              <Button
                label="Home"
                type="button"
                onClick={() => navigate("/")}
                variant="secondary"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
