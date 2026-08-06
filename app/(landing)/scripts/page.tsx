/* eslint-disable @next/next/no-img-element -- approved static brand photography */
import type { Metadata } from "next";
import styles from "./page.module.css";

const telegramCommunityUrl = "https://t.me/+HFqmSD8GYW4wMmRh";
const description =
  "An email is on its way to your inbox with all the details for how to access your tool kit.";

export const metadata: Metadata = {
  title: "Laser Coach Lab",
  description,
  keywords: [
    "breakthrough coaching tool",
    "AI coaching tool",
    "laser coaching",
    "quick coaching clarity",
    "5-minute coach",
    "clarity coaching tool",
    "burnout coaching tool",
    "fast breakthrough tool",
  ],
  alternates: {
    canonical: "/scripts",
  },
  openGraph: {
    type: "website",
    title: "Laser Coach Lab",
    description,
    url: "/scripts",
  },
};

export default function ScriptsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero} aria-labelledby="scripts-title">
        <p>WELCOME to the</p>
        <h1 id="scripts-title">LASER COACHING LAB!</h1>
      </header>

      <section className={styles.welcome} aria-labelledby="welcome-heading">
        <div className={styles.copy}>
          <h2 id="welcome-heading">I’m so glad you’re here!</h2>
          <p className={styles.emailNotice}>
            An email is on its way to your inbox with all the details for how to
            access your tool kit.
          </p>
          <p className={styles.telegramPrompt}>
            <em>
              In the meantime, click here to join our{" "}
              <a
                href={telegramCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram community
              </a>{" "}
              and introduce yourself!
            </em>
          </p>
          <p>
            Please feel free to share:
            <br />
            What you’re currently working on
            <br />
            The pattern you’ve been noticing.
            <br />
            And if you&apos;re comfortable, the thing you are avoiding.
          </p>
          <p>
            We will work with what&apos;s present.
            <br />
            Simplify your next step.
            <br />
            And we will keep the grounded momentum going.
          </p>
          <p>
            I look forward to supporting you in breaking these bottleneck
            patterns and helping you move gracefully toward your goals!
          </p>
        </div>

        <figure className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer seated on stone steps in a berry-colored jacket"
          />
          <figcaption>
            <strong>LASER COACHING LAB</strong>
            <span>WITH CARLY CLARK ZIMMER</span>
          </figcaption>
        </figure>
      </section>

      <section className={styles.begin} aria-label="Closing message">
        <p>Let&apos;s Begin!</p>
      </section>

      <footer className={styles.footer}>
        <span>© carlyclarkzimmer.com Balance by the Bay, LLC 2026</span>
      </footer>
    </main>
  );
}
