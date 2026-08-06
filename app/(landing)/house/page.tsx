/* eslint-disable @next/next/no-img-element -- preserve approved and verified page imagery without destructive processing */
import type { Metadata } from "next";
import { houseLandingPage } from "../../../content/campaigns/house";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: houseLandingPage.title,
  description: houseLandingPage.description,
  keywords: [...houseLandingPage.keywords],
  alternates: {
    canonical: houseLandingPage.canonicalPath,
  },
  openGraph: {
    type: "website",
    title: houseLandingPage.title,
    description: houseLandingPage.description,
    url: houseLandingPage.canonicalPath,
  },
};

export default function HousePage() {
  return (
    <div className={styles.page}>
      <aside className={styles.memberNote}>
        <p>
          Mixermind Members:{" "}
          <a
            href={houseLandingPage.mixermindUrl}
            target="_blank"
            rel="noreferrer"
          >
            Access the <span>Stability Inside Change</span> resource
          </a>{" "}
          here inside the Mixermind Portal under pod leader training.
        </p>
      </aside>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.signupCard}>
            <p className={styles.eyebrow}>When Change Is Calling, Start Here:</p>
            <h1>
              A guided exercise for seasoned entrepreneurs navigating{" "}
              <em>identity up-level</em>
            </h1>
            <img
              className={styles.cover}
              src="/walk-the-house-cover.png"
              alt="Walk the House — a 10-minute exercise to spot where your life and business feel spacious, cramped, cluttered, or stuck"
              width={1062}
              height={597}
            />
            <form
              action={houseLandingPage.form.action}
              className={styles.form}
              data-thank-you={houseLandingPage.form.thankYouUrl}
              method="post"
              target="_top"
            >
              <label htmlFor="house-first-name">First Name</label>
              <input
                id="house-first-name"
                name={houseLandingPage.form.firstNameField}
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
              />
              <label htmlFor="house-email">Email Address</label>
              <input
                id="house-email"
                name={houseLandingPage.form.emailField}
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
              />
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="house-confirm-existence">
                  If you are human, leave this blank.
                </label>
                <input
                  id="house-confirm-existence"
                  name="confirm-existence"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              <button type="submit">Access the Exercise</button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.promise}>
        <p>
          <strong>
            If you&apos;re an entrepreneur stepping into a new level of
            leadership, visibility, or expansion,
          </strong>{" "}
          the first thing to assess is what&apos;s blocking the flow and
          circulation in your business, and that is exactly what this exercise
          will help you do.
        </p>
      </section>

      <section className={styles.exercise}>
        <div className={styles.exerciseCopy}>
          <p>
            <strong>
              For this exercise, think of your life and business like your
              house.
            </strong>
          </p>
          <p>The different areas of your life are the rooms in your house.</p>
          <p>
            Your business structure, offers, systems, audience, clients, team,
            leadership, your relationships, behaviors, habits, and how you
            relate to yourself.
          </p>
          <p>
            <strong>
              As you go through this short exercise, ask yourself if each of
              the &quot;rooms&quot; feels like the image on the left or the
              right.
            </strong>
          </p>
        </div>
        <figure className={styles.rooms}>
          <img
            src="/walk-the-house-rooms.png"
            alt="A cluttered room beside the same room cleared and spacious"
            width={1064}
            height={1068}
          />
        </figure>
      </section>

      <section className={styles.outcome}>
        <p>
          <strong>
            You&apos;ll move through those rooms to evaluate circulation and
            flow, what you want to keep and amplify, what is ready to be
            released with a little joy, and what needs to be redesigned so your
            next chapter actually fits.
          </strong>
        </p>
        <p className={styles.accent}>
          Think HGTV Nate Berkus and Jeremiah Brent energy, but for your inner
          world!
        </p>
        <p>
          You leave with a clear visual for where circulation is getting stuck
          and exactly where to focus when it comes to internal growth.
        </p>
      </section>

      <section className={styles.about}>
        <figure className={styles.portrait}>
          <img
            src="/carly-supporting.jpg"
            alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket"
            width={1280}
            height={1920}
          />
        </figure>
        <div className={styles.aboutCopy}>
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
            Sustainable growth requires internal coherence. The alignment
            between identity, decision-making, and structure.
          </p>
          <p>
            My work restores that coherence.
            <br />
            Clients describe feeling calmer, clearer, and more decisive.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>carlyclarkzimmer.com</span>
        <span>© Balance by the Bay, LLC 2026</span>
      </footer>
    </div>
  );
}
