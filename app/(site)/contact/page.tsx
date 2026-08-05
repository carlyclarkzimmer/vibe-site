import type { Metadata } from "next";
import { SitePageHero } from "../../../components/site/SitePageHero";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { contactContent } from "../../../content/site/migration-pages";
import styles from "../_components/SitePages.module.css";

export const metadata: Metadata = { title: "Contact | Carly Clark Zimmer" };

export default function ContactPage() {
  return (
    <>
      <SitePageHero {...contactContent} />
      <Section className={styles.contactGrid}>
        <article className={styles.contactCard}>
          <h2>Coaching</h2>
          <p>For mentorship, coaching, and support, start with Carly directly.</p>
          <a href="mailto:carly@carlyclarkzimmer.com">carly@carlyclarkzimmer.com</a>
        </article>
        <article className={styles.contactCard}>
          <h2>Speaking</h2>
          <p>For guest teaching, speaking, and podcast appearances, send the details to support.</p>
          <a href="mailto:support@carlyclarkzimmer.com">support@carlyclarkzimmer.com</a>
        </article>
        <article className={styles.contactCard}>
          <h2>Client support</h2>
          <p>Existing clients can reach the support team for technical help.</p>
          <a href="mailto:support@carlyclarkzimmer.com">support@carlyclarkzimmer.com</a>
        </article>
      </Section>
      <Section className={`${styles.split} ${styles.muted}`}>
        <h2>Prefer to talk it through?</h2>
        <div>
          <p>
            Book a consultation to talk about what is changing, what is getting in the way, and
            what support might be useful.
          </p>
          <Button href="https://carlyclarkzimmer.as.me">Book a consultation</Button>
        </div>
      </Section>
    </>
  );
}
