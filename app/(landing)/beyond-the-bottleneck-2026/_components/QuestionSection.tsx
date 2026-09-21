import { fearQuestions, reframeQuestions } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function QuestionSection() {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionTitle}>
        <div className={styles.questionIntro}>
          <div className={styles.questionIntroCopy}>
            <p className={styles.questionReveal}>Because here&apos;s the sneaky thing about a bottleneck: The current pattern may be exhausting, but it&apos;s familiar.</p>
            <p className={styles.questionReveal}>And familiarity tricks us into thinking it&apos;s the best option. The change feels big and risky and full of unknowns.</p>
          </div>
          <div className={styles.questionGif} aria-hidden="true">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bzExdGU2NGxmamczZGE3aXl4M2Zrc3NtcWNrd2N3Y2RxbjE0bHRrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/v6aOjy0Qo1fIA/giphy.gif"
              alt=""
            />
          </div>
        </div>
        <div className={styles.questionBody}>
          <div className={styles.fearCluster}>{fearQuestions.map((question) => <p key={question}>{question}</p>)}</div>
          <p>You don&apos;t have time for that kind of a setback, so you keep going.</p>
          <h2>But you know what&apos;s REALLY costing you? Keeping this up…</h2>
          <div className={styles.reframeCluster}>{reframeQuestions.map((question) => <p key={question}>{question}</p>)}</div>
        </div>
      </div>
    </section>
  );
}
