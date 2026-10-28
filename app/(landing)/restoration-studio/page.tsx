/* eslint-disable @next/next/no-img-element -- preserve Carly's supplied photograph */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { restorationStudio as event, restorationStudioEmailCapture as drip } from "../../../content/campaigns/restoration-studio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Restoration Studio | Carly Clark Zimmer",
  description: event.description,
};

export default function RestorationStudioPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#register">Skip to registration</a>
      <section className={styles.hero} aria-labelledby="studio-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{event.title}</p>
          <h1 id="studio-title">Make Room for<br /><em>What Matters</em></h1>
          <p className={styles.description}>{event.description}</p>
          <p className={styles.eventDetails}><span>{event.date}</span><span>{event.time} <span aria-hidden="true">·</span> {event.location}</span></p>
          <a className={styles.button} href="#register">{event.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.photo}>
          <img src="/carly-restoration-studio.png" alt="Carly Clark Zimmer laughing on stone steps in a berry-colored jacket" width={3000} height={3000} fetchPriority="high" />
        </div>
      </section>

      <section className={styles.invitation} aria-labelledby="invitation-title">
        <p className={styles.eyebrow}>The Restoration Studio</p>
        <h2 id="invitation-title">You built your business to create more freedom in your life.</h2>
        <div className={styles.prose}>
          <p>But somewhere along the way, the business started taking up more and more of that space.</p>
          <p>Maybe you have paints sitting untouched, books you keep meaning to read, places you want to explore, or hobbies you genuinely love but rarely make time for.</p>
          <p>And you know something about the way you&apos;re running your business needs to change.</p>
        </div>
      </section>

      <section className={styles.experience} aria-labelledby="experience-title">
        <div>
          <p className={styles.eyebrow}>A live creative coaching experience</p>
          <h2 id="experience-title">The Restoration<br /><em>Studio</em></h2>
        </div>
        <div className={styles.prose}>
          <p>Join Carly Clark Zimmer, Holistic Business Leadership Coach, for <strong>The Restoration Studio</strong>, a creative pop-up experience designed to help you reconnect with what matters outside of work and explore what&apos;s getting in the way.</p>
          <p>Through a guided visual mapping or collage exercise, coaching prompts, and reflection, you&apos;ll explore the life you want more room for, the habits and beliefs that keep pulling you back into work, and the business decisions that could begin creating space for something different.</p>
        </div>
      </section>

      <section className={styles.takeaways} aria-labelledby="takeaways-title">
        <h2 id="takeaways-title">You&apos;ll leave with:</h2>
        <ol>
          {event.takeaways.map((takeaway, index) => <li key={takeaway}><span aria-hidden="true" className={styles.number}>0{index + 1}</span><p>{takeaway}</p></li>)}
        </ol>
      </section>

      <section id="register" className={styles.registration} aria-labelledby="register-title">
        <div className={styles.registrationCopy}>
          <p className={styles.eyebrow}>{event.title}</p>
          <h2 id="register-title">Make Room for<br /><em>What Matters</em></h2>
          <p className={styles.eventDetails}><span>{event.date}</span><span>{event.time} <span aria-hidden="true">·</span> {event.location}</span></p>
          <p>No artistic experience necessary. Bring paper, markers, magazines, or whatever creative supplies you have on hand.</p>
        </div>
        <form action={drip.action} className={styles.form} data-drip-embedded-form={drip.formId} id={`drip-ef-${drip.formId}`} method="post">
          <label htmlFor="studio-first-name">First Name</label>
          <input autoComplete="given-name" id="studio-first-name" name="fields[first_name]" type="text" />
          <label htmlFor="studio-email">Email Address <span className={styles.required}>(required)</span></label>
          <input autoComplete="email" id="studio-email" name="fields[email]" required type="email" />
          <input name="fields[optin_source]" type="hidden" value={drip.optinSource} />
          <div aria-hidden="true" className={styles.honeypot}>
            <label htmlFor="studio-website">Website</label>
            <input autoComplete="off" id="studio-website" name="website" tabIndex={-1} type="text" />
          </div>
          <DripRecaptcha inputId="studio-recaptcha-response" siteKey={drip.recaptchaSiteKey} />
          <input name="tags[]" type="hidden" value={drip.campaignTag} />
          <button className={styles.button} data-drip-attribute="sign-up-button" type="submit">{event.cta}<span aria-hidden="true">↗</span></button>
          <a className={styles.privacyLink} href="/privacy" rel="noreferrer" target="_blank">Privacy Policy</a>
        </form>
      </section>
      <div className={styles.closing}><p>Come as you are, get a little creative, and give yourself permission to imagine what your business could make possible.</p></div>
    </div>
  );
}
