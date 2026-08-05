import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import styles from "./SitePageHero.module.css";

type SitePageHeroProps = {
  description: string;
  eyebrow: string;
  title: string;
};

export function SitePageHero({ description, eyebrow, title }: SitePageHeroProps) {
  return (
    <Section as="header" className={styles.hero}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </Section>
  );
}
