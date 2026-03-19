interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "cta";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  const variantStyles =
    variant === "cta"
      ? "px-12 py-2 rounded-full bg-green-600 text-lg text-white hover:bg-green-700 focus:ring-green-500"
      : variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
        : "px-2 py-2 rounded-full bg-white-600 text-lg text-gray-500 hover:text-green-700 focus:ring-green-500";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
