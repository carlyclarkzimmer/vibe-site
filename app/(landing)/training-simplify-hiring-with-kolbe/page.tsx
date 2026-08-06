/* eslint-disable @next/next/no-img-element -- approved project photography */
import type { Metadata } from "next";
import styles from "./page.module.css";

const canonicalPath = "/training-simplify-hiring-with-kolbe";
const videoUrl =
  "https://player.vimeo.com/video/915632476?h=6126dfe951&badge=0&autopause=0&player_id=0&app_id=58479";
const bookingUrl = "https://carlyclarkzimmer.thrivecart.com/kolbe-session/";
const title = "Simplify Hiring with Kolbe";
const description =
  "The Kolbe fills the gap between equally important elements of values, mission, and personality, uniting them to form a cohesive and outstanding team!";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: canonicalPath,
  },
};

const certifications = [
  "PROFESSIONAL CERTIFIED COACH WITH THE INTERNATIONAL COACH FEDERATION",
  "DIRECTOR OF LEADERSHIP DEVELOPMENT FOR WHEN YOU LEAD COACHING & CONSULTING",
  "BODYMIND METHOD© CERTIFIED",
  "INSTITUTE FOR EQUITY-CENTERED COACHING",
  "CERTIFIED KOLBE™ CONSULTANT",
];

export default function SimplifyHiringWithKolbePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Simplify Hiring with Kolbe</p>
          <h1>
            How to Make Your Next Hire, the <em>RIGHT Hire!</em>
          </h1>
          <div className={styles.videoFrame}>
            <iframe
              src={videoUrl}
              title="Simplify Hiring with Kolbe"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className={styles.statement}>
            The Kolbe fills the gap between equally important elements of
            values, mission, and personality, uniting them to form a cohesive
            and outstanding team!
          </p>
          <div className={styles.nextStep}>
            <p>Your NEXT STEP...</p>
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Book Certified Kolbe Session with Carly
            </a>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutCopy}>
          <p className={styles.sectionLabel}>About Carly</p>
          <h2>
            I&apos;m Carly Clark Zimmer, Life &amp; Leadership Coach, and the
            Director of Leadership Development at When You Lead, Coaching &amp;
            Consulting.
          </h2>
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
          <p className={styles.outcome}>
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
        <figure className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer standing outdoors in a teal jacket"
          />
        </figure>
      </section>

      <section className={styles.credentials}>
        <div className={styles.credentialsInner}>
          <p className={styles.sectionLabel}>Experience</p>
          <h2>PROFESSIONALLY TRAINED, SEVEN+ YEARS EXPERIENCE</h2>
          <ul>
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>© Balance by the Bay, LLC 2024</footer>
    </div>
  );
}
