import styles from "./CredentialsSection.module.css";

const credentials = [
  {
    title: "ICF Professional Certified Coach (PCC)",
    description:
      "Professional coaching credential awarded by the International Coaching Federation.",
  },
  {
    title: "Equity-Centered Coaching",
    description:
      "Certified training in equity-centered coaching, including cultural awareness, identity, and the impact of systemic influences.",
  },
  {
    title: "Certified Kolbe Consultant",
    description:
      "Training in identifying natural strengths and instinctive approaches to problem-solving.",
  },
  {
    title: "Certified BodyMind Method Somatic Coach",
    description: "Integrating somatic awareness and body-based approaches into coaching.",
  },
  {
    title: "Internal Family Systems (IFS)",
    description:
      "Formally trained in parts work and understanding the internal patterns influencing behavior and decision-making.",
  },
  {
    title: "Pattern and Blind Spot Identification",
    description:
      "Experience identifying hidden narratives, automatic behavioral patterns, and the underlying issues influencing business decisions.",
  },
];

export function CredentialsSection() {
  return (
    <section className={styles.section} aria-labelledby="credentials-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>THE EXPERIENCE BEHIND THE METHOD</p>
        <h2 id="credentials-heading">Grounded in experience. Informed by multiple disciplines.</h2>
        <p className={styles.intro}>
          Nine years of coaching experience and hundreds of sessions, combining behavioral change,
          identity work, somatic awareness, and practical business leadership.
        </p>
        <div className={styles.grid}>
          {credentials.map((credential) => (
            <article key={credential.title} className={styles.credential}>
              <span aria-hidden="true">✓</span>
              <div>
                <h3>{credential.title}</h3>
                <p>{credential.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.intake}>
          Carly&apos;s structured intake process helps identify what you have already tried and where
          your current challenges are occurring, so the work can begin where it will be most useful.
        </p>
      </div>
    </section>
  );
}
