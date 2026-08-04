import type { ElementType, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  as: Component = "section",
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <Component className={`${styles.section} ${className}`} id={id}>
      {children}
    </Component>
  );
}
