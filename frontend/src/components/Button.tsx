interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "w-full px-6 py-2.5 font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 focus:ring-gray-400";

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
