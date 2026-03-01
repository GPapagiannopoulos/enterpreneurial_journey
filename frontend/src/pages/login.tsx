import { useState } from "react";
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

  const handleSubmission = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);

    const userCredentials: loginCredentials = {
      email: email,
      password: password,
    };

    try {
      const token = await authenticateUser(userCredentials);
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <main className="auth-container">
      <h2>Account Login</h2>
      <form onSubmit={handleSubmission}>
        <InputField
          label="email-address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <InputField
          label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        {error && <div className="error-name">{error}</div>}
        <Button
          label="Sign-Up"
          onClick={() => navigate("/signup")}
          variant="secondary"
        />
        <Button
          label="Home"
          onClick={() => navigate("/")}
          variant="secondary"
        />
        <Button label="Submit" onClick={() => {}} variant="primary" />
      </form>
    </main>
  );
}
