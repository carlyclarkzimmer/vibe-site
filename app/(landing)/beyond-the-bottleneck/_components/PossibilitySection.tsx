import { possibilityItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import { Button } from "../../../../components/ui/Button";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function PossibilitySection() {
  return (
    <Section className={styles.possibilitySection}>
      <div className={styles.whatIfGrid}>
        <p>
          What if the boundary you have spent six months worrying about takes
          one uncomfortable conversation?
        </p>
        <p>
          What if the thing you are afraid to delegate works perfectly well
          without you?
        </p>
        <p>
          What if someone has a feeling about your decision and you survive it?
        </p>
        <p>
          What if the new way feels difficult for a day, or a week, and then
          starts getting easier?
        </p>
      </div>
      <h2 className={styles.possibilityTitle}>
        And what if, on the other side of that decision, there is not only a
        stronger business?
        <br />
        <i>What if there is also more of you?</i>
      </h2>
      <div className={styles.possibilities}>
        {possibilityItems.map((item, index) => (
          <div key={item}>
            <span>0{index + 1}</span>
            {item}
          </div>
        ))}
      </div>
      <Button href="#register">Yes, I want to listen</Button>
    </Section>
  );
}
