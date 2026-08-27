import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Thank You | Carly Clark Zimmer",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Thank you</p>
        <h1>You’re in.</h1>
        <p>Your submission has been received.</p>
        <p>Check your email for a message from me!</p>
        <Link href="/">Return to the homepage</Link>
      </div>
    </main>
  );
}
