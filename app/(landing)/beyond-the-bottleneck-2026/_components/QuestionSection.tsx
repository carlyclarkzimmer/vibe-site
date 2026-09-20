import { Eyebrow } from "../../../../components/ui/Eyebrow";
import styles from "./CampaignSections.module.css";

export function QuestionSection() {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionTitle}>
        <Eyebrow className={styles.sectionEyebrow}>
          The question at the heart of it all
        </Eyebrow>
        <h2>
          What if the change is not as hard as <i>continuing this way?</i>
        </h2>
        <h2 className={styles.questionFollowup}>
          And what if, on the other side of that decision, there is not only a
          stronger business?
          <br />
          <i>What if there is also more time for your personal life?</i>
        </h2>
      </div>
    </section>
  );
}
