import styles from "./CampaignSections.module.css";

export function SeriesIntroSection() {
  return (
    <section className={styles.seriesIntro}>
      <div className={styles.seriesCard}>
        <span className={styles.verticalLabel}>SHORT AUDIO SERIES</span>
        <h2>
          Honest conversations. <i>Actual change.</i>
        </h2>
        <p>
          Beyond the Bottleneck is a short audio series featuring honest
          conversations with online business owners who were once in you’re
          shoes. They recognized the pattern keeping them overextended, changed
          the way they worked, and created more room for growth, creativity,
          relationships, rest, and an actual life outside of business. And now
          can honestly share that they are thriving!
        </p>
        <a className={styles.textLink} href="#register">
          Join the listening tour →
        </a>
      </div>
      <div className={styles.seriesWord}>listen</div>
    </section>
  );
}
