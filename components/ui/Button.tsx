import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  newTab?: boolean;
  sentenceCase?: boolean;
  variant?: "accent" | "dark" | "outline" | "outlineLight";
};

export function Button({
  children,
  className = "",
  href,
  newTab = false,
  sentenceCase = false,
  variant = "accent",
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${sentenceCase ? styles.sentenceCase : ""} ${className}`}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
