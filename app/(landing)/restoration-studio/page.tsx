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
      <div className={styles.heroBand}>
      <section className={styles.hero} aria-labelledby="studio-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{event.title}</p>
          <h1 id="studio-title">{event.headline.replace(/Next Chapter$/, "")}<span className={styles.headlineAccent}>Next Chapter</span></h1>
          <p className={styles.description}><strong>{event.description}</strong></p>
          <p className={styles.heroInvitation}>Before the Black Friday rush and end-of-year busyness, come spend an hour reconnecting with the parts of yourself that have been waiting for a little attention.</p>
          <p className={styles.heroInvitation}>Through simple creative exercises, visual mapping, and guided coaching, we&apos;ll explore what you want your next chapter to look and feel like, and what might need to shift in your business to support it.</p>
          <p className={styles.artNote}><strong>No art experience necessary. Just curiosity. 🎨</strong></p>
          <p className={styles.eventDetails}>{event.heroDetails}</p>
          <a className={styles.button} href="#register">{event.heroCta}</a>
        </div>
        <div className={styles.photo}>
          <img src="/carly-restoration-studio-painting.jpg" alt="Carly Clark Zimmer holding paintbrushes in front of her paintings" width={4032} height={3024} fetchPriority="high" />

        </div>
      </section>
      </div>

      <section className={styles.experience} aria-labelledby="experience-title">
        <div className={styles.experienceLayout}>
          <figure className={styles.artwork}>
            <img src="/restoration-studio-artwork.png" alt="Hands blending colorful chalk pastels into expressive abstract marks on black paper" width={1974} height={2040} loading="lazy" />
            <figcaption>Art in the making.</figcaption>
          </figure>
        <div className={styles.prose}>
          <p className={styles.eyebrow}>Make Room for What Matters</p>
          <div className={styles.creativeHeading}>
            <h2 id="experience-title">What we’ll do.</h2>
            <svg className={styles.drawnArrow} aria-hidden="true" viewBox="0 0 130 100"><path d="M10 12C75 0 104 37 88 73M67 57l20 21 24-19" /></svg>
          </div>
          <p>A creative break with a practical takeaway.</p>
          <ol className={styles.workshopSteps}>
            {event.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
          <div className={styles.takeaways}>
            <h3>You&apos;ll leave with:</h3>
            <ul>{event.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
          </div>
        </div>
        </div>
      </section>

      <section id="register" className={styles.registration} aria-labelledby="register-title">
        <div className={styles.registrationCopy}>
          <p className={styles.eyebrow}>{event.title}</p>
          <h2 id="register-title">Save your spot.</h2>
          <p className={styles.eventDetails}><span>{event.date}</span><span>{event.time} <span aria-hidden="true">·</span> {event.location}</span></p>
          <p>No artistic experience necessary. Paper and markers or colored pencils are enough; magazines and collage supplies are optional.</p>
          <p className={styles.offer}>Free Creative Coaching Workshop</p>
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
      <p className={styles.host}>Hosted by Carly Clark Zimmer, ICF Professional Certified Coach and creator of the Business Restoration Method.</p>
    </div>
  );
}
