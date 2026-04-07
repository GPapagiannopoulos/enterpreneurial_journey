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

  const ctaStyles = [
    "flex items-center justify-center gap-[10px] whitespace-nowrap",
    "h-[60px] px-[38px] py-[18px]",
    "rounded-[100px] border border-[#27874F]",
    "bg-white text-[#27874F]",
    "font-raleway text-[18px] leading-[24px]",
    "hover:bg-[#27874F] hover:text-white",
    "focus:ring-[#27874F]",
  ].join(" ");

  const variantStyles =
    variant === "cta"
      ? ctaStyles
      : variant === "primary"
        ? "bg-green-600 text-white hover:bg-blue-700 focus:ring-green-500"
        : "px-2 py-2 rounded-full text-black font-light font-raleway hover:text-[#27874F] focus:ring-[#27874F]";

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
