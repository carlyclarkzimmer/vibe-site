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
      <Section className={styles.meetCarly}>
        <h2>{homeContent.meetCarly.heading}</h2>
        <div className={styles.meetCarlyCopy}>
          <div className={styles.meetCarlyStory}>
            {homeContent.meetCarly.paragraphs.map((paragraph) => (
              <p key={paragraph.text}>
                {paragraph.emphasis ? <strong>{paragraph.text}</strong> : paragraph.text}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.meetCarlyImage}>
          <Image
            src="/carly-meet-headshot.jpg"
            alt="Carly Clark Zimmer smiling in a teal jacket"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
            unoptimized
          />
        </div>
      </Section>
      <Section className={styles.servicesShowcase}>
        <Image
          className={styles.servicesShowcaseImage}
          src="/carly-services-showcase.jpg"
          alt="Carly Clark Zimmer in a flowing metallic dress"
          fill
          sizes="100vw"
          unoptimized
        />
        <div className={styles.servicesPanel}>
          <div className={styles.servicesIntro}>
            <Eyebrow>{homeContent.servicesShowcase.eyebrow}</Eyebrow>
            <h2>{homeContent.servicesShowcase.heading}</h2>
          </div>
          <div className={styles.servicesList}>
            {homeContent.servicesShowcase.services.map((service, index) => (
              <article className={styles.serviceItem} key={service.title}>
                <div>
                  <p className={styles.servicePrompt}>
                    <strong>{service.prompt}</strong>
                  </p>
                  <h3>{service.title}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.serviceNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section className={styles.testimonial}>
        <blockquote>“{homeContent.testimonial.quote}”</blockquote>
        <p>{homeContent.testimonial.attribution}</p>
      </Section>
    </>
  );
}
