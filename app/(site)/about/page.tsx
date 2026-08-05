import type { Metadata } from "next";
import { SitePageHero } from "../../../components/site/SitePageHero";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { aboutContent } from "../../../content/site/migration-pages";
import styles from "../_components/SitePages.module.css";

export const metadata: Metadata = { title: "About | Carly Clark Zimmer" };

export default function AboutPage() {
  return (
    <>
      <SitePageHero
        description={aboutContent.introduction}
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
      />
      {aboutContent.sections.map((section, index) => (
        <Section className={index % 2 ? styles.muted : styles.split} key={section.heading}>
          {index % 2 ? (
            <div className={styles.split}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ) : (
            <>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </>
          )}
        </Section>
      ))}
      <Section className={styles.accent}>
        <p className={styles.quote}>Lead with clarity and courage instead of internal conflict.</p>
        <Button href="/services" variant="outlineLight">Explore services</Button>
      </Section>
    </>
  );
}
