import Image from "next/image";
import {
  podcastAppUrl,
  type DeliveryEpisode,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
import styles from "../page.module.css";

function resourceCtaLabel(episode: DeliveryEpisode) {
  const firstName = episode.contributorName?.split(" ")[0];
  return firstName ? `Grab ${firstName}'s Resource →` : "Grab the Resource →";
}

function AudioMedia({ episode }: { episode: DeliveryEpisode }) {
  if (episode.audioSource) {
    return <audio controls preload="metadata" src={episode.audioSource}>Your browser does not support the audio element.</audio>;
  }

  if (episode.audioEmbed) {
    return <div className={styles.audioEmbed} dangerouslySetInnerHTML={{ __html: episode.audioEmbed }} />;
  }

  return (
    <div className={`${styles.audioPlaceholder} ${episode.slug === "intro" ? styles.introEmbedPlaceholder : ""}`}>
      {episode.slug === "intro" ? "[HELLO AUDIO INTRO EPISODE EMBED]" : "[AUDIO PLAYER PLACEHOLDER]"}
    </div>
  );
}

function AudioPlayer({ episode }: { episode: DeliveryEpisode }) {
  return (
    <section className={styles.audioArea} aria-labelledby={`listen-${episode.slug}`}>
      <h4 className={styles.microHeading} id={`listen-${episode.slug}`}>
        {episode.slug === "intro" ? "Listen to the Introduction" : "Listen to the Episode"}
      </h4>
      <AudioMedia episode={episode} />

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
  if (!episode.resourceHeading || !episode.resources?.length) return null;

  return (
    <section className={styles.resourceBlock} aria-labelledby={`resource-${episode.slug}`}>
      <h4 id={`resource-${episode.slug}`}>{episode.resourceHeading}</h4>
      {episode.resources.map((resource) => (
        <div className={styles.resourceItem} key={resource.url}>
          <p className={styles.resourceName}>{resource.name}</p>
          {resource.description ? <p className={styles.resourceDescription}>{resource.description}</p> : null}
          <a className={styles.resourceButton} href={resource.url} rel="noreferrer" target="_blank">
            {resourceCtaLabel(episode)}
          </a>
        </div>
      ))}
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

function CondensedEpisode({ episode }: { episode: DeliveryEpisode }) {
  return (
    <article
      className={`${styles.episode} ${styles.condensedEpisode}`}
      data-episode-slug={episode.slug}
      id={`episode-${episode.slug}`}
    >
      <header className={styles.episodeLead}>
        <EpisodePortrait episode={episode} />
        <div className={styles.episodeHeader}>
          {episode.contributorName ? <p className={styles.contributorName}>{episode.contributorName}</p> : null}
          <h3>{episode.title}</h3>
        </div>
      </header>

      <div className={styles.condensedListeningRow}>
        <section className={styles.condensedListenOption} aria-labelledby={`listen-${episode.slug}`}>
          <h4 className={styles.microHeading} id={`listen-${episode.slug}`}>Listen to This Episode</h4>
          <AudioMedia episode={episode} />
        </section>
        <section className={styles.condensedListenOption} aria-labelledby={`take-series-${episode.slug}`}>
          <h4 className={styles.microHeading} id={`take-series-${episode.slug}`}>Take the Series With You</h4>
          <a className={styles.condensedPodcastButton} href={podcastAppUrl} rel="noreferrer" target="_blank">
            🎧 LISTEN IN YOUR FAVORITE PODCAST APP →
          </a>
        </section>
      </div>

      <div className={styles.condensedDetailsRow}>
        {episode.aboutEpisode ? (
          <section className={styles.aboutEpisode} aria-labelledby={`about-episode-${episode.slug}`}>
            <h4 id={`about-episode-${episode.slug}`}>About This Episode</h4>
            <p>{episode.aboutEpisode}</p>
          </section>
        ) : null}
        <ContributorProfile episode={episode} />
      </div>

      {episode.resourceHeading && episode.resources?.length ? (
        <section className={`${styles.resourceBlock} ${styles.condensedResource}`} aria-labelledby={`resource-${episode.slug}`}>
          <div className={styles.condensedResourceCopy}>
            <h4 id={`resource-${episode.slug}`}>{episode.resourceHeading}</h4>
            {episode.resources.map((resource) => (
              <div className={styles.resourceItem} key={resource.url}>
                <p className={styles.resourceName}>{resource.name}</p>
                {resource.description ? <p className={styles.resourceDescription}>{resource.description}</p> : null}
                <a className={styles.resourceButton} href={resource.url} rel="noreferrer" target="_blank">
                  {resourceCtaLabel(episode)}
                </a>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <a className={styles.backLink} href="#episode-directory">↑ Back to all episodes</a>
    </article>
  );
}

function Episode({ episode }: { episode: DeliveryEpisode }) {
  const isIntro = episode.slug === "intro";

  if (!isIntro) {
    return <CondensedEpisode episode={episode} />;
  }

  return (
    <article
      className={`${styles.episode} ${isIntro ? styles.introEpisode : ""} ${episode.placeholder ? styles.placeholderEpisode : ""}`}
      data-episode-slug={episode.slug}
      id={`episode-${episode.slug}`}
    >
      {isIntro ? (
        <header className={styles.episodeHeader}>
          <h3>{episode.title}</h3>
          <p className={styles.introCopy}>Start here. A quick introduction to how to use the series, what to listen for, and how to get the most from the conversations as you move through them.</p>
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
