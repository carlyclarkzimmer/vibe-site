import Image from "next/image";
import { Button } from "../../../../components/ui/Button";
import styles from "./CampaignSections.module.css";

export function SeriesIntroSection() {
  return (
    <section className={styles.seriesIntro}>
      <div className={styles.seriesCard}>
        <p>
          Beyond the Bottleneck is a {" "}
          <strong>
            short audio series featuring honest conversations with online
            business owners who were once in your shoes.
          </strong>{" "}
          They recognized the pattern keeping them overextended, changed the
          way they worked, and created more room for growth, creativity,
          relationships, rest, and an actual life outside of business. And now
          they can honestly share that they are thriving!
        </p>
        <Button
          className={styles.seriesButton}
          href="#register"
          variant="outlineLight"
        >
          Access the series →
        </Button>
      </div>
      <div className={styles.seriesPhoto}>
        <Image
          alt="Carly Clark Zimmer smiling in a berry-colored jacket"
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          src="/carly-series-intro.png"
          unoptimized
        />
      </div>
      <div className={styles.seriesWord}>listen</div>
    </section>
  );
}
