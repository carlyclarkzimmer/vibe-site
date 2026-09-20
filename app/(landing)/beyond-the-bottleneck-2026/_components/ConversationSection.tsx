import { Eyebrow } from "../../../../components/ui/Eyebrow";
import styles from "./CampaignSections.module.css";

export function ConversationSection() {
  return (
    <section className={styles.inside} id="inside">
      <div className={styles.insideTitle}>
        <Eyebrow>Inside Beyond the Bottleneck</Eyebrow>
        <h2>Meet the business owners who broke through the bottleneck</h2>
      </div>
      <div className={styles.insideCopy}>
        <p>
          Inside Beyond the Bottleneck, you will hear from online business
          owners who reached a point where they could no longer ignore what
          their way of working was costing them.
        </p>
        <p>
          These are not polished stories about people who have mastered every
          part of business and never struggle anymore.
        </p>
        <p className={styles.largeCopy}>And thank the goddesses for that!</p>
        <p>
          This series isn’t about people eliminating bottlenecks completely—
          that’s just not possible. But sharing how they identify them quicker
          and move through the interruption faster is the pathway I want you to
          see ahead.
        </p>
        <p>
          These are honest conversations about one specific pattern, the
          decision that interrupted it, and what became possible afterward.
        </p>
      </div>
    </section>
  );
}
