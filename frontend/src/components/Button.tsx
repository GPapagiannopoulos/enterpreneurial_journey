interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
