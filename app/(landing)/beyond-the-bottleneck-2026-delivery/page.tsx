import type { Metadata } from "next";
import Link from "next/link";
import { campaignMeta } from "@/content/campaigns/beyond-the-bottleneck";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Beyond the Bottleneck | Listening Tour Delivery",
  description: campaignMeta.description,
  robots: { index: false, follow: false },
};

export default function BeyondTheBottleneckDeliveryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro} aria-labelledby="delivery-title">
        <p className={styles.eyebrow}>Beyond the Bottleneck</p>
        <h1 id="delivery-title">
          Your listening tour <em>starts here.</em>
        </h1>
        <p className={styles.lede}>{campaignMeta.description}</p>
      </section>

      <section className={styles.delivery} aria-labelledby="episodes-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>The audio series</p>
          <h2 id="episodes-title">Listening-tour episodes</h2>
        </div>

        <article className={styles.episode}>
          <div className={styles.episodeNumber}>01</div>
          <div className={styles.episodeBody}>
            <p className={styles.placeholder}>[Approved episode title]</p>
            <div className={styles.playerPlaceholder}>
              [Approved audio player or episode link]
            </div>
            <p className={styles.notesPlaceholder}>[Approved episode notes]</p>
          </div>
        </article>

        <aside className={styles.editorialNote} aria-label="Content still needed">
          <p className={styles.eyebrow}>Before this page goes live</p>
          <p>
            Add the approved welcome copy, episode titles, audio destinations,
            release schedule, and any episode notes or calls to action.
          </p>
        </aside>
      </section>

      <section className={styles.returnSection}>
        <p>Want to revisit the series introduction?</p>
        <Link href="/beyond-the-bottleneck-2026">
          Return to Beyond the Bottleneck
        </Link>
      </section>
    </main>
  );
}
