import type { registrationContent } from "../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import styles from "./RegistrationSection.module.css";

type RegistrationSectionProps = {
  content: typeof registrationContent;
};

export function RegistrationSection({ content }: RegistrationSectionProps) {
  return (
    <Section className={styles.register} id="register">
      {content.eyebrow ? <Eyebrow className={styles.registerEyebrow}>{content.eyebrow}</Eyebrow> : null}
      <h2>
        {content.headingStart} <i>{content.headingItalic}</i>
      </h2>
      {content.description ? <p className={styles.description}>{content.description}</p> : null}
      <div className={styles.details}>
        <Eyebrow>The details</Eyebrow>
        <p>Each interview becomes available on October 5th.</p>
        <p>Listen on your own schedule and walk away with actual case studies that share insight into a variety of bottlenecks and strategies for overcoming them.</p>
      </div>
      <div className={styles.finalLines}>
        <p>Because I&apos;m gonna bet the change you keep putting off isn&apos;t nearly as hard as continuing to choose the pattern.</p>
        <p>There&apos;s a whole lotta life waiting for you beyond the bottleneck.</p>
      </div>
      <footer className={styles.copyright}>© carlyclarkzimmer.com</footer>
    </Section>
  );
}
