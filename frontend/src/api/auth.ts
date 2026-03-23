import type { loginCredentials, registrationPayload } from "./types";
import type { newUserPayload } from "./types";

export const authenticateUser = async (
  credentials: loginCredentials,
): Promise<string> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credentials),
    },
  );

  if (!response.ok) throw new Error("Invalid username or password.");
  return response.json();
};

export const registerNewUser = async (
  userData: newUserPayload,
): Promise<void> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData),
    },
  );
  if (!response.ok) {
    const errorPayload = await response.json();
    const errorMessage = errorPayload.detail || "A server error has occurred";
    throw new Error(errorMessage);
  }
};

export const registerInterest = async (
  userData: registrationPayload,
): Promise<void> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/register_interest`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData),
    },
  );
  if (!response.ok) {
    const errorPayload = await response.json();
    const errorMessage =
      errorPayload.detail ||
      "An error has occurred during the registration process";
    throw new Error(errorMessage);
  }
};
