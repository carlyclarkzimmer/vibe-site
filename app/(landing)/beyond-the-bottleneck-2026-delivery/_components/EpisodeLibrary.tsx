import Image from "next/image";
import type { DeliveryEpisode } from "@/content/campaigns/beyond-the-bottleneck-delivery";
import styles from "../page.module.css";

function AudioArea({ episode }: { episode: DeliveryEpisode }) {
  return (
    <section className={styles.audioArea} aria-labelledby={`listen-${episode.slug}`}>
      <p className={styles.microHeading} id={`listen-${episode.slug}`}>Listen to the episode</p>
      {episode.audioSource ? (
        <audio controls preload="metadata" src={episode.audioSource}>Your browser does not support the audio element.</audio>
      ) : episode.audioEmbed ? (
        <div className={styles.audioEmbed} dangerouslySetInnerHTML={{ __html: episode.audioEmbed }} />
      ) : (
        <div className={styles.audioPlaceholder}>[AUDIO PLAYER PLACEHOLDER]</div>
      )}
      {episode.fullSeriesPrompt && episode.fullSeriesLabel && episode.fullSeriesUrl ? (
        <div className={styles.fullSeriesCta}>
          <p>{episode.fullSeriesPrompt}</p>
          <a href={episode.fullSeriesUrl} rel="noreferrer" target="_blank">{episode.fullSeriesLabel}</a>
        </div>
      ) : null}
    </section>
  );
}

function Episode({ episode, isActive }: { episode: DeliveryEpisode; isActive: boolean }) {
  const hasResource = episode.resourceName || episode.resourceDescription || episode.resourceUrl;

  return (
    <article className={styles.episode} data-active={isActive ? "true" : undefined} data-episode-slug={episode.slug} id={`episode-${episode.slug}`}>
      <div className={`${styles.episodeUpper} ${episode.contributorImage ? "" : styles.episodeUpperIntro}`}>
        {episode.contributorImage ? (
          <div className={styles.portrait}>
            <Image alt={episode.contributorName ?? "Beyond the Bottleneck contributor"} fill sizes="(max-width: 760px) 100vw, 36vw" src={episode.contributorImage} unoptimized />
          </div>
        ) : null}

        <div className={styles.episodeLead}>
          {episode.contributorName ? <p className={styles.contributorName}>{episode.contributorName}</p> : null}
          <h3 data-episode-title>{episode.title}</h3>
          <AudioArea episode={episode} />
        </div>
      </div>

      {episode.slug !== "intro" ? (
        <>
          <div className={styles.episodeInformation}>
            {episode.aboutEpisode ? (
              <section className={styles.showNotes} aria-labelledby={`about-episode-${episode.slug}`}>
                <p className={styles.microHeading} id={`about-episode-${episode.slug}`}>About This Episode</p>
                <p>{episode.aboutEpisode}</p>
              </section>
            ) : null}

            {episode.contributorName && (episode.shortBio || episode.bioParagraphs?.length || episode.contributorLinks?.length) ? (
              <section className={styles.about} aria-labelledby={`about-${episode.slug}`}>
                <p className={styles.microHeading} id={`about-${episode.slug}`}>{episode.bioHeading ?? `About ${episode.contributorName}`}</p>
                {episode.shortBio ? <p>{episode.shortBio}</p> : null}
                {episode.bioParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {episode.contributorLinks?.length ? (
                  <div className={styles.contributorLinks}>
                    {episode.contributorLinks.map((link) => <a href={link.url} key={link.url} rel="noreferrer" target="_blank">{link.label}</a>)}
                  </div>
                ) : null}
              </section>
            ) : null}

            {episode.showNotes.length ? (
              <section className={styles.showNotes} aria-labelledby={`notes-${episode.slug}`}>
                <p className={styles.microHeading} id={`notes-${episode.slug}`}>Show Notes</p>
                {episode.showNotes.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ) : null}

            {hasResource ? (
              <section className={styles.resource} aria-labelledby={`resource-${episode.slug}`}>
                <p className={styles.microHeading} id={`resource-${episode.slug}`}>{episode.resourceHeading ?? "Resources"}</p>
                {episode.resourceName ? <h4>{episode.resourceName}</h4> : null}
                {episode.resourceDescription ? <p>{episode.resourceDescription}</p> : null}
                {episode.resourceUrl ? <a className={styles.button} href={episode.resourceUrl} rel="noreferrer" target="_blank">{episode.resourceCtaLabel ?? "Get the resource"}</a> : <span className={styles.buttonPlaceholder}>[GET THE RESOURCE]</span>}
              </section>
            ) : null}
          </div>

          {!episode.hidePatternCallout ? (
            <aside className={styles.patternCallout}>
              <p className={styles.patternQuestion}>Ready to interrupt your own pattern?</p>
              <a href={episode.patternInterruptHref}>Explore Pattern Interrupt below.</a>
            </aside>
          ) : null}
          <a className={styles.backLink} href="#episode-list">Back to episode list ↑</a>
        </>
      ) : null}
    </article>
  );
}

export function EpisodeLibrary({ activeEpisode, episodes }: { activeEpisode: string | null; episodes: DeliveryEpisode[] }) {
  return (
    <section className={styles.library} aria-label="Beyond the Bottleneck episodes">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>Beyond the Bottleneck</p>
      </div>
      {episodes.map((episode) => <Episode episode={episode} isActive={activeEpisode === episode.slug} key={episode.slug} />)}
    </section>
  );
}
