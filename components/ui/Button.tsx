import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "accent" | "dark" | "outline" | "outlineLight";
};

export function Button({
  children,
  className = "",
  href,
  variant = "accent",
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
