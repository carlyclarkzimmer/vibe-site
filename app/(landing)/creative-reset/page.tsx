import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Creative Reset Workshop Replay | Carly Clark Zimmer",
  description: "Watch The Restoration Studio: A Creative Reset for Your Next Season, and explore the Living Business Lounge.",
};

export default function CreativeResetPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#replay">Skip to the workshop replay</a>
      <header className={styles.introduction}>
        <p className={styles.eyebrow}>The Restoration Studio · Workshop Replay</p>
        <h1>A Creative Reset for<br /><em>Your Next Season.</em></h1>
        <p>There&apos;s room to be curious, make a mess, try something new, and enjoy the process without needing to produce anything impressive.</p>
        <p className={styles.byline}>With Carly Clark Zimmer</p>
      </header>

      <section id="replay" className={styles.replay} aria-label="Workshop replay">
        <div className={styles.player}>
          <iframe
            src="https://player.vimeo.com/video/1244380793?h=c2e2ffa47c&dnt=1"
            title="The Restoration Studio: A Creative Reset for Your Next Season — workshop replay"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className={styles.videoHelp}>Having trouble watching? <a href="https://vimeo.com/1244380793/c2e2ffa47c" target="_blank" rel="noreferrer">Watch on Vimeo <span className={styles.srOnly}>(opens in a new tab)</span><span aria-hidden="true">↗</span></a></p>
      </section>

      <section className={styles.invitation} aria-labelledby="lounge-title">
        <div className={styles.bridge}>
          <p>The Studio gives us space to pause, create, and connect. The Lounge gives us a place to keep practicing together, with ongoing coaching, community, and support for the changes we&apos;re making in our businesses and lives.</p>
        </div>
        <div className={styles.offer}>
          <div className={styles.offerHeading}>
            <p className={styles.eyebrow}>The Living Business Lounge</p>
            <h2 id="lounge-title">A place to practice running your business,<br /><em>without losing yourself in it.</em></h2>
          </div>
          <div className={styles.offerCopy}>
            <p>The Living Business Lounge is an ongoing coaching community for established business owners who already have clients, generate revenue, and are ready to be more intentional about what comes next.</p>
            <p>Together, we&apos;ll create space to work on your business, clarify what needs to evolve, and turn your priorities into meaningful action.</p>
            <ul className={styles.support}>
              <li>A personalized, one-page Living Business Focus roadmap</li>
              <li>Two live coaching calls each month</li>
              <li>Private check-ins every 90 days</li>
              <li>Coaching and community during our designated Voxer support week</li>
            </ul>
            <p>If you&apos;re ready to make intentional space for the next chapter of your business, with ongoing coaching and a community to help you bring it to life, I&apos;d love to welcome you into the Living Business Lounge.</p>
            <a className={styles.button} href="https://carlyclarkzimmer.com/lounge" target="_blank" rel="noreferrer">Explore the Living Business Lounge <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
            <p className={styles.signature}>Keep making room for what matters,<br />Carly</p>
          </div>
        </div>
      </section>
    </div>
  );
}
