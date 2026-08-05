import type { registrationContent } from "../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import { DripRecaptcha } from "./DripRecaptcha";
import styles from "./RegistrationSection.module.css";

type RegistrationSectionProps = {
  content: typeof registrationContent;
};

export function RegistrationSection({ content }: RegistrationSectionProps) {
  const form = content.emailCapture;
  const generalMarketingTag =
    "generalMarketingTag" in form ? form.generalMarketingTag : undefined;

  return (
    <Section className={styles.register} id="register">
      <Eyebrow className={styles.registerEyebrow}>{content.eyebrow}</Eyebrow>
      <h2>
        {content.headingStart} <i>{content.headingItalic}</i>
      </h2>
      <p className={styles.description}>{content.description}</p>
      <form
        action={form.action}
        data-drip-embedded-form={form.formId}
        id={`drip-ef-${form.formId}`}
        method="post"
      >
        <div className={styles.fields}>
          <div className={styles.field}>
            <label htmlFor="first-name">First name</label>
            <input id="first-name" name="fields[first_name]" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="fields[email]"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            autoComplete="false"
            id="website"
            name="website"
            tabIndex={-1}
            type="text"
          />
        </div>
        <DripRecaptcha siteKey={form.recaptchaSiteKey} />
        <input name="tags[]" type="hidden" value={form.campaignTag} />
        {generalMarketingTag ? (
          <label className={styles.consent} htmlFor="general-email">
            <input
              id="general-email"
              name="tags[]"
              type="checkbox"
              value={generalMarketingTag}
            />
            <span>
              I’d also like occasional emails from Carly about future
              offerings.
            </span>
          </label>
        ) : null}
        <p className={styles.privacy}>
          You can unsubscribe at any time. <a href="/privacy">Privacy Policy</a>
        </p>
        <div className={styles.submitRow}>
          <button data-drip-attribute="sign-up-button" type="submit">
            Register for free
          </button>
        </div>
      </form>
      <footer className={styles.copyright}>© carlyclarkzimmer.com</footer>
    </Section>
  );
}
