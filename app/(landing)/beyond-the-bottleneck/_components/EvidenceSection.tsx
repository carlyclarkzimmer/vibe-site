import { evidenceItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import { Button } from "../../../../components/ui/Button";
import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function EvidenceSection() {
  return (
    <Section className={styles.evidence}>
      <Eyebrow>Designed for recognition</Eyebrow>
      <h2 className={styles.sectionTitle}>
        Stop obeying the pattern that keeps your business dependent on{" "}
        <i>your overfunctioning.</i>
      </h2>
      <p className={styles.evidenceIntro}>
        Beyond the Bottleneck is intentionally designed to help you recognize
        the pattern that keeps your business dependent on your overfunctioning
        and seeing what becomes possible when you stop obeying it.
      </p>
      <h3>You will leave with clearer evidence that:</h3>
      <div className={styles.evidenceGrid}>
        {evidenceItems.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <Button href="#register">Join Beyond the Bottleneck</Button>
    </Section>
  );
}
