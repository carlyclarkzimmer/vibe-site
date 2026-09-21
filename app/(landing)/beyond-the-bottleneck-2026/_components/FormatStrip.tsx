import styles from "./CampaignSections.module.css";

export function FormatStrip() {
  return (
    <section className={styles.formatStrip} aria-label="Who the audio series is for">
      <p>
        <span className={styles.formatStripShine}>
          How do you know if this is worth your time?
        </span>
      </p>
    </section>
  );
}
