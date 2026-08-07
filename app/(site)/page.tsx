import Image from "next/image";
import { homeContent } from "../../content/site/home";
import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Section } from "../../components/ui/Section";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Section as="header" className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/carly-site-hero.png"
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
          <Button href={homeContent.hero.ctaHref}>{homeContent.hero.cta}</Button>
        </div>
      </Section>
      <Section className={styles.recognition}>
        <h2>{homeContent.recognition.heading}</h2>
        <div>
          {homeContent.recognition.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section className={styles.approach}>
        <h2>{homeContent.approach.heading}</h2>
        <p>{homeContent.approach.description}</p>
        <p>{homeContent.approach.supporting}</p>
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
