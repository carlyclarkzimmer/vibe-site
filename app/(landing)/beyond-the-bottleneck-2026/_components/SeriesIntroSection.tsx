import Image from "next/image";
import { Button } from "../../../../components/ui/Button";
import styles from "./CampaignSections.module.css";

export function SeriesIntroSection() {
  return (
    <section className={styles.seriesIntro}>
      <div className={styles.seriesCard}>
        <p>
          <strong>
            Beyond the Bottleneck is a <span className={styles.seriesAccent}>free audio series</span> featuring honest conversations with online business owners who were once in your shoes.
          </strong>
        </p>
        <p className={styles.sharingLead}>They&apos;re sharing:</p>
        <div className={styles.sharingList}>
          <p><strong>The bottleneck that kept them stuck</strong>, so you can recognize what might be keeping you stuck, too.</p>
          <p><strong>What they finally changed</strong>, so you can see what getting out of your own way could actually look like.</p>
          <p><strong>What became possible afterward</strong>, so you can stop fearing the change and start getting excited about what&apos;s possible.</p>
        </div>
        <p className={styles.spoiler}>Because, #SpoilerAlert: Their businesses didn&apos;t fall apart.<br /><em>It thrived.</em></p>
        <Button className={styles.seriesCta} href="#register">ACCESS THE AUDIOS</Button>
        <div className={styles.seriesDetails}>
          <p>Free, bindgeable audio series</p>
          <p>Begins October 5th</p>
          <p>Listen on your own time</p>
        </div>
      </div>
      <div className={styles.seriesPhoto}>
        <Image
          alt="Carly Clark Zimmer smiling in a berry-colored jacket"
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          src="/carly-series-intro-084.jpg"
          unoptimized
        />
      </div>
    </section>
  );
}
