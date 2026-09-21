import { Button } from "../../../../components/ui/Button";
import { evidenceItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function EvidenceSection() {
  return <section className={styles.evidence}><div className={styles.readingMeasure}>
    <p>Beyond the Bottleneck is intentionally designed to help you recognize the pattern that keeps your business dependent on your overfunctioning and see what becomes possible when you stop obeying it.</p>
    <p>And by the end, my hope is that you have a whole lot more evidence that:</p>
    <div className={styles.evidenceList}>{evidenceItems.map((item) => <p key={item}>{item}</p>)}</div>
    <Button href="#register" sentenceCase>Yes, I need this!</Button>
  </div></section>;
}
