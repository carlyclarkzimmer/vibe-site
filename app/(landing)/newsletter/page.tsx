/* eslint-disable @next/next/no-img-element -- preserve the source artwork as a local editorial cover */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { newsletterEmailCapture } from "../../../content/campaigns/newsletter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Decision Points Newsletter",
  description:
    "Stories and practical insights about business leadership, behavior change, identity, and the small decisions that shape how you work and live.",
};

function SignupForm() {
  return (
    <form
      action={newsletterEmailCapture.action}
      className={styles.form}
      data-drip-embedded-form={newsletterEmailCapture.formId}
      id={`drip-ef-${newsletterEmailCapture.formId}`}
      method="post"
    >
      <label htmlFor="newsletter-first-name">First Name</label>
      <input id="newsletter-first-name" name="fields[first_name]" type="text" placeholder="First Name" autoComplete="given-name" required />
      <label htmlFor="newsletter-email">Email Address</label>
      <input id="newsletter-email" name="fields[email]" type="email" placeholder="Email Address" autoComplete="email" required />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input autoComplete="false" id="newsletter-website" name="website" tabIndex={-1} type="text" />
      </div>
      <DripRecaptcha siteKey={newsletterEmailCapture.recaptchaSiteKey} />
      <input name="tags[]" type="hidden" value={newsletterEmailCapture.campaignTag} />
      <button data-drip-attribute="sign-up-button" type="submit">Join the Newsletter</button>
      <a className={styles.privacyLink} href="/privacy" rel="noreferrer" target="_blank">Privacy Policy</a>
    </form>
  );
}

export default function NewsletterPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <img className={styles.heroImage} src="/carly-services-hero.jpg" alt="Carly Clark Zimmer standing in an elegant room surrounded by plants" width={3840} height={5760} />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Welcome to</p>
            <h1>Decision Points</h1>
            <p className={styles.description}>Decision Points is where I share stories and practical insights about business leadership, behavior change, identity, and the small decisions that shape how you work and live. It’s for high-achieving business owners who want to keep growing, while building a business that leaves room for a full life outside of it.</p>
            <SignupForm />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="https://carlyclarkzimmer.com/">Learn more at carlyclarkzimmer.com</a>
        <span>© Balance by the Bay, LLC 2026</span>
      </footer>
    </div>
  );
}
