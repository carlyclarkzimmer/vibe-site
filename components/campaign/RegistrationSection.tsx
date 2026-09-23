import type { registrationContent } from "../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { DripRecaptcha } from "./DripRecaptcha";
import styles from "./RegistrationSection.module.css";

type RegistrationSectionProps = {
  content: typeof registrationContent;
  optinSource?: string;
};

export function RegistrationSection({
  content,
  optinSource,
}: RegistrationSectionProps) {
  const form = content.emailCapture;
  const generalMarketingTag =
    "generalMarketingTag" in form ? form.generalMarketingTag : undefined;

  return (
    <Section className={styles.register} id="register">
      {content.eyebrow ? <Eyebrow className={styles.registerEyebrow}>{content.eyebrow}</Eyebrow> : null}
      <h2>
        {content.headingStart} <i>{content.headingItalic}</i>
      </h2>
      {content.description ? <p className={styles.description}>{content.description}</p> : null}
      <Button href="#signup-form">REGISTER FOR FREE</Button>
      <div className={styles.details}>
        <Eyebrow>The details</Eyebrow>
        <p>Each interview becomes available on October 5th.</p>
        <p>Listen on your own schedule and walk away with actual case studies that share insight into a variety of bottlenecks and strategies for overcoming them.</p>
      </div>
      <div className={styles.finalLines}>
        <p>Because I&apos;m gonna bet the change you keep putting off isn&apos;t nearly as hard as continuing to choose the pattern.</p>
        <p>There&apos;s a whole lotta life waiting for you beyond the bottleneck.</p>
      </div>
      <form
        action={form.action}
        data-drip-embedded-form={form.formId}
        id={`drip-ef-${form.formId}`}
        method="post"
      >
        <div className={styles.fields} id="signup-form">
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
          <div className={`${styles.field} ${styles.socialField}`}>
            <label htmlFor="social-media">Social media</label>
            <input
              id="social-media"
              name="fields[social_media]"
              type="text"
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
        {optinSource ? (
          <input
            name="fields[optin_source]"
            type="hidden"
            value={optinSource}
          />
        ) : null}
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
            JOIN US.
          </button>
        </div>
      </form>
      <footer className={styles.copyright}>© carlyclarkzimmer.com</footer>
    </Section>
  );
}
