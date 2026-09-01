import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "5-Minute Laser Coach: AI Coach Big Breakthrough. No Fluff. In 5 minutes or less.",
  description: "Unlock fast, powerful breakthroughs with the ⚡5-Minute Laser Coach by Carly Clark Zimmer.",
};

const install = "https://chatgpt.com/g/g-67b5f67cff3081919abcb049e4e8d26c-5-minute-laser-coach";

export default function Page() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={styles.inner}>
      <p className={styles.eyebrow}>Install ⚡️5-Minute Laser Coach</p>
      <h1>Video Walkthrough <span>Helpful if you&apos;re new to Chat GPT</span></h1>
      <div className={styles.video}><iframe src="https://player.vimeo.com/video/1059763588?h=d4fb2fa0a4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Video Walkthrough - Helpful if you're new to Chat GPT" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
      <a className={styles.cta} href={install}>Click here to install 5-Minute Laser Coach →</a>
      <div className={styles.supportCopy}>
        <p>If you need help at any time, please reach out to <a href="mailto:carly@carlyclarkzimmer.com">carly@carlyclarkzimmer.com</a></p>
        <p>I&apos;d also love to know how the GPT works for you so let&apos;s connect on Instagram! 📸 <a href="https://www.instagram.com/carlyclarkzimmer/">@carlyclarkzimmer</a></p>
      </div>
    </div></section>

    <section className={styles.dark}><div className={styles.inner}>
      <h2>Imagine having a coach in your pocket that:</h2>
      <ul><li>✅ Ends the inner war between your desires and doubts</li><li>✅ Cuts through overthinking in minutes</li><li>✅ Guides you to your next aligned step</li><li>✅ Helps you clear energetic and mindset blocks instantly</li><li>✅ Settles your nervous system so you can lead with grounded confidence—even when decisions feel deeply personal</li></ul>
      <a className={styles.cta} href={install}>Start Your 5-Minute Breakthrough</a>
    </div></section>

    <section className={styles.about}><div className={styles.aboutInner}>
      <p className={styles.label}>Hey there! I&apos;m Carly.</p>
      <h2>An ICF-certified Life and Business Coach with eight years of experience supporting seasoned entrepreneurs and senior leaders through high-stakes transitions.</h2>
      <div className={styles.aboutCopy}><p>I specialize in identity-based leadership work, with formal training in Internal Family Systems and advanced behavioral pattern recognition.</p><p>Most of my clients look successful on paper. What they experience privately is internal strain during growth, visibility shifts, or structural change.</p><p>Nothing is broken.</p><p>Their operating structures simply no longer match who they&apos;ve become.</p></div>
    </div></section>

    <footer className={styles.footer}>© carlyclarkzimmer.com Balance by the Bay, LLC 2026</footer>
  </div>;
}
