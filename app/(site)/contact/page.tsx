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
      <section className={styles.contactHero}>
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

      <section className={styles.solidarity}>
        <p>
          <em>
            I stand in solidarity with Black, Brown, Indigenous, Minority
            Ethnic, and People of Colour, LGBTQIA &amp; those who hold
            culturally and systemically marginalized identities to dismantle
            systemic racism.
          </em>{" "}
          I pledge to continue to personally comb through my cultural bias,
          business systems &amp; practices, former coach training &amp; theories
          to dismantle the systems of oppression in our society and within
          myself, and the programs and communities I facilitate.
        </p>
        <p>
          My communities have a strict vetting process so that we can provide a
          safe, trauma-informed space for people of all identities to learn,
          grow, ask questions, and provide their own valuable insight and
          feedback for us all to learn from.
        </p>
      </section>
    </div>
  );
}
