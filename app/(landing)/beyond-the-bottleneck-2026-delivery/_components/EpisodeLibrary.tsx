import Image from "next/image";
import {
  podcastAppUrl,
  type DeliveryEpisode,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
import styles from "../page.module.css";

function AudioPlayer({ episode }: { episode: DeliveryEpisode }) {
  return (
    <section className={styles.audioArea} aria-labelledby={`listen-${episode.slug}`}>
      <p className={styles.microHeading} id={`listen-${episode.slug}`}>Listen to the Episode</p>
      {episode.audioSource ? (
        <audio controls preload="metadata" src={episode.audioSource}>Your browser does not support the audio element.</audio>
      ) : episode.audioEmbed ? (
        <div className={styles.audioEmbed} dangerouslySetInnerHTML={{ __html: episode.audioEmbed }} />
      ) : (
        <div className={`${styles.audioPlaceholder} ${episode.slug === "intro" ? styles.introEmbedPlaceholder : ""}`}>
          {episode.slug === "intro" ? "[HELLO AUDIO INTRO EPISODE EMBED]" : "[AUDIO PLAYER PLACEHOLDER]"}
        </div>
      )}

      {episode.slug !== "intro" ? (
        <div className={styles.fullSeriesCta}>
          <p>→ Take Beyond the Bottleneck with you</p>
          <a href={podcastAppUrl} rel="noreferrer" target="_blank">
            Listen to the Full Series in Your Podcast App →
          </a>
        </div>
      ) : null}
    </section>
  );
}

function ContributorProfile({ episode }: { episode: DeliveryEpisode }) {
  if (!episode.bioHeading || !episode.bioParagraphs?.length) return null;

  return (
    <section className={styles.contributorProfile} aria-labelledby={`profile-${episode.slug}`}>
      <h4 id={`profile-${episode.slug}`}>{episode.bioHeading}</h4>
      {episode.bioParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {episode.contributorLinks?.length ? (
        <p className={styles.contributorLinks}>
          {episode.contributorLinks.map((link, index) => (
            <span key={link.url}>
              {index ? <span aria-hidden="true"> · </span> : null}
              <a href={link.url} rel="noreferrer" target="_blank">{link.label}</a>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}

function ContributorResource({ episode }: { episode: DeliveryEpisode }) {
  if (!episode.resourceHeading) return null;

  return (
    <section className={styles.resourceBlock} aria-labelledby={`resource-${episode.slug}`}>
      <h4 id={`resource-${episode.slug}`}>{episode.resourceHeading}</h4>
      {episode.resourceName ? <p className={styles.resourceName}>{episode.resourceName}</p> : null}
      {episode.resourceDescription ? <p className={styles.resourceDescription}>{episode.resourceDescription}</p> : null}
      {episode.resourceUrl ? (
        <a className={styles.resourceButton} href={episode.resourceUrl} rel="noreferrer" target="_blank">
          {episode.resourceCtaLabel ?? "Grab the Resource →"}
        </a>
      ) : (
        <span className={styles.resourceButtonPlaceholder}>[RESOURCE CTA PLACEHOLDER]</span>
      )}
    </section>
  );
}

function EpisodePortrait({ episode }: { episode: DeliveryEpisode }) {
  return (
    <div className={styles.episodePortrait}>
      {episode.contributorImage ? (
        <Image
          alt={episode.contributorName ?? "Beyond the Bottleneck contributor"}
          fill
          sizes="(max-width: 760px) 100vw, 220px"
          src={episode.contributorImage}
          unoptimized
        />
      ) : (
        <span aria-label="Contributor image placeholder" role="img">Contributor image</span>
      )}
    </div>
  );
}

function Episode({ episode }: { episode: DeliveryEpisode }) {
  const isIntro = episode.slug === "intro";

  return (
    <article
      className={`${styles.episode} ${isIntro ? styles.introEpisode : ""} ${episode.placeholder ? styles.placeholderEpisode : ""}`}
      data-episode-slug={episode.slug}
      id={`episode-${episode.slug}`}
    >
      {isIntro ? (
        <header className={styles.episodeHeader}>
          <h3>{episode.title}</h3>
        </header>
      ) : (
        <header className={styles.episodeLead}>
          <EpisodePortrait episode={episode} />
          <div className={styles.episodeHeader}>
            {episode.contributorName ? <p className={styles.contributorName}>{episode.contributorName}</p> : null}
            <h3>{episode.title}</h3>
          </div>
        </header>
      )}

      <AudioPlayer episode={episode} />

      {!isIntro ? (
        <div className={styles.episodeDetails}>
          {episode.aboutEpisode ? (
            <section className={styles.aboutEpisode} aria-labelledby={`about-episode-${episode.slug}`}>
              <h4 id={`about-episode-${episode.slug}`}>About This Episode</h4>
              <p>{episode.aboutEpisode}</p>
            </section>
          ) : null}
          <ContributorProfile episode={episode} />
          <ContributorResource episode={episode} />
        </div>
      ) : null}

      {!isIntro ? <a className={styles.backLink} href="#episode-directory">↑ Back to all episodes</a> : null}
    </article>
  );
}

export function EpisodeLibrary({ episodes }: { episodes: DeliveryEpisode[] }) {
  return (
    <section className={styles.library} aria-label="Beyond the Bottleneck episodes">
      <div className={styles.libraryInner}>
        {episodes.map((episode) => <Episode episode={episode} key={episode.slug} />)}
      </div>
    </section>
  );
}
