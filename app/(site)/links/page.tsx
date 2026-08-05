import type { Metadata } from "next";
import { PlaceholderSignupForm } from "../../../components/site/PlaceholderSignupForm";
import { SitePageHero } from "../../../components/site/SitePageHero";
import { Section } from "../../../components/ui/Section";
import { resourcesContent } from "../../../content/site/migration-pages";
import styles from "../_components/SitePages.module.css";

export const metadata: Metadata = { title: "Resources | Carly Clark Zimmer" };

export default function LinksPage() {
  return (
    <>
      <SitePageHero {...resourcesContent} />
      <Section className={styles.accent} id="newsletter">
        <p className={styles.label}>Decision Points</p>
        <h2 className={styles.sectionTitle}>A newsletter for the decisions that change everything.</h2>
        <p>
          Short audio reflections and writing for untangling the patterns that interrupt flow and
          slow aligned growth.
        </p>
        <PlaceholderSignupForm id="decision-points" submitLabel="Join the newsletter" />
      </Section>
      <Section className={styles.cards}>
        {resourcesContent.resources.map((resource) => (
          <article className={styles.card} key={resource.title}>
            <div>
              <p>{resource.label}</p>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
            </div>
            <footer>Resource details coming soon</footer>
          </article>
        ))}
      </Section>
    </>
  );
}
