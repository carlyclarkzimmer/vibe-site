/* eslint-disable @next/next/no-img-element -- static brand photography served directly */
import type { Metadata } from "next";
import styles from "../legacy-pages.module.css";

export const metadata: Metadata = {
  title: "5-Minute Laser Coach: AI Coach Big Breakthrough. No Fluff. In 5 minutes or less.",
  description: "Unlock fast, powerful breakthroughs with the ⚡5-Minute Laser Coach by Carly Clark Zimmer.",
};

const install = "https://chatgpt.com/g/g-67b5f67cff3081919abcb049e4e8d26c-5-minute-laser-coach";

export default function Page() {
  return <div className={`${styles.page} ${styles.deliveryPage}`}>
    <section className={styles.hero}><div className={styles.inner}><p className={styles.eyebrow}>Install⚡️5-Minute Laser Coach</p><h1>Video Walkthrough</h1><div className={styles.video}><iframe src="https://player.vimeo.com/video/1059763588?h=d4fb2fa0a4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="5-Minute Laser Coach video walkthrough" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div><a className={styles.cta} href={install}>→Click here to install 5-Minute Laser Coach←</a><p>If you need help at any time, please reach out to carly@carlyclarkzimmer.com</p><p>I&apos;d also love to know how the GPT works for you so let&apos;s connect on Instagram! 📸<a href="https://www.instagram.com/carlyclarkzimmer/">@carlyclarkzimmer</a></p></div></section>

    <section className={styles.about}><div className={styles.aboutGrid}>
      <div className={styles.aboutCopy}><h2 className={styles.aboutTitle}>Created by Carly Clark Zimmer</h2><h3 className={styles.aboutIntro}>I’m an ICF-certified Life and Business Coach who helps successful business owners stop becoming the bottleneck inside businesses they built for freedom.</h3><p>My work combines behavioral change with practical business strategy.</p><p>Because usually, the problem isn’t that you don’t know enough.</p><p><strong>It’s that an old pattern, automatic decision, or competing priority is making it harder to follow through on what you already know.</strong></p><p>That’s exactly what 5-Minute Laser Coach is designed to help you see.</p><a className={`${styles.cta} ${styles.aboutCta}`} href={install}>Get ⚡️5-Minute Laser Coach Access</a></div>
      <img className={styles.aboutPortrait} src="/carly-services-restoration.jpg" alt="Carly Clark Zimmer in a magenta jacket" width={3840} height={5760} />
    </div></section>

    <footer className={styles.footer}>© carlyclarkzimmer.com Balance by the Bay, LLC 2025</footer>
  </div>;
}
