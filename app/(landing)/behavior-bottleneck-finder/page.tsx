/* eslint-disable @next/next/no-img-element -- static legacy asset served directly */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { behaviorBottleneckFinderEmailCapture } from "../../../content/campaigns/behavior-bottleneck-finder";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Behavior Bottleneck Finder | Carly Clark Zimmer",
};

export default function BehaviorBottleneckFinderPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Communication &amp; Leadership Skills for Heart-Centered Souls</div>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Try the</p>
            <h1>Behavior <em>Bottleneck</em> Finder</h1>
            <p className={styles.lede}>If you know what you need to do, but keep struggling to make it a priority, there may be a hidden behavior bottleneck at work.</p>
            <p>The Behavior Bottleneck Finder helps you map out the exact pattern causing the bottleneck and identify one micro interruption you can practice when the pattern shows up, so you can redirect your attention toward the work that matters most.</p>
          </div>
          <div className={styles.imageWrap}>
            <img src="/behavior-bottleneck-finder.jpg" alt="Carly Clark Zimmer standing in a teal jacket among plants and gold curtains" width={406} height={512} />
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div>
          <p className={styles.sectionLabel}>Inside the Finder</p>
          <h2>Map the loop. Find one small interruption.</h2>
        </div>
        <div>
          <p>You&apos;ll fill out a short intake form about one goal, pattern, or place where you keep getting stuck.</p>
          <p>The tool will help map the loop underneath it, including:</p>
          <ul>
            <li>The short-term relief behavior</li>
            <li>The identity shift underneath the pattern</li>
            <li>A micro interruption to begin practicing</li>
            <li>The new evidence you can start building to shift into this new identity.</li>
          </ul>
          <p>As a workshop participant, you&apos;ll receive complimentary access for two weeks.</p>
          <p>Afterward, I&apos;ll send you a short feedback form so you can share what it helped you see.</p>
          <p>Your honest feedback will help me refine the tool and make it more useful for people who are ready to spot and interrupt the patterns keeping them from their next chapter in business.</p>
        </div>
      </section>

      <section className={styles.signup} id="access">
        <div className={styles.signupIntro}>
          <p className={styles.sectionLabel}>Two-week beta access</p>
          <h2>See the pattern that&apos;s been keeping you stuck.</h2>
        </div>
        <form
          action={behaviorBottleneckFinderEmailCapture.action}
          className={styles.form}
          data-drip-embedded-form={behaviorBottleneckFinderEmailCapture.formId}
          id={`drip-ef-${behaviorBottleneckFinderEmailCapture.formId}`}
          method="post"
        >
          <label htmlFor="bottleneck-first-name">First Name</label>
          <input id="bottleneck-first-name" name="fields[first_name]" type="text" autoComplete="given-name" maxLength={500} placeholder="First Name" />
          <label htmlFor="bottleneck-email">Email Address</label>
          <input id="bottleneck-email" name="fields[email]" type="email" autoComplete="email" maxLength={500} placeholder="Email Address" required />
          <div className={styles.consent}>
            <p>I understand that I&apos;m receiving complimentary two week access to the Behavior Bottleneck Finder and that Carly will follow up with a short feedback form about my experience. <a href="/privacy">Privacy Policy</a></p>
            <label htmlFor="bottleneck-consent"><input id="bottleneck-consent" name="confirmation" type="checkbox" value="true" required />Yes, I agree to share feedback.</label>
          </div>
          <div className={styles.honeypot} aria-hidden="true"><label htmlFor="confirm-existence">If you are human, leave this blank.</label><input id="confirm-existence" name="confirm-existence" tabIndex={-1} autoComplete="off" /></div>
          <DripRecaptcha siteKey={behaviorBottleneckFinderEmailCapture.recaptchaSiteKey} />
          <input name="tags[]" type="hidden" value={behaviorBottleneckFinderEmailCapture.campaignTag} />
          <button data-drip-attribute="sign-up-button" type="submit">Get Two Week Access</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <a href="https://carlyclarkzimmer.com/">Learn more at carlyclarkzimmer.com</a>
        <span>© Balance by the Bay, LLC 2026</span>
      </footer>
    </main>
  );
}
