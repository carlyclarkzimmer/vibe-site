/* eslint-disable @next/next/no-img-element -- approved static brand photography */
import type { Metadata } from "next";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { rightRoleEmailCapture } from "../../../content/campaigns/right-role";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How to Make Your Next Hire, the RIGHT Hire with the Kolbe Index",
  description:
    "This short video training will show you how Kolbe will help you define exactly WHO your first, or next hire is, and help you avoid the management trap. After all... you didn't start your business to spend your days herding cats. Kolbe helps you focus on your zone of genius work, not on mediating team drama.",
  alternates: {
    canonical: "/right-role",
  },
  openGraph: {
    type: "website",
    title: "How to Make Your Next Hire, the RIGHT Hire with the Kolbe Index",
    description:
      "This short video training will show you how Kolbe will help you define exactly WHO your first, or next hire is, and help you avoid the management trap. After all... you didn't start your business to spend your days herding cats. Kolbe helps you focus on your zone of genius work, not on mediating team drama.",
    url: "/right-role",
  },
};

const lessons = [
  <>Define exactly WHO your first, or next hire is.</>,
  <>
    Understand your strengths so you can identify immediate areas to bring in
    support and effectively communicate your needs.
  </>,
  <>Help you craft an accurate job description to attract ideal candidates.</>,
  <>
    <strong>Avoid the management trap.</strong> You didn&apos;t start your
    business to spend your days herding cats. Kolbe helps you focus on your zone
    of genius work, not on mediating team drama.
  </>,
  <>
    <strong>Save time, energy and money</strong> so you can avoid the pitfalls of
    mismatched hires, reducing costly turnover and stress.
  </>,
];

const certifications = [
  "International Coaching Federation: PCC",
  "CE: Coaches Rising: Power of Presence Leadership Training",
  "Certified Institute for Equity-Centered Coaching",
  "Certified BodyMind Method© Somatic Coaching",
  "Certified Kolbe™ Consultant",
  "Seven + Years of Coaching Experience",
  "Countless other workshops, retreats, and personal study & experience.",
];

export default function RightRolePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img
            src="/carly-hero.jpg"
            alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket"
          />
        </div>
        <div className={styles.heroCopy}>
          <h1>
            Simplify How to Make Your Next Hire the <em>Right Hire</em>
          </h1>
          <h2>With the Kolbe Index</h2>
          <p>
            This <em>mini-class</em> will help you clarify the exact role you
            need so that you can feel supported as a leader instead of spending
            costly time and energy managing people.
          </p>
          <form
            action={rightRoleEmailCapture.action}
            className={styles.form}
            data-drip-embedded-form={rightRoleEmailCapture.formId}
            id={`drip-ef-${rightRoleEmailCapture.formId}`}
            method="post"
          >
            <div className={styles.formField}>
              <label htmlFor="right-role-first-name">First Name</label>
              <input
                autoComplete="given-name"
                id="right-role-first-name"
                name="fields[first_name]"
                type="text"
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="right-role-email">Email Address</label>
              <input
                autoComplete="email"
                id="right-role-email"
                name="fields[email]"
                required
                type="email"
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="right-role-social-media">
                Social Media <span>(Optional)</span>
              </label>
              <input
                id="right-role-social-media"
                name="fields[social_media]"
                type="text"
              />
            </div>
            <div aria-hidden="true" className={styles.honeypot}>
              <label htmlFor="right-role-website">Website</label>
              <input
                autoComplete="off"
                id="right-role-website"
                name="website"
                tabIndex={-1}
                type="text"
              />
            </div>
            <DripRecaptcha
              siteKey={rightRoleEmailCapture.recaptchaSiteKey}
            />
            <input
              name="tags[]"
              type="hidden"
              value={rightRoleEmailCapture.campaignTag}
            />
            <button data-drip-attribute="sign-up-button" type="submit">
              Instant Access
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
        </div>
      </section>

      <section className={styles.lessons}>
        <div className={styles.sectionHeading}>
          <h2>Here&apos;s what you&apos;ll learn...</h2>
        </div>
        <div className={styles.lessonCopy}>
          <ul>
            {lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
          <p>
            This isn&apos;t about who to say &quot;no&quot; to. It&apos;s about
            recognizing and communicating the demands of a job and finding a
            candidate whose instinctive approach is likely to make them
            successful.
          </p>
          <p className={styles.accentCopy}>
            The Kolbe fills the gap between equally important elements of
            values, mission, and personality, uniting them to form a cohesive
            and outstanding team!
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutCopy}>
          <h2>I&apos;m Carly Clark Zimmer,</h2>
          <p>
            Life &amp; Leadership Coach, and the Director of Leadership
            Development at When You Lead, Coaching &amp; Consulting.
          </p>
          <p>
            <strong>Our passion lies in UPDATING Leadership models.</strong> We
            aim to transform toxic, productivity-at-all-costs cultures into
            environments that are strengths-centered, equity-centered, and
            humanity-centered.
          </p>
          <p>
            One key tool we use in the beginning of our work with leaders and
            teams is the Kolbe Index—an assessment tool that uncovers your
            instinctive strengths.
          </p>
          <p>
            Leveraging this insight, I work with companies to establish
            communication systems that respect and incorporate the diverse
            communication styles within their teams.
          </p>
          <p>
            <strong>
              The outcome of this approach? Reduced stress and drama, enhanced
              quality productivity, happier teams, and growing profits!
            </strong>
          </p>
          <img
            className={styles.kolbe}
            src="/kolbe-certified.png"
            alt="Carly Clark Zimmer, Certified Kolbe Consultant"
            width={512}
            height={128}
          />
        </div>
        <div className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer standing outdoors in a teal jacket"
          />
        </div>
        <div className={styles.certifications}>
          <h2>Training &amp; Certifications</h2>
          <ul>
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© Balance by the Bay, LLC 2024</span>
        <a href="https://carlyclarkzimmer.com/">carlyclarkzimmer.com</a>
      </footer>
    </main>
  );
}
