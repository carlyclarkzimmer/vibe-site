import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { deliveryEpisodes } from "@/content/campaigns/beyond-the-bottleneck-delivery";
import { ListeningExperience } from "./_components/ListeningExperience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Beyond the Bottleneck | Listening Library",
  description: "The private Beyond the Bottleneck audio-series listening library.",
  robots: { index: false, follow: false },
};

export default function BeyondTheBottleneckDeliveryPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <h1>Beyond <em>the</em> Bottleneck</h1>
          <h2>Listening Library</h2>
          <p>Take Beyond the Bottleneck with you.</p>
          <p className={styles.heroOrientation}>Listen to the full series in your favorite podcast app.</p>
          <Button className={styles.appleButton} href="https://podcasts.helloaudio.fm/subscribe/4e65bd8b-48e0-46c3-a41f-844a5435a02d/ErJfjS4Um0" newTab>Listen in your favorite podcast app</Button>
        </div>
      </header>

      <ListeningExperience episodes={deliveryEpisodes} />

      <section className={styles.patternSection} id="pattern-interrupt" aria-labelledby="pattern-title">
        <div className={styles.patternLead}>
          <p className={styles.eyebrow}>Pattern Interrupt</p>
          <h2 id="pattern-title">Ready to interrupt the pattern instead of just recognizing it?</h2>
          <p>[SHORT INTRODUCTION / DESCRIPTION]</p>
        </div>
        <div className={styles.patternDetails}>
          <article><h3>What Pattern Interrupt is</h3><p>[DESCRIPTION]</p></article>
          <article><h3>Who it&apos;s for</h3><p>[DESCRIPTION]</p></article>
          <article><h3>How it works</h3><p>[DESCRIPTION]</p></article>
          <article><h3>What you&apos;ll walk away with</h3><p>[DESCRIPTION]</p></article>
          <article><h3>Investment</h3><p>[PRICE / DETAILS]</p></article>
          <span className={styles.patternButton}>[PRIMARY CTA BUTTON]</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Beyond the Bottleneck</p>
        <p>Created and hosted by Carly Clark Zimmer</p>
        <p>© carlyclarkzimmer.com</p>
      </footer>
    </div>
  );
}
