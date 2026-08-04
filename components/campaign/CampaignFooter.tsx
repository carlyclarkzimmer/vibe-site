import styles from "./CampaignFooter.module.css";

export function CampaignFooter() {
  return (
    <footer className={styles.footer}>
      <a className={styles.monogram} href="#top" aria-label="Back to top">
        b.
      </a>
      <p>Beyond the Bottleneck © 2026</p>
      <div className={styles.links}>
        <a href="/privacy">Privacy Policy</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
