import type { loginCredentials } from "./types";
import type { newUserPayload } from "./types";

export const authenticateUser = async (
  credentials: loginCredentials,
): Promise<string> => {
  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("Invalid username or password.");
  return response.json();
};

export const registerNewUser = async (
  userData: newUserPayload,
): Promise<void> => {
  const response = await fetch("http://localhost:8000/api/auth/signup", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorPayload = await response.json();
    const errorMessage = errorPayload.detail || "A server error has occurred";
    throw new Error(errorMessage);
  }
};
