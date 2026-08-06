/* eslint-disable @next/next/no-img-element -- approved project photography */
import type { Metadata } from "next";
import styles from "./page.module.css";

const canonicalPath = "/walk-the-house-exercise";
const title = "Walk the House Exercise";
const description =
  "A guided exercise for seasoned entrepreneurs navigating identity up-level.";
const videoUrl =
  "https://player.vimeo.com/video/1152679286?h=8ccf143908&badge=0&autopause=0&player_id=0&app_id=58479";
const guideUrl =
  "https://drive.google.com/file/d/1OPD_Zk8vYEKoEvtqgyMtXt7K77RUhngd/view?usp=sharing";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title,
    description,
    url: canonicalPath,
  },
};

export default function WalkTheHouseExercisePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="top">
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>When Change Is Calling, Start Here:</p>
          <h1>
            A guided exercise for seasoned entrepreneurs navigating{" "}
            <em>identity up-level</em>
          </h1>
          <div className={styles.videoFrame}>
            <iframe
              src={videoUrl}
              title="Walk the House Exercise"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            className={styles.guideLink}
            href={guideUrl}
            target="_blank"
            rel="noreferrer"
          >
            Click here to access the companion guide
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className={styles.orientation}>
        <div className={styles.sectionMarker} aria-hidden="true">01</div>
        <article className={styles.orientationCopy}>
          <p className={styles.opening}>
            When change is calling, most people try to push forward.
            <br />
            That usually leads to burnout because the instinct is action
            instead of orientation.
          </p>
          <p>
            For this exercise, I want you to think of your identity like a
            house.
          </p>
          <p>
            Your business, leadership, relationships, and inner world are all
            different rooms. Some still feel great. Some were designed for an
            earlier season. And some are starting to feel like dated design
            choices you have been politely ignoring.
          </p>
          <p>
            In <em>Walk the House</em> we will move through those rooms
            together. Think HGTV Nate Berkus and Jeremiah Brent energy, but for
            your inner world.
          </p>
          <p>
            We are looking at what you want to keep and amplify, what is ready
            to be released with a little joy, and what needs to be redesigned
            so your next chapter actually fits.
          </p>
          <p className={styles.accentLine}>The goal is simple.</p>
          <p>
            You leave with a clear visual for where circulation is getting
            stuck and exactly where to focus when it comes to internal growth.
          </p>
          <div className={styles.contactBlock}>
            <p>Once you are done, let me know how it goes!</p>
            <ul aria-label="Ways to contact Carly">
              <li>
                <span aria-hidden="true">🟠</span>{" "}
                <a href="https://voxer.app.link/profile?username=carlyclarkzimmer" target="_blank" rel="noreferrer">Voxer</a>
              </li>
              <li>
                <span aria-hidden="true">💌</span> Email{" "}
                <a href="mailto:carly@carlyclarkzimmer.com">carly@carlyclarkzimmer.com</a>
              </li>
              <li>
                <span aria-hidden="true">📸</span>{" "}
                <a href="https://www.instagram.com/carlyclarkzimmer/" target="_blank" rel="noreferrer">Instagram</a>
              </li>
            </ul>
            <p>Have fun with it!</p>
          </div>
        </article>
      </section>

      <section className={styles.about}>
        <figure className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer standing outdoors in a teal jacket"
            width="3752"
            height="5628"
          />
          <figcaption>
            <strong>CARLY CLARK ZIMMER</strong>
            <span>Life &amp; Leadership Coaching &amp; Consulting</span>
            <span>carlyclarkzimmer.com</span>
          </figcaption>
        </figure>
        <article className={styles.aboutCopy}>
          <p>Hey there! I&apos;m Carly.</p>
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
            You’ve seen this pattern hundreds of times:
            <br />
            Clarity is rarely the issue.
          </p>
          <p>
            Sustainable growth requires internal coherence.
            <br />
            The alignment between identity, decision-making, and structure.
          </p>
          <p>
            My work restores that coherence.
            <br />
            Clients describe feeling calmer, clearer, and more decisive. If
            this is something you&apos;d like to explore,{" "}
            <a href="https://carlyclarkzimmer.com/" target="_blank" rel="noreferrer">
              click here to view services
            </a>{" "}
            or reach out to me directly.
          </p>
        </article>
      </section>

      <footer className={styles.footer}>© Balance by the Bay, LLC 2026</footer>
    </div>
  );
}
