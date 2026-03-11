import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`btn btn--${variant} btn--${size} ${className}`.trim()}>
      {children}
    </Link>
  );
}
