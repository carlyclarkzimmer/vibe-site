import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import {
  deliveryEpisodes,
  directoryCards,
  podcastAppUrl,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
import { ListeningExperience } from "./_components/ListeningExperience";
import { PatternInterruptSection } from "./_components/PatternInterruptSection";
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

      <PatternInterruptSection id="pattern-interrupt" />

      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Beyond the Bottleneck</p>
        <p>Created and hosted by Carly Clark Zimmer</p>
        <p>© carlyclarkzimmer.com</p>
      </footer>
    </div>
  );
}
