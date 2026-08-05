import type { Metadata } from "next";
import { SitePageHero } from "../../../components/site/SitePageHero";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { servicesContent } from "../../../content/site/migration-pages";
import styles from "../_components/SitePages.module.css";

export const metadata: Metadata = { title: "Work With Carly | Carly Clark Zimmer" };

export default function ServicesPage() {
  return (
    <>
      <SitePageHero {...servicesContent} />
      <Section className={styles.cards}>
        {servicesContent.offers.map((offer, index) => (
          <article className={styles.card} key={offer.name}>
            <div>
              <p>0{index + 1}</p>
              <h2>{offer.name}</h2>
              <p>{offer.detail}</p>
            </div>
            <footer>{offer.outcome}</footer>
          </article>
        ))}
      </Section>
      <Section className={`${styles.split} ${styles.muted}`}>
        <h2>Not sure where to begin?</h2>
        <div>
          <p>
            Start with a conversation about the constraint you are carrying and the kind of
            support that would create real movement.
          </p>
          <Button href="/contact">Start the conversation</Button>
        </div>
      </Section>
    </>
  );
}
