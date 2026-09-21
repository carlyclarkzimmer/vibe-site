import { Button } from "../../../../components/ui/Button";
import { possibilityItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function MoreOfYouSection() {
  return <section className={styles.moreOfYou}><div className={styles.readingMeasure}>
    <h2>And what if, on the other side of that decision, there is not only a stronger business?</h2>
    <h2><i>What if there&apos;s also more of you?</i></h2>
    <div className={styles.moreList}>{possibilityItems.map((item) => <p key={item}>{item}</p>)}</div>
    <p>That&apos;s what we&apos;re exploring inside Beyond the Bottleneck. What happened to these businesses, and the people behind them, when they stopped accepting the way things were and started making changes.</p>
    <Button href="#register" sentenceCase>I&apos;m sick of feeling like this. I want to listen!</Button>
  </div></section>;
}
