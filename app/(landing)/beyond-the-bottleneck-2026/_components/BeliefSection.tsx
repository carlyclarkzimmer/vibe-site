import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function BeliefSection() {
  return (
    <Section className={styles.belief}>
      <div>
        <p>
          Today, I help booked-out service providers and founders stop treating
          every client request like an emergency, identify the behavior patterns
          keeping them overextended, and restore the structure of their business
          so success no longer depends on self-abandonment.
        </p>
      </div>
      <div>
        <Eyebrow className={styles.sectionEyebrow}>
          My work is built on a simple belief
        </Eyebrow>
        <h2>
          Transformation happens through evidence and intentional repetition,{" "}
          <i>not more information.</i>
        </h2>
        <p>
          You change when you let the request wait and discover that nothing
          collapses.
        </p>
        <p>
          You change when you make the decision you have been postponing and
          feel the space it creates.
        </p>
        <p className={styles.serifCallout}>
          One small interrupt becomes evidence.
          <br />
          Enough evidence becomes a new way of working.
        </p>
      </div>
    </Section>
  );
}
