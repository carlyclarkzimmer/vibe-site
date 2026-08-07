/* eslint-disable @next/next/no-img-element -- preserve the local editorial crop without a framework image loader */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { trustEmailCapture } from "../../../content/campaigns/trust";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trust Issues Podcast",
  description:
    "This five-part private podcast is your invitation to rebuild the most important asset in your business: trust.",
};

function SignupForm({ placement }: { placement: "hero" | "story" }) {
  const formId = `drip-ef-${trustEmailCapture.formId}-${placement}`;
  const recaptchaInputId = `g-recaptcha-response-data-form-submission-${placement}`;

  return (
    <form
      action={trustEmailCapture.action}
      className={styles.form}
      data-drip-embedded-form={trustEmailCapture.formId}
      id={formId}
      method="post"
    >
      <label htmlFor="trust-first-name">First Name</label>
      <input
        id="trust-first-name"
        name="fields[first_name]"
        type="text"
        placeholder="First Name"
        autoComplete="given-name"
        required
      />
      <label htmlFor="trust-email">Email Address</label>
      <input
        id="trust-email"
        name="fields[email]"
        type="email"
        placeholder="Email Address"
        autoComplete="email"
        required
      />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`trust-website-${placement}`}>Website</label>
        <input autoComplete="false" id={`trust-website-${placement}`} name="website" tabIndex={-1} type="text" />
      </div>
      <DripRecaptcha inputId={recaptchaInputId} siteKey={trustEmailCapture.recaptchaSiteKey} />
      <input name="tags[]" type="hidden" value={trustEmailCapture.campaignTag} />
      <button data-drip-attribute="sign-up-button" type="submit">LISTEN HERE</button>
      <a className={styles.privacyLink} href="/privacy" rel="noreferrer" target="_blank">Privacy Policy</a>
    </form>
  );
}

export default function TrustPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>🎧 MINI AUDIO SERIES</p>
          <h1>
            TRUST
            <br />
            ISSUES
          </h1>
          <p className={styles.heroLead}>
            This five-part private podcast is your invitation to rebuild the most important asset in your business: <em>trust.</em>
          </p>
          <SignupForm placement="hero" />
        </div>
      </section>

      <section className={styles.explore}>
        <div className={styles.exploreIntro}>
          <p className={styles.sectionLabel}>We’ll explore:</p>
          <p className={styles.exploreLead}>
            Most importantly, you’ll learn how to rebuild trust from the inside out.
          </p>
        </div>
        <ul className={styles.topicList}>
          <li>How <strong>self-trust quietly erodes</strong> in the noise of formulas and trends.</li>
          <li>Why following every <strong>“proven” strategy</strong> can lead you away from your true vision.</li>
          <li>How this disconnection has fueled the current <strong>“Trust Recession”</strong> in the online business world.</li>
        </ul>
        <p className={styles.alignedLine}>
          <strong>First with yourself, then with your audience,</strong> so your decisions, direction, and momentum feel clear, grounded, and aligned again.
        </p>
      </section>

      <section className={styles.story}>
        <div className={styles.storyImage}>
          <img src="/carly-supporting.jpg" alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket" width={1280} height={1920} />
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.sectionLabel}>Hi, I’m Carly,</p>
          <h2>Trust is where aligned decisions begin.</h2>
          <p>I&apos;m a multi-dimensional Life and Business Coach. I’ve spent the past eight years coaching both groups and individuals through deep transformation.</p>
          <p>Before I ever coached online, I spent twelve years as a licensed massage therapist in New York City, helping high achievers who looked “fine” on the outside but whose bodies told a different story.</p>
          <p>Their bodies were craving ease, fulfillment, and joy.</p>
          <p>They didn’t know how to <em>trust</em> that creating a life aligned with their values could actually feel safe.</p>
          <p><strong>They just didn’t know how to <em>allow</em> themselves to trust that the decisions they made to bring their life into alignment with their values were actually safe.</strong></p>
          <p>One step at a time, one choice after another, their health and their lives improved.</p>
          <p>Now, I help heart-centered leaders do the same in their businesses. <strong>Together, we understand the fear, quiet the noise, and create the inner safety required for self-trust and aligned decision making.</strong></p>
          <p>I help you hear what your soul is saying first. Then we layer in aligned strategy so you have a sustainable plan for growth that supports both your impact and your well-being.</p>
          <p>When you trust yourself, everything else in your business, your clarity, your confidence, your leadership starts to click into place.</p>
          <p className={styles.closing}>This podcast will awaken the truth within you and remind you that clarity isn’t found out there. It’s been inside you all along.</p>
          <SignupForm placement="story" />
        </div>
      </section>

    </div>
  );
}
