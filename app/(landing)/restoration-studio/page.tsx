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
          <h1 id="studio-title">{event.headline}</h1>
          <p className={styles.description}>{event.description}</p>
          <p className={styles.heroInvitation}>Before the Black Friday sprint kicks in, take a break from your business to-do list and reconnect with your creative side.</p>
          <p className={styles.heroInvitation}>We’ll spend 75 minutes drawing, exploring ideas, and using guided coaching prompts to discover what you want more room for—and one business change that could help make that possible.</p>
          <p className={styles.eventDetails}><span>{event.date}</span><span>{event.time} <span aria-hidden="true">·</span> {event.location}</span></p>
          <a className={styles.button} href="#register">{event.cta}<span aria-hidden="true">↗</span></a>
          <p className={styles.artNote}>No artistic experience necessary.</p>
        </div>
        <div className={styles.photo}>
          <img src="/carly-restoration-studio-painting.jpg" alt="Carly Clark Zimmer holding paintbrushes in front of her paintings" width={4032} height={3024} fetchPriority="high" />
          <svg className={styles.brushstroke} aria-hidden="true" viewBox="0 0 180 42"><path d="M4 17 17 13 24 15 38 9 55 11 70 7 87 9 104 5 118 8 134 5 150 9 164 7 160 12 177 13 170 18 176 21 158 24 161 28 141 27 123 31 103 29 85 34 67 31 51 35 34 32 22 35 26 29 10 30 14 25 2 25 10 21Z" /><path d="m9 32 35 2 37-2 45-4 39-3-16 5-39 3-44 4-29-1Zm2-19 34-7 31 1 35-5 31 3-39 1-28 4-31-1Z" /></svg>
        </div>
      </section>
      </div>

      <section className={styles.experience} aria-labelledby="experience-title">
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
          <figure className={styles.creativeGallery}>
            <div className={styles.creativeImages}>
              <div><img src="/restoration-studio-collage.png" alt="Illustrative image of hands drawing and arranging paper collage" width={1536} height={1024} loading="lazy" /></div>
              <div><img src="/restoration-studio-virtual-creative.png" alt="Illustrative image of a woman making art beside a laptop for a virtual workshop" width={1536} height={1024} loading="lazy" /></div>
            </div>
            <figcaption>AI-generated creative-process imagery.</figcaption>
          </figure>
          <div className={styles.takeaways}>
            <h3>You&apos;ll leave with:</h3>
            <ul>{event.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
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
