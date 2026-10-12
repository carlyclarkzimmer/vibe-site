import Image from "next/image";
import styles from "./ClientMessageGallery.module.css";

const messages = [
  {
    src: "/testimonials/aine-client-message.png",
    alt: "Áine's original client message about raising her rates, taking time off, and feeling peace replace dread",
    label: "ÁINE'S MESSAGE",
    width: 1064,
    height: 506,
  },
  {
    src: "/testimonials/jessica-client-message.png",
    alt: "Jessica Kilbourn's original client message about raising her rates, improving systems, and building work around the life she wants",
    label: "JESSICA KILBOURN'S MESSAGE",
    width: 1138,
    height: 634,
  },
];

export function ClientMessageGallery() {
  return (
    <section className={styles.section} aria-labelledby="client-decisions-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>CLIENT MOMENTS</p>
        <h2 id="client-decisions-heading">Real Decisions. Real Changes.</h2>
        <p className={styles.intro}>
          The work becomes real in the decisions clients make, the patterns they interrupt, and the
          space they create for the life they want to live.
        </p>
        <div className={styles.grid}>
          {messages.map((message) => (
            <figure key={message.src} className={styles.card}>
              <a
                className={styles.imageLink}
                href={message.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${message.label.toLowerCase()} at full size in a new tab`}
              >
                <Image
                  src={message.src}
                  alt={message.alt}
                  width={message.width}
                  height={message.height}
                  sizes="(max-width: 820px) 100vw, 50vw"
                  unoptimized
                />
              </a>
              <figcaption>{message.label} · SELECT TO ENLARGE</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
