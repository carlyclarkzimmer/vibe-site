import Image from "next/image";
import type { ContributorChapter } from "../../content/campaigns/beyond-the-bottleneck";
import { featuredHost } from "../../content/campaigns/beyond-the-bottleneck";
import { Section } from "../ui/Section";
import styles from "./ContributorGrid.module.css";

type ContributorGridProps = {
  chapters?: ContributorChapter[];
  deliveryContributors?: {
    id: string;
    name: string;
    role: string;
    pattern: string;
    outcome: string;
  }[];
};

function Portrait({ name, image, host = false }: { name: string; image?: string; host?: boolean }) {
  const className = host ? styles.hostPhoto : styles.photo;

  return image ? (
    <div className={className}>
      <Image alt={name} fill sizes={host ? "(max-width: 700px) 280px, 370px" : "240px"} src={image} unoptimized />
    </div>
  ) : (
    <div className={className} aria-label={`${name} portrait placeholder`} role="img">
      <span>{host ? "Host portrait" : "Contributor portrait"}</span>
    </div>
  );
}

export function ContributorGrid({ chapters, deliveryContributors }: ContributorGridProps) {
  if (deliveryContributors) {
    return (
      <Section className={styles.deliverySection}>
        <div className={styles.deliveryGrid}>
          {deliveryContributors.map((contributor) => (
            <article key={contributor.id}>
              <div className={styles.deliveryPhoto} aria-label="Contributor portrait placeholder">
                <span>Contributor photo</span>
              </div>
              <h3>{contributor.name}</h3>
              <p><b>{contributor.role}</b></p>
              <p>The pattern she interrupted: {contributor.pattern}</p>
              <p>What opened up: {contributor.outcome}</p>
            </article>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section className={styles.contributors}>
      <div className={styles.inner}>
        <article className={styles.host}>
          <Portrait name={featuredHost.name} image={featuredHost.image} host />
          <div className={styles.hostCopy}>
            <p className={styles.eyebrow}>Featured host episode</p>
            <h3>{featuredHost.name}</h3>
            <p className={styles.role}>{featuredHost.role}</p>
            <p className={styles.hostEpisode}>{featuredHost.episodeTitle}</p>
          </div>
        </article>

        {chapters?.map((chapter) => (
          <section className={styles.chapter} key={chapter.number} aria-labelledby={`chapter-${chapter.number}`}>
            <div className={styles.chapterHeading}>
              <h3 id={`chapter-${chapter.number}`}><span>{chapter.title}</span></h3>
            </div>
            <div className={styles.grid}>
              {chapter.contributors.map((contributor) => (
                <article className={styles.card} key={contributor.id}>
                  <Portrait name={contributor.name} image={contributor.image} />
                  <h4>{contributor.name}</h4>
                  <p className={styles.role}>{contributor.role}</p>
                  <p className={styles.episode}>{contributor.episodeTitle}</p>
                  <blockquote className={styles.soundbite}>“{contributor.soundbite}”</blockquote>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
