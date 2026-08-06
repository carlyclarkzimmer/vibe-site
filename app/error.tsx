"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteShell } from "../components/site/SiteShell";
import { Eyebrow } from "../components/ui/Eyebrow";
import styles from "./not-found.module.css";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SiteShell>
      <section className={styles.page} aria-labelledby="error-heading">
        <div className={styles.number} aria-hidden="true">
          500
        </div>

        <div className={styles.message}>
          <Eyebrow>Well, this is awkward</Eyebrow>
          <h1 id="error-heading">The site is a little borked.</h1>
          <p>
            Something went sideways on our end. We’re already on it, and we’ll
            be back ASAP.
          </p>
          <div className={styles.actions}>
            <button className={styles.retryButton} type="button" onClick={reset}>
              Try again
            </button>
            <Link className={styles.secondaryLink} href="/">
              Head back home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
