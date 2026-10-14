import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resources | Carly Clark Zimmer",
  description: "Tools, stories, and support to help you work, lead, and live differently.",
  alternates: { canonical: "https://carlyclarkzimmer.com/resources/" },
};

const resources = [
  {
    category: "Free coaching tool",
    prompt: "Need quick clarity?",
    title: "5-Minute Laser Coach",
    href: "/breakthrough",
    description: "Cut through the overthinking, identify what actually deserves your attention, and leave with one clear next move in about five minutes.",
    detail: "Custom GPT · About five minutes",
    cta: "Try the Laser Coach",
    imageSrc: "/laser-coach-pattern-head-transparent.png",
    imageAlt: "Profile silhouette with colorful gears representing pattern recognition",
    imageStyle: "contain",
  },
  {
    category: "Free audio series",
    prompt: "Ready to listen?",
    title: "Beyond the Bottleneck",
    href: "/beyond-the-bottleneck-2026",
    description: "Honest conversations about how thriving online business owners stopped turning their freedom back into a job, and what opened up when they did.",
    detail: "Audio series · Listen at your own pace",
    cta: "Explore the Audio Series",
    imageSrc: "/beyond-the-bottleneck-contributor-cover.png",
    imageAlt: "Beyond the Bottleneck free audio series featuring Carly Clark Zimmer and its contributors",
    imageStyle: "portraitContain",
  },
  {
    category: "Newsletter",
    prompt: "Want ongoing perspective?",
    title: "Decision Points",
    href: "/newsletter",
    description: "Stories and practical insights about business leadership, behavior change, identity, and the small decisions that shape how you work and live.",
    detail: "Stories + practical insights",
    cta: "Join Decision Points",
    imageSrc: "/carly-newsletter-hero.jpg",
    imageAlt: "Carly Clark Zimmer standing against a stone wall",
    imageStyle: "cover",
  },
  {
    category: "Focused coaching experience",
    prompt: "Want to change one pattern?",
    title: "The Pattern Interrupt",
    href: "https://carlyclarkzimmer.thrivecart.com/the-pattern-interrupt/",
    description: "In 21 days, we’ll identify one pattern that keeps putting you back in the bottleneck, interrupt it in real time, and use that shift to make one meaningful business change that gives you back time, energy, or capacity.",
    detail: "One pattern · 21 days · One concrete change",
    cta: "Explore the Pattern Interrupt",
    imageSrc: null,
    imageAlt: "",
    imageStyle: "graphic",
  },
] as const;

export default function ResourcesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="resources-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Resources</p>
          <h1 id="resources-heading">A place to begin.</h1>
          <p>Choose the kind of support you need right now: quick clarity, a story to listen to, ongoing perspective, or focused behavior change.</p>
        </div>
        <div className={styles.heroImage}>
          <Image src="/carly-resources-showcase.png" alt="Carly Clark Zimmer standing outside in a magenta jacket" fill sizes="(max-width: 760px) 100vw, 50vw" priority unoptimized />
        </div>
      </section>

      <section className={styles.directory} aria-labelledby="resource-directory-heading">
        <div className={styles.directoryHeading}>
          <p className={styles.eyebrow}>Find your next step</p>
          <h2 id="resource-directory-heading">Explore the resources</h2>
        </div>

        <div className={styles.resourceList}>
          {resources.map((resource, index) => (
            <article className={`${styles.resource} ${index % 2 ? styles.reverse : ""}`} key={resource.title}>
              <div className={`${styles.resourceVisual} ${resource.imageStyle === "contain" || resource.imageStyle === "portraitContain" ? styles.containVisual : ""} ${resource.imageStyle === "portraitContain" ? styles.portraitVisual : ""}`}>
                {resource.imageSrc && (resource.imageStyle === "contain" || resource.imageStyle === "portraitContain") ? (
                  <div className={styles.containFrame}>
                    <Image src={resource.imageSrc} alt={resource.imageAlt} fill sizes="(max-width: 760px) 100vw, 46vw" unoptimized style={{ objectFit: "contain" }} />
                  </div>
                ) : resource.imageSrc ? (
                  <Image src={resource.imageSrc} alt={resource.imageAlt} fill sizes="(max-width: 760px) 100vw, 46vw" unoptimized className={styles.coverImage} />
                ) : (
                  <div className={styles.patternGraphic} aria-hidden="true">
                    <span>One pattern</span>
                    <strong>The Pattern<br /><em>Interrupt</em></strong>
                    <span>21 days · One meaningful business change</span>
                  </div>
                )}
              </div>

              <div className={styles.resourceCopy}>
                <div className={styles.resourceMeta}><span>{String(index + 1).padStart(2, "0")}</span><span>{resource.category}</span></div>
                <p className={styles.prompt}>{resource.prompt}</p>
                <h3>{resource.title}</h3>
                <p className={styles.description}>{resource.description}</p>
                <p className={styles.detail}>{resource.detail}</p>
                <a className={styles.cta} href={resource.href} target="_blank" rel="noreferrer">{resource.cta}<span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.startHere} aria-labelledby="start-here-heading">
        <p className={styles.eyebrow}>Not sure where to begin?</p>
        <h2 id="start-here-heading">Start with five minutes.</h2>
        <p>The Laser Coach will help you cut through the noise and find the next move that matters.</p>
        <a className={styles.startCta} href="/breakthrough" target="_blank" rel="noreferrer">Try the Free 5-Minute Laser Coach</a>
      </section>
    </main>
  );
}
