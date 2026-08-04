import { fearQuestions } from "../../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import styles from "./CampaignSections.module.css";

export function QuestionSection() {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionCopy}>
        <p>
          Because the current pattern may be exhausting, but it is familiar, so
          you keep going.
        </p>
        <p>
          The change feels big and risky, and you just don’t feel like you have
          time to make this a priority.
        </p>
        <div className={styles.fearList}>
          {fearQuestions.map((fear) => (
            <span key={fear}>{fear}</span>
          ))}
        </div>
        <p>So you keep going.</p>
      </div>
      <div className={styles.questionTitle}>
        <Eyebrow>The question at the heart of it all</Eyebrow>
        <h2>
          What if the change is not as hard as <i>continuing this way?</i>
        </h2>
      </div>
    </section>
  );
}
