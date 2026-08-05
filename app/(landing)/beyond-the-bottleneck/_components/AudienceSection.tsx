import { checklistItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function AudienceSection() {
  return (
    <Section id="for-you">
      <div className={styles.splitHeading}>
        <Eyebrow className={styles.sectionEyebrow}>Who this is for</Eyebrow>
      </div>
      <div className={styles.audienceCopy}>
        <h3>
          How do you know if this will be worth your time?
          <span className={styles.checklistPrompt}>
            Check every box that sounds like you:
          </span>
        </h3>
      </div>
      <div className={styles.checklist}>
        {checklistItems.map((item, index) => (
          <label key={item}>
            <input
              aria-label={`Checklist item ${index + 1}`}
              type="checkbox"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <p className={styles.centerStatement}>
        If being capable is starting to feel like a never-ending Slack request
        trap, <i>this series is for you.</i>
      </p>
    </Section>
  );
}
