import type { Metadata } from "next";
import { SitePageHero } from "../../../components/site/SitePageHero";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { clientResultsContent } from "../../../content/site/migration-pages";
import styles from "../_components/SitePages.module.css";

export const metadata: Metadata = { title: "Client Results | Carly Clark Zimmer" };

export default function ClientResultsPage() {
  return (
    <>
      <SitePageHero {...clientResultsContent} />
      <Section className={styles.cards}>
        {clientResultsContent.stories.map((story) => (
          <article className={styles.card} key={story.name}>
            <div>
              <p>{story.role}</p>
              <h2>{story.name}</h2>
              <p>{story.challenge}</p>
            </div>
            <footer>{story.result}</footer>
          </article>
        ))}
      </Section>
      <Section className={`${styles.split} ${styles.muted}`}>
        <h2>A pattern can change.</h2>
        <div>
          <p>
            The work is not about becoming someone else. It is about making your role, systems,
            and decisions fit the person you are becoming.
          </p>
          <Button href="/services">Explore ways to work together</Button>
        </div>
      </Section>
    </>
  );
}
