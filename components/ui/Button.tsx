import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  newTab?: boolean;
  variant?: "accent" | "dark" | "outline" | "outlineLight";
};

export function Button({
  children,
  className = "",
  href,
  newTab = false,
  variant = "accent",
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
