import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  deliveryEpisodes,
  directoryCards,
  podcastAppUrl,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
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
        <div className={styles.heroLayout}>
          <p className={styles.heroConfirmation}>You&apos;re in!</p>
          <h1>Welcome to Beyond the Bottleneck</h1>
          <p className={styles.heroEyebrow}>The Complete Audio Series</p>
          <p className={styles.heroOrientation}>Choose how you want to listen.</p>
          <Button className={styles.podcastButton} href={podcastAppUrl} newTab>🎧 Listen in Your Favorite Podcast App</Button>
          <div className={styles.heroSecondaryOption}>
            <a href="#episode-directory">↓ Listen right here</a>
            <p>Scroll down to choose an episode.</p>
          </div>
        </div>
      </header>

      <ListeningExperience cards={directoryCards} episodes={deliveryEpisodes} />

      <section className={styles.patternInterrupt} id="pattern-interrupt" aria-labelledby="pattern-interrupt-title">
        <Image
          alt="Carly Clark Zimmer seated on stone steps in a magenta velvet jacket"
          className={styles.patternInterruptImage}
          fill
          sizes="100vw"
          src="/carly-about-hero.png"
          unoptimized
        />
        <div className={styles.patternInterruptOverlay} aria-hidden="true" />
        <div className={styles.patternInterruptContent}>
          <p className={styles.patternInterruptEyebrow}>Ready to work on your bottleneck?</p>
          <h2 id="pattern-interrupt-title">
            <span>You&apos;ve heard 24 ways</span>
            <span>a bottleneck can show up.</span>
            <span className={styles.patternInterruptAccent}>Now interrupt one of yours.</span>
          </h2>
          <div className={styles.patternInterruptDivider} aria-hidden="true" />
          <p className={styles.patternInterruptCopy}>
            <em>The Pattern Interrupt</em> is 21 intentional coaching days with me over Voxer. We&apos;ll identify one pattern that keeps putting you back in the bottleneck, catch it while it&apos;s happening, practice a different response, and turn that shift into one concrete change in your business.
          </p>
          <ul className={styles.patternInterruptSnapshot} aria-label="Pattern Interrupt program details">
            <li>One Pattern</li>
            <li>21 Days</li>
            <li>One Concrete Change</li>
            <li>$97</li>
          </ul>
          <a
            className={styles.patternInterruptButton}
            href="https://carlyclarkzimmer.thrivecart.com/the-pattern-interrupt/"
            rel="noreferrer"
            target="_blank"
          >
            Explore the Pattern Interrupt →
          </a>
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
