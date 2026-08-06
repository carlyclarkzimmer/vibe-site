/* eslint-disable @next/next/no-img-element -- preserve approved photography with CSS-controlled crops */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const listeningLinks = [
  {
    label: "Apple Podcasts",
    detail: "Listen in Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/trust-issues/id1846677283",
  },
  {
    label: "Spotify",
    detail: "Listen in Spotify",
    href: "https://open.spotify.com/show/1tuGbg3VTegweHUkPiGoLj?si=73632d54585743fc",
  },
  {
    label: "Web browser",
    detail: "Listen without a podcast app",
    href: "https://podcasts.helloaudio.fm/playlistPlayer?feedId=1a28ab97-32df-40d9-80ba-3c2a68689b59&code=6CBnWI2OX6&fullFeed=true",
  },
] as const;

export const metadata: Metadata = {
  title: "Trust Issues Private Podcast",
  description:
    "Exploring the erosion and rebuilding of trust in yourself, your business, and the online world.",
  keywords: ["navigating change", "identity uplevel", "rebuilding after success"],
  alternates: { canonical: "/trust-issues" },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title: "Trust Issues Private Podcast",
    description:
      "Exploring the erosion and rebuilding of trust in yourself, your business, and the online world.",
    url: "/trust-issues",
    images: [
      {
        url: "https://lh3.googleusercontent.com/Y4ptLE2oaa5sUOBeVbbcjeKgqcc7ObkabZlvRiJ5lhl3lCx7FhfSNhlsYJlwOKZbkd-n7Y1mTqPKToo1QD_-QT3VCPqLc5rzWQ=s0",
        width: 1500,
        height: 1500,
        alt: "Trust Issues Private Podcast",
      },
    ],
  },
};

export default function TrustIssuesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="top">
        <div className={styles.heroPortrait} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Private audio series</p>
          <h1>Trust<br /><em>Issues</em></h1>
          <p className={styles.lead}>
            This five-part private podcast is your invitation to rebuild the most important asset in your business: <em>trust.</em>
          </p>
          <div className={styles.listeningLinks} aria-label="Choose where to listen">
            {listeningLinks.map((link, index) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                <span className={styles.number}>0{index + 1}</span>
                <span><strong>{link.label}</strong><small>{link.detail}</small></span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.heroAside} aria-hidden="true">
          <span>Five episodes</span>
          <div className={styles.disc}>TI</div>
          <p>Self-trust<br />Aligned decisions<br />Grounded leadership</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.portraitBlock}>
          <img src="/carly-series-intro.png" alt="Carly Clark Zimmer smiling in a berry-colored jacket" width="1638" height="2048" />
          <p>Carly Clark Zimmer<br /><span>Life &amp; Leadership Coaching</span></p>
        </div>
        <article className={styles.storyCopy}>
          <p className={styles.eyebrow}>Hi, I’m Carly,</p>
          <h2>Trust is where aligned decisions begin.</h2>
          <p>I&apos;m a multi-dimensional Life and Business Coach. I’ve spent the past eight years coaching both groups and individuals through deep transformation.</p>
          <p>Before I ever coached online, I spent twelve years as a licensed massage therapist in New York City, helping high achievers who looked “fine” on the outside but whose bodies told a different story.</p>
          <p>Their bodies were craving ease, fulfillment, and joy.</p>
          <p>They didn’t know how to <em>trust</em> that creating a life aligned with their values could actually feel safe.</p>
          <p><strong>They just didn’t know how to <em>allow</em> themselves to trust that the decisions they made to bring their life into alignment with their values were actually safe.</strong></p>
          <p>One step at a time, one choice after another, their health and their lives improved.</p>
          <p>Now, I help heart-centered leaders do the same in their businesses. <strong>Together, we understand the fear, quiet the noise, and create the inner safety required for self-trust and aligned decision making.</strong></p>
          <p>I help you hear what your soul is saying first. Then we layer in aligned strategy so you have a sustainable plan for growth that supports both your impact and your well-being.</p>
          <p>When you trust yourself, everything else in your business, your clarity, your confidence, your leadership starts to click into place.</p>
          <p className={styles.closing}>This podcast will awaken the truth within you and remind you that clarity isn’t found out there. It’s been inside you all along.</p>
          <a className={styles.storyCta} href="#top">Choose where to listen <span aria-hidden="true">↑</span></a>
        </article>
      </section>

      <section className={styles.pledge}>
        <p className={styles.eyebrow}>Our commitment</p>
        <h2>Cross-Cultural Competency, Awareness, and Equity Pledge:</h2>
        <div>
          <p>I stand in solidarity with Black, Brown, Indigenous, Minority Ethnic, and People of Colour, LGBTQIA+ &amp; those who hold culturally and systemically marginalized identities to dismantle systemic racism. I pledge to continue to comb through my cultural bias, vet coaching tools and philosophies, and question business systems &amp; practices for their equality and effectiveness instead of blindly following what has been done before. After all, if you&apos;ve read this far you know that this is everything I&apos;m here to dismantle both systemically and within ourselves.</p>
          <p>My communities have a strict vetting process so that we can provide a safe, trauma-informed space for people of all identities to learn, grow, ask questions, and provide their own valuable insight and feedback for us all to learn from.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <nav aria-label="Trust Issues footer navigation">
          <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/client-results">Client results</Link><Link href="/contact">Contact</Link>
        </nav>
        <Link className={styles.newsletter} href="/newsletter">Sign up to the newsletter →</Link>
        <p>© 2026 Balance by the Bay, LLC · <Link href="/privacy">Privacy Policy</Link></p>
      </footer>
    </div>
  );
}
