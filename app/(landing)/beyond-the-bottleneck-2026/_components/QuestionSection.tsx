import { fearQuestions, reframeQuestions } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function QuestionSection() {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionTitle}>
        <p>Because here&apos;s the sneaky thing about a bottleneck: The current pattern may be exhausting, but it&apos;s familiar.</p>
        <p>And familiarity tricks us into thinking it&apos;s the best option. The change feels big and risky and full of unknowns.</p>
        <div className={styles.fearCluster}>{fearQuestions.map((question) => <p key={question}>{question}</p>)}</div>
        <p>You don&apos;t have time for that kind of a setback, so you keep going.</p>
        <h2>But you know what&apos;s REALLY costing you? Keeping this up…</h2>
        <div className={styles.reframeCluster}>{reframeQuestions.map((question) => <p key={question}>{question}</p>)}</div>
      </div>
    </section>
  );
}
