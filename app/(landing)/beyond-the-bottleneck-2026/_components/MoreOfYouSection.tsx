import Image from "next/image";
import { Button } from "../../../../components/ui/Button";
import { possibilityItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function MoreOfYouSection() {
  return (
    <section className={styles.moreOfYou}>
      <h2 className={styles.moreOfYouQuestion}>
        And what if, on the other side of that decision, there is not only a
        stronger business?
      </h2>
      <div className={styles.moreOfYouIntro}>
        <div className={styles.moreOfYouGif} aria-hidden="true">
          <Image
            alt=""
            fill
            sizes="(max-width: 900px) 84vw, 440px"
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Ym5sd2RodmNkcWdxdXpqN2x5c2t4MHduNXBlOTRmNXd6aXF3c3NncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11s7Ke7jcNxCHS/giphy.gif"
            unoptimized
          />
        </div>
        <div className={styles.moreOfYouHeadings}>
          <h2>
            <i>
              What if there&apos;s also more room for you and life outside of work?
            </i>
          </h2>
        </div>
      </div>
      <div className={styles.moreList}>
        {possibilityItems.map((item) => <p key={item}>{item}</p>)}
      </div>
      <div className={styles.readingMeasure}>
        <p>
          That&apos;s what we&apos;re exploring inside Beyond the Bottleneck. What
          happened to these businesses, and the people behind them, when they
          stopped accepting the way things were and started making changes.
        </p>
        <Button href="#register" sentenceCase>
          I&apos;m sick of feeling like this. I want to listen!
        </Button>
      </div>
    </section>
  );
}
