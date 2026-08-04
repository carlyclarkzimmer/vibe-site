import type { ElementType, ReactNode } from "react";
import styles from "./EditorialHeading.module.css";

type EditorialHeadingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: "hero" | "large" | "compact";
};

export function EditorialHeading({
  as: Component = "h2",
  children,
  className = "",
  size = "large",
}: EditorialHeadingProps) {
  return (
    <Component className={`${styles.heading} ${styles[size]} ${className}`}>
      {children}
    </Component>
  );
}
