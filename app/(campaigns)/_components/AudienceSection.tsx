import { checklistItems } from "../../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import { Section } from "../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function AudienceSection() {
  return (
    <Section id="for-you">
      <div className={styles.splitHeading}>
        <Eyebrow>Who this is for</Eyebrow>
        <h2 className={styles.sectionTitle}>
          What got you here
          <br />
          <i>won’t get you there.</i>
        </h2>
      </div>
      <div className={styles.audienceCopy}>
        <p className={styles.largeCopy}>
          If you the description above feels a little too close for comfort,
          you’re going to want to lean in and listen to these extraordinary
          business owners who had the courage to make powerful changes.
        </p>
        <p>
          They got back in the driver&apos;s seat of their own business and
          started making decisions from a place of alignment, not pressure,
          proving or fear of failure.
        </p>
        <p>
          Now don’t get me wrong, all of those feelings where there, but they
          stopped letting them lead.
        </p>
        <h3>
          How do you know if this will be worth your time? Track how many boxes
          you check:
        </h3>
      </div>
      <div className={styles.checklist}>
        {checklistItems.map((item) => (
          <div key={item}>
            <span aria-hidden="true">□</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className={styles.centerStatement}>
        If being capable is starting to feel like a never-ending Slack request
        trap, <i>this series is for you.</i>
      </p>
    </Section>
  );
}
