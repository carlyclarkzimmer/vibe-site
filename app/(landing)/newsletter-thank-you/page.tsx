/* eslint-disable @next/next/no-img-element -- preserve local resource artwork with intentional editorial crops */
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Newsletter Thank You" };

export default function NewsletterThankYouPage() {
  return (
    <div className={styles.page}>
      <section className={styles.confirmation}>
        <div className={styles.confirmationInner}>
          <p className={styles.eyebrow}>Thank You!</p>
          <h1>💌 Check your email for Next Steps.</h1>
          <p className={styles.reminder}>📇 Be sure to add our address to your contacts to make sure we don&apos;t go to spam!</p>
          <div className={styles.divider} />
          <p className={styles.question}>Are we meeting for the first time?</p>
          <p className={styles.siteLink}>Learn more about the work I do on <a href="https://carlyclarkzimmer.com/">carlyclarkzimmer.com</a></p>
          <a className={styles.playlist} href="https://open.spotify.com/playlist/3Wh8HlI06ZxfpueRfDHlma?si=2b75426892024e40">Listen to Podcast Interview Playlist</a>
        </div>
      </section>

      <section className={styles.resources}>
        <div className={styles.resourcesInner}>
          <p className={styles.sectionLabel}>↓ Have you snagged these resources yet? ↓</p>
          <div className={styles.resourceGrid}>
            <a className={styles.resource} href="https://carlyclarkzimmer.com/trust/">
              <img src="/carly-supporting.jpg" alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket" width={1280} height={1920} />
              <span>Trust Issues Private Podcast</span>
            </a>
            <a className={styles.resource} href="https://carlyclarkzimmer.com/breakthrough/">
              <img src="/laser-coach-promo.png" alt="5-Minute Laser Coach Custom GPT promotion" width={1064} height={598} />
              <span>5-Minute Laser Coach</span>
            </a>
          </div>
          <p className={styles.coachLabel}>Trained &amp; Certified Life &amp; Leadership Coach</p>
          <a className={styles.credly} href="https://www.credly.com/badges/cdfb154f-715a-496d-9c70-5f338f11da73/public_url">View Carly Clark Zimmer&apos;s International Coach Federation- PCC credential</a>
        </div>
      </section>

      <footer className={styles.footer}>© Balance by the Bay, LLC 2023</footer>
    </div>
  );
}
