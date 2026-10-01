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
          <p className={styles.heroEyebrow}>The Complete Audio Series</p>
          <h1>Beyond <em>the</em><br />Bottleneck</h1>
          <span aria-hidden="true" className={styles.heroTitleRule}>
            <span>✦</span>
          </span>
          <div className={styles.heroPortrait}>
            <Image
              alt="Carly Clark Zimmer"
              className={styles.heroImage}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              src="/beyond-the-bottleneck-delivery-hero.png"
              unoptimized
            />
          </div>
          <p className={styles.heroOrientation}>Listen to all 24 conversations in your favorite podcast app, so the entire series is waiting for you whenever you&apos;re ready to listen.</p>
          <Button className={styles.podcastButton} href={podcastAppUrl} newTab>Listen in Your Podcast App →</Button>
        </div>
      </header>

      <ListeningExperience cards={directoryCards} episodes={deliveryEpisodes} />

      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Beyond the Bottleneck</p>
        <p>Created and hosted by Carly Clark Zimmer</p>
        <p>© carlyclarkzimmer.com</p>
      </footer>
    </div>
  );
}
