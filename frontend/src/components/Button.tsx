interface ButtonProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  variant?: "primary" | "secondary" | "cta";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  active,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-bold transition-colors duration-300 focus:outline-none focus:font-bold";

  const ctaStyles =
    "flex items-center justify-center gap-2.5 whitespace-nowrap" +
    " px-9.5 py-4.5" +
    " rounded-full border border-[#27874F]" +
    " bg-white text-[#27874F]" +
    " font-raleway text-xl" +
    " hover:bg-[#27874F] hover:text-white" +
    " focus:ring-[#27874F]";

  const variantStyles =
    variant === "cta"
      ? ctaStyles
      : variant === "primary"
        ? "flex items-center justify-center whitespace-nowrap px-9.5 py-4.5 bg-green-700 rounded-[40px] border text-white text-xl font-bold font-raleway"
        : "px-2 py-2 rounded-full text-teal-950 font-inter hover:font-bold" +
          (active ? " font-bold" : " font-normal");

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
    >
      <span className="relative inline-block">
        <span className="invisible font-bold">{label}</span>
        <span className="absolute inset-0">{label}</span>
      </span>
    </button>
  );
}
