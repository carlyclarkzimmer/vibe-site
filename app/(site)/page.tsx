import Image from "next/image";
import { homeContent } from "../../content/site/home";
import { EditorialTestimonial } from "../../components/site/EditorialTestimonial";
import { WorkTogetherShowcase } from "../../components/site/WorkTogetherShowcase";
import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Section } from "../../components/ui/Section";
import { HomeLaserCoachOptIn } from "./_components/HomeLaserCoachOptIn";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Section as="header" className={styles.hero} id="home-hero">
        <Image
          className={styles.heroImage}
          src="/homepage-teal-close-hero.jpg"
          alt="Carly Clark Zimmer seated in a teal jacket"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <Eyebrow>{homeContent.hero.eyebrow}</Eyebrow>
          <h1>{homeContent.hero.title}</h1>
          <p className={styles.heroCopy}>{homeContent.hero.description}</p>
          <div className={styles.heroActions}>
            <Button
              className={styles.heroCta}
              href={homeContent.hero.ctaHref}
              variant="outlineLight"
            >
              {homeContent.hero.cta}
            </Button>
            <a className={styles.heroSecondaryCta} href="#laser-coach">
              Try the Free 5-Minute Laser Coach
            </a>
          </div>
        </div>
      </Section>
      <Section className={styles.recognition}>
        <h2>{homeContent.recognition.heading}</h2>
        <div>
          {homeContent.recognition.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{homeContent.recognition.emphasis}</strong>
          </p>
        </div>
      </Section>
      <Section className={styles.approach}>
        <h2>{homeContent.approach.heading}</h2>
        {homeContent.approach.surfaceAttempts.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className={styles.approachEmphasis}>
          <strong>{homeContent.approach.emphasis}</strong>
        </p>
        <p className={styles.approachDescription}>{homeContent.approach.description}</p>
        <p className={styles.approachClosing}>
          <strong>{homeContent.approach.closing}</strong>
        </p>
        <Button
          className={styles.approachCta}
          href={homeContent.approach.ctaHref}
          variant="outline"
        >
          {homeContent.approach.cta}
        </Button>
      </Section>
      <HomeLaserCoachOptIn />
      <Section className={styles.meetCarly}>
        <h2>{homeContent.meetCarly.heading}</h2>
        <div className={styles.meetCarlyCopy}>
          <div className={styles.meetCarlyStory}>
            {homeContent.meetCarly.paragraphs.map((paragraph) => (
              paragraph.pullQuote ? (
                <blockquote className={styles.meetCarlyPullQuote} key={paragraph.text}>
                  <p>{paragraph.text}</p>
                </blockquote>
              ) : (
                <p key={paragraph.text}>
                  {paragraph.emphasis ? <strong>{paragraph.text}</strong> : paragraph.text}
                </p>
              )
            ))}
          </div>
        </div>
        <div className={styles.meetCarlyImage}>
          <Image
            src="/carly-meet-seated.jpg"
            alt="Carly Clark Zimmer seated in a teal jacket"
            width={1800}
            height={2700}
            sizes="(max-width: 760px) 100vw, 42vw"
            unoptimized
          />
        </div>
        <div className={styles.meetCarlyClosing}>
          {homeContent.meetCarly.closingParagraphs.map((paragraph) => (
            <p key={paragraph.text}>{paragraph.text}</p>
          ))}
          <a className={styles.editorialLink} href="/about">
            Read more about Carly <span aria-hidden="true">→</span>
          </a>
        </div>
      </Section>
      <WorkTogetherShowcase />
      <EditorialTestimonial
        testimonial={homeContent.testimonial.quote}
        clientName={homeContent.testimonial.clientName}
        professionalTitle={homeContent.testimonial.professionalTitle}
        photo={{
          src: "/laurie-j-testimonial.png",
          alt: "Laurie J. smiling outdoors",
        }}
        followUp={{
          href: "/client-results",
          label: "See more client results",
        }}
      />
    </>
  );
}
