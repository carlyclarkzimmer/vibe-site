import { checklistItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function AudienceSection() {
  return (
    <Section id="for-you">
      <div className={styles.splitHeading}>
        <Eyebrow className={styles.sectionEyebrow}>
          How do you know if this is worth your time?
        </Eyebrow>
      </div>
      <div className={styles.audienceCopy}>
        <p>If you check even one thing off this list, mark my words: You NEED to be here.</p>
      </div>
      <ul className={styles.checklist}>
        {checklistItems.map((item) => (
          <li key={item}><span aria-hidden="true">✓</span><p>{item}</p></li>
        ))}
      </ul>
      <div className={styles.qualifierClose}>
        <p>Anything on here sound like you?</p>
        <p>Then, yes. You&apos;re in the right place, my friend.</p>
      </div>
    </Section>
  );
}
