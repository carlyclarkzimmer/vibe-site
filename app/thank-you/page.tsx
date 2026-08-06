import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Thank You | Beyond the Bottleneck",
  robots: { index: false, follow: false },
};

type ThankYouPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { status } = await searchParams;
  const isRegistered = status === "registered";

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Beyond the Bottleneck</p>
        <h1>{isRegistered ? "You’re in." : "Registration complete."}</h1>
        <p>
          Your listening-tour details will arrive by email.
        </p>
        <Link href="/">Return to the homepage</Link>
      </div>
    </main>
  );
}
