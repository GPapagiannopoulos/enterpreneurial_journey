interface ButtonProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "cta";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  active,
  icon,
  variant = "primary",
  iconPosition,
  type = "button",
}: ButtonProps) {
  const resolvedPosition =
    iconPosition ?? (variant === "primary" ? "left" : "right");

  const baseStyles =
    "font-normal transition-colors duration-300 focus:outline-none focus:font-bold";

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
        ? "self-stretch px-3 py-1 rounded-sm outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex flex-col justify-start items-start gap-3 hover:bg-[#BDDBCDA6] hover:border-[#063B2796] hover:font-bold"
        : "px-2 py-2 rounded-full text-teal-950 font-inter hover:font-bold" +
          (active ? " font-bold" : " font-normal");

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
    >
      <span className="relative inline-flex items-center gap-1">
        <span className="invisible font-bold inline-flex items-center gap-3">
          {resolvedPosition === "left" ? (
            <>
              {icon}
              {label}
            </>
          ) : (
            <>
              {label}
              {icon}
            </>
          )}
        </span>
        <span className="absolute inset-0 inline-flex items-center justify-center gap-3">
          {resolvedPosition === "left" ? (
            <>
              {icon}
              {label}
            </>
          ) : (
            <>
              {label}
              {icon}
            </>
          )}
        </span>
      </span>
    </button>
  );
}
