import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import styles from "./SitePlaceholderPage.module.css";

type SitePlaceholderPageProps = {
  eyebrow: string;
  title: string;
};

export function SitePlaceholderPage({ eyebrow, title }: SitePlaceholderPageProps) {
  return (
    <Section as="header" className={styles.page}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>
        This page is being prepared for migration. Its approved content and supporting
        materials will be added here before publication.
      </p>
    </Section>
  );
}
