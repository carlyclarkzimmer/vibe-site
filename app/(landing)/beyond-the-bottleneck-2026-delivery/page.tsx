import type { Metadata } from "next";
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
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Beyond the Bottleneck</p>
          <h1>The Complete Audio Series</h1>
          <p className={styles.heroLead}>Take Beyond the Bottleneck with you.</p>
          <p className={styles.heroOrientation}>Listen to all 24 conversations in your favorite podcast app, so the entire series is waiting for you whenever you&apos;re ready to listen.</p>
          <Button className={styles.podcastButton} href={podcastAppUrl} newTab>Listen in Your Podcast App →</Button>
          <p className={styles.heroSecondary}>Or explore the individual conversations below.</p>
        </div>
      </header>

      <ListeningExperience cards={directoryCards} episodes={deliveryEpisodes} />

      <a className={styles.stickyPodcastCta} href={podcastAppUrl} rel="noreferrer" target="_blank">
        Listen to the complete series →
      </a>

      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Beyond the Bottleneck</p>
        <p>Created and hosted by Carly Clark Zimmer</p>
        <p>© carlyclarkzimmer.com</p>
      </footer>
    </div>
  );
}
