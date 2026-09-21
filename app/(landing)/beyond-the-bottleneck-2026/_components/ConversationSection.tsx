import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { conversationTopics } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function ConversationSection() {
  return (
    <section className={styles.inside} id="inside">
      <div className={styles.insideTitle}>
        <Eyebrow>What you&apos;ll hear</Eyebrow>
        <h2>Honest conversations about the decision that interrupted the pattern.</h2>
      </div>
      <div className={styles.insideCopy}>
        <p>
          Inside Beyond the Bottleneck, you will hear from online business
          owners who reached a point where they could no longer ignore what
          their way of working was costing them.
        </p>
        <p>
          They will share about one specific bottleneck, the decision that
          interrupted it, and what became possible afterward.
        </p>
        <p>
          These are not polished stories about people who have mastered every
          part of business and never struggled again. (Thank the goddesses for
          that!) This series also isn&apos;t about people eliminating bottlenecks
          completely. They&apos;ve simply gotten better at recognizing them and
          changing what isn&apos;t working before it takes over.
        </p>
        <p>Inside each conversation, you&apos;ll hear:</p>
        <dl className={styles.topicList}>
          {conversationTopics.map(([label, description]) => (
            <div key={label}><dt>{label}</dt><dd>{description}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
