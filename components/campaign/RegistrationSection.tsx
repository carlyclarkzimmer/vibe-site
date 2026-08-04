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
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <h2>
        {content.headingStart} <i>{content.headingItalic}</i>
      </h2>
      <p className={styles.description}>{content.description}</p>
      <form action="#register">
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
          <button type="submit">Register for free</button>
        </div>
      </form>
      <div className={styles.details}>
        {content.details.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
      <p className={styles.finalLine}>{content.finalLine}</p>
    </Section>
  );
}
