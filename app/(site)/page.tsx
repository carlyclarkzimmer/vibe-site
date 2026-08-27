import Image from "next/image";
import { homeContent } from "../../content/site/home";
import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Section } from "../../components/ui/Section";
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
          <Button
            className={styles.heroCta}
            href={homeContent.hero.ctaHref}
            variant="outlineLight"
          >
            {homeContent.hero.cta}
          </Button>
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
        <p>
          <strong>{homeContent.approach.emphasis}</strong>
        </p>
        <p>{homeContent.approach.description}</p>
        <p>
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
      <Section className={styles.process}>
        <Eyebrow>{homeContent.process.eyebrow}</Eyebrow>
        <h2>{homeContent.process.heading}</h2>
        <div>
          {homeContent.process.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Button href={homeContent.hero.ctaHref}>{homeContent.hero.cta}</Button>
      </Section>
      <Section className={styles.testimonial}>
        <blockquote>“{homeContent.testimonial.quote}”</blockquote>
        <p>{homeContent.testimonial.attribution}</p>
      </Section>
    </>
  );
}
