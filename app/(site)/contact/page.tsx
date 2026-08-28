import type { Metadata } from "next";
import styles from "./page.module.css";

const title = "Contact | Carly Clark Zimmer";
const description =
  "If you'd like to explore working together, please feel free to reach out to Carly directly.";
const canonicalUrl = "https://carlyclarkzimmer.com/contact/";
const socialImageUrl = "https://carlyclarkzimmer.com/og.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title,
    description,
    url: canonicalUrl,
    images: [
      {
        url: socialImageUrl,
        width: 1731,
        height: 909,
        alt: "Carly Clark Zimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.contactHero} id="contact-hero">
        <div className={styles.contactPanel}>
          <h1>Contact Info</h1>
          <p>
            If you&apos;d like to explore working together, please feel free to
            reach out to Carly directly.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:carly@carlyclarkzimmer.com">
              carly@carlyclarkzimmer.com
            </a>
          </p>
          <p>
            For guest teaching, speaking, or podcast guest appearances, please
            reach out to{" "}
            <a href="mailto:carly@carlyclarkzimmer.com">
              carly@carlyclarkzimmer.com
            </a>{" "}
            with details.
          </p>
        </div>
      </section>
    </div>
  );
}
