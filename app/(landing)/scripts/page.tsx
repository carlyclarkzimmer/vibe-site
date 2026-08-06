/* eslint-disable @next/next/no-img-element -- approved static brand photography */
import type { Metadata } from "next";
import styles from "./page.module.css";

const scriptsFormUrl =
  "https://carlyclarkzimmer.com/serve-leadbox/fDiiXkm8GBZSPmyYfH2i3Q/";

const description = [
  "Simple, powerful phrases to help you say “no” with grace, set limits on your time, and communicate with kindness—all while staying true to yourself.",
  "These are your go-to scripts for building healthy boundaries that honor your energy and create space for what truly matters. ",
  "Let’s make authentic, fulfilling connections a part of your everyday life!",
].join("\n\n");

export const metadata: Metadata = {
  title: "Go-To Communication Scripts",
  description,
  keywords: ["Life Coaching", "Life Coaching Tools", "Personal Development Tool"],
  alternates: {
    canonical: "/scripts",
  },
  openGraph: {
    type: "website",
    title: "Go-To Communication Scripts",
    description,
    url: "/scripts",
    images: [
      {
        url: "https://lh3.googleusercontent.com/Ph0po8KYlSFKiLVA9MxJZVRlkBDzB8fTsBMfs9xgxKuV1u9x_q9qR2_hrGYRfAFuHyx0Jcdc7bboB1EzyNnWNPxjljB6FPe8MhI=s0",
        width: 2318,
        height: 1316,
        type: "image/png",
      },
    ],
  },
};

const benefits = [
  "Simple, powerful scripts to say “no” without guilt (or a long-winded explanation).",
  "Kind but firm phrases to set limits on your time and energy.",
  "Tools to communicate with confidence, even when the conversation feels tricky.",
];

const certifications = [
  "International Coaching Federation Certified: PCC",
  "Coaches Rising: Neuroscience of Coaching and Power of Presence Leadership Training",
  "Certified Institute for Equity-Centered Coaching",
  "Certified BodyMind Method© Somatic Coaching",
  "Certified Kolbe™ Consultant",
  "Eight + Years of Coaching Experience",
];

export default function ScriptsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="scripts-title">
        <div className={styles.heroImage} aria-hidden="true">
          <img src="/carly-hero.jpg" alt="" />
        </div>
        <div className={styles.offer}>
          <p className={styles.eyebrow}>Boundary Scripts</p>
          <h1 id="scripts-title">Simple phrases. Big impact.</h1>
          <p className={styles.intro}>
            Let’s face it—between work demands, family expectations, and the
            constant pull to be everything to everyone, boundaries can feel…
            impossible.
          </p>
          <div className={styles.benefits}>
            <h2>Inside You&apos;ll Find:</h2>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <p className={styles.promise}>
            <em>Let’s make boundaries that feel as good to set as they are to keep!</em>
          </p>
          <a className={styles.primaryCta} href={scriptsFormUrl}>
            Get the Scripts
          </a>
        </div>
      </section>

      <section className={styles.about} aria-labelledby="about-carly">
        <div className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer seated on stone steps in a berry-colored jacket"
          />
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.sectionLabel}>Meet Your Coach &amp; Facilitator:</p>
          <h2 id="about-carly">I&apos;m Carly Clark Zimmer,</h2>
          <p className={styles.role}>Certified Life and Leadership Coach</p>
          <p>
            I help heart-centered high achievers become better communicators so
            they can stay in integrity with themselves and navigate the world
            authentically. 💫
          </p>
          <p>
            With over 8 years of experience as an internationally certified
            coach, I’ve helped countless individuals unlock their authentic
            potential and break free from perfectionism.
          </p>
          <p>
            <strong>
              As a recovering perfectionist myself, I understand the challenges
              firsthand—it takes one to know one, and it takes one to coach one!
            </strong>
          </p>
          <p>
            My mission is to empower people with big hearts and big visions by
            giving them the tools to follow their authentic path, make a real
            difference, and live a deeply fulfilling life.
          </p>
          <p>I look forward to seeing you in class!</p>
        </div>
        <div className={styles.credentials}>
          <p className={styles.sectionLabel}>Training &amp; Certifications</p>
          <ul>
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© carlyclarkzimmer.com Balance by the Bay, LLC 2025</span>
      </footer>
    </main>
  );
}
