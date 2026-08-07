/* eslint-disable @next/next/no-img-element -- approved project photography is served without destructive processing */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { patternBreakerPage } from "../../../content/campaigns/pattern-breaker";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: patternBreakerPage.title,
  description: patternBreakerPage.description,
  alternates: {
    canonical: patternBreakerPage.canonicalPath,
  },
  openGraph: {
    type: "website",
    title: patternBreakerPage.title,
    description: patternBreakerPage.description,
    url: patternBreakerPage.canonicalPath,
  },
};

type SignupFormProps = {
  buttonLabel: string;
  idPrefix: string;
};

function SignupForm({ buttonLabel, idPrefix }: SignupFormProps) {
  const form = patternBreakerPage.form;

  return (
    <form
      action={form.action}
      className={styles.form}
      data-drip-embedded-form={form.formId}
      id={`drip-ef-${form.formId}-${idPrefix}`}
      method="post"
    >
      <label htmlFor={`${idPrefix}-first-name`}>First Name</label>
      <input
        id={`${idPrefix}-first-name`}
        name="fields[first_name]"
        type="text"
        placeholder="First Name"
        autoComplete="given-name"
      />
      <label htmlFor={`${idPrefix}-email`}>Email Address</label>
      <input
        id={`${idPrefix}-email`}
        name="fields[email]"
        type="email"
        placeholder="Email Address"
        autoComplete="email"
        required
      />
      <label htmlFor={`${idPrefix}-social`}>Social Media (Optional)</label>
      <textarea
        id={`${idPrefix}-social`}
        name="fields[social_media]"
        placeholder="Social Media (Optional)"
      />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>
          If you are human, leave this blank.
        </label>
        <input
          id={`${idPrefix}-website`}
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>
      <DripRecaptcha
        inputId={`g-recaptcha-response-data-form-submission-${idPrefix}`}
        siteKey={form.recaptchaSiteKey}
      />
      <input name="tags[]" type="hidden" value={form.campaignTag} />
      <button data-drip-attribute="sign-up-button" type="submit">
        {buttonLabel}
      </button>
      <a
        className={styles.privacyLink}
        href="/privacy"
        rel="noreferrer"
        target="_blank"
      >
        Privacy Policy
      </a>
    </form>
  );
}

const outcomes = [
  {
    title: "Name the pattern",
    description:
      "Identify the specific behavioral loop that keeps hijacking your follow-through — not as a flaw, but as a structure you can change.",
  },
  {
    title: "Interrupt it precisely",
    description:
      "Walk away with a targeted micro-interrupt — not a long list of new habits, but one clear move that breaks the cycle.",
  },
  {
    title: "Build aligned momentum",
    description:
      "Less on your to-do list, not more. Aligned steps that create actual progress without the heroic output.",
  },
  {
    title: "Get clear on what's next",
    description:
      "Leave with direction and a concrete next step — not more questions, not more circling.",
  },
] as const;

export default function PatternBreakerPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img
            src="/carly-hero.jpg"
            alt="Carly Clark Zimmer smiling outdoors in a berry-colored jacket"
            width={5760}
            height={3840}
          />
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.kicker}>
            The <strong>Pattern</strong>
            <br />
            Behind
            <br />
            the Problem
          </p>
          <h1>
            You already know what needs to change.{" "}
            <em>The gap is in the follow-through.</em>
          </h1>
          <p className={styles.intro}>{patternBreakerPage.description}</p>
          <SignupForm
            buttonLabel="Access the Class"
            idPrefix="pattern-breaker-hero"
          />
        </div>
      </section>

      <section className={styles.outcomes} aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className={styles.visuallyHidden}>
          What you will do in the training
        </h2>
        <ol>
          {outcomes.map((outcome, index) => (
            <li key={outcome.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.placeholder}>Input your text in this area</p>
        <p className={styles.summary}>
          This training is a direct, structured session designed for service
          providers who are done explaining themselves to themselves. You know
          what needs to change. This is how you stop circling it.
        </p>
      </section>

      <section className={styles.invitation}>
        <div className={styles.invitationInner}>
          <h2>Ready to stop circling?</h2>
          <p>
            Join the free training. Bring the pattern you keep bumping into —
            the one you&apos;ve been too smart and too busy to sit still with long
            enough to actually change.
          </p>
          <SignupForm
            buttonLabel="Join the Bootcamp"
            idPrefix="pattern-breaker-invitation"
          />
        </div>
      </section>

      <section className={styles.about}>
        <figure className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket"
            width={3752}
            height={5628}
          />
        </figure>
        <div className={styles.aboutCopy}>
          <h2>Hey there! I&apos;m Carly.</h2>
          <p>
            An ICF-certified Life and Business Coach with eight years of
            experience supporting seasoned entrepreneurs and senior leaders
            through high-stakes transitions.
          </p>
          <p>
            I specialize in identity-based leadership work, with formal
            training in Internal Family Systems and advanced behavioral pattern
            recognition.
          </p>
          <p>
            Most of my clients look successful on paper.
            <br />
            What they experience privately is internal strain during growth,
            visibility shifts, or structural change.
          </p>
          <p>Nothing is broken.</p>
          <p>
            Their operating structures simply no longer match who they’ve
            become.
          </p>
          <p>
            I&apos;ve seen this pattern hundreds of times:
            <br />
            Clarity is rarely the issue.
          </p>
          <p>
            Sustainable growth requires internal coherence. The alignment
            between identity, decision-making, and structure.
          </p>
          <p>My work restores that coherence.</p>
          <p>Clients describe feeling calmer, clearer, and more decisive.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        © carlyclarkzimmer.com Balance by the Bay, LLC 2026
      </footer>
    </div>
  );
}
