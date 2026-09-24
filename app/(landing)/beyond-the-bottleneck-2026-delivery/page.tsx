import type { Metadata } from "next";
import Image from "next/image";
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
          <p>All 25 conversations, show notes, and resources in one place.</p>
          <p className={styles.heroOrientation}>Start at the beginning, or choose the episode that speaks most to your experience.</p>
          {/* TODO: Replace this placeholder anchor with the approved Apple Podcasts URL. */}
          <Button className={styles.appleButton} href="#apple-podcasts-url-todo">Listen on Apple Podcasts</Button>
        </div>
        <div className={styles.heroImage}>
          <Image alt="Carly Clark Zimmer centered among the Beyond the Bottleneck contributors" fill priority sizes="100vw" src="/btb-hero-carly-center.png" unoptimized />
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
