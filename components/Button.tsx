import { ReactNode } from "react";

type ButtonVariant = "yellow" | "coral" | "outline" | "outline-light" | "dark";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  yellow:
    "bg-yellow text-ink hover:bg-yellow-dark border border-yellow hover:border-yellow-dark",
  coral: "bg-coral text-white hover:bg-[#d6543f] border border-coral hover:border-[#d6543f]",
  outline: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  "outline-light":
    "bg-transparent text-white border border-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-cream hover:bg-ink-soft border border-ink hover:border-ink-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "yellow",
  size = "md",
  icon,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
