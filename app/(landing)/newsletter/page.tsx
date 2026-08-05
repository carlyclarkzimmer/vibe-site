/* eslint-disable @next/next/no-img-element -- preserve the source artwork as a local editorial cover */
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Heart-Centered Coach Newsletter Sign-Up",
  description: "Welcome to Decision Points — identity transition support for entrepreneurs, coaches, and creatives.",
};

const formAction = "https://api.leadpages.io/integration/v1/forms/Bo4xxWTDurABXt97UYNVV7/submissions";

function SignupForm() {
  return (
    <form action={formAction} method="post" className={styles.form}>
      <label htmlFor="newsletter-first-name">First Name</label>
      <input id="newsletter-first-name" name="33ad3425125f513ba1ab5e359ca21551" type="text" placeholder="First Name" autoComplete="given-name" required />
      <label htmlFor="newsletter-email">Email Address</label>
      <input id="newsletter-email" name="ec3b68ece7915ca83f420c91066c7d52" type="email" placeholder="Email Address" autoComplete="email" required />
      <button type="submit">Join the Newsletter</button>
    </form>
  );
}

export default function NewsletterPage() {
  return (
    <div className={styles.page}>
      <header className={styles.titleBand}>
        <p>Welcome to</p>
        <h1>Decision Points</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.copy}>
          <p className={styles.lead}><strong>Identity transition support for entrepreneurs, coaches, and creatives.</strong></p>
          <p>This newsletter blends short audio reflections and writing to help you untangle, remove, and release patterns that interrupt flow, prevent change, or slow down aligned growth.</p>
          <p>We&apos;re redesigning your life and work for <em>who you are now,</em> <strong><em>because no one should have to live inside a life that feels like someone else’s house.</em></strong></p>
          <p className={styles.byline}><strong>By Carly Clark Zimmer</strong></p>
          <SignupForm />
        </section>
        <figure className={styles.cover}>
          <img src="/newsletter-carly.png" alt="Carly Clark Zimmer seated in a teal jacket for the Audio Newsletter" width={926} height={1288} />
        </figure>
      </main>
      <footer className={styles.footer}>
        <a href="https://carlyclarkzimmer.com/">Learn more at carlyclarkzimmer.com</a>
        <span>© Balance by the Bay, LLC 2026</span>
      </footer>
    </div>
  );
}
