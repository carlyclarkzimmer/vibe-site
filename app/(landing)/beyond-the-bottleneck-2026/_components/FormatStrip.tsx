import { MovingTicker } from "../../../../components/campaign/MovingTicker";
import { Button } from "../../../../components/ui/Button";
import { tickerItems } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./CampaignSections.module.css";

export function FormatStrip() {
  return <section className={styles.formatStrip} aria-label="Audio series details"><MovingTicker items={tickerItems} /><Button href="#register">ACCESS THE AUDIOS</Button></section>;
}
