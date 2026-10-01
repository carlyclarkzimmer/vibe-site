import Image from "next/image";
import type { DeliveryDirectoryCard } from "@/content/campaigns/beyond-the-bottleneck-delivery";
import styles from "../page.module.css";

function Portrait({ card }: { card: DeliveryDirectoryCard }) {
  if (card.image) {
    return (
      <div className={styles.directoryPortrait}>
        <Image
          alt={card.imageAlt ?? card.name}
          fill
          sizes="(max-width: 640px) 42vw, (max-width: 980px) 30vw, 22vw"
          src={card.image}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className={styles.directoryPortraitPlaceholder} aria-label="Contributor image placeholder" role="img">
      <span>Contributor image</span>
    </div>
  );
}

function ContributorCard({ card }: { card: DeliveryDirectoryCard }) {
  const contents = (
    <>
      <Portrait card={card} />
      <div className={styles.directoryCardCopy}>
        <h3>{card.name}</h3>
        <p>{card.episodeHook}</p>
        <span className={styles.directoryAction}>Listen →</span>
      </div>
    </>
  );

  return card.href ? (
    <a className={styles.directoryCard} href={card.href}>{contents}</a>
  ) : (
    <article className={`${styles.directoryCard} ${styles.placeholderCard}`} data-placeholder="true">
      {contents}
    </article>
  );
}

export function EpisodeDirectory({ cards }: { cards: DeliveryDirectoryCard[] }) {
  return (
    <nav className={styles.episodeDirectory} id="episode-directory" aria-labelledby="episode-directory-title">
      <div className={styles.directoryInner}>
        <header className={styles.directoryHeading}>
          <p className={styles.eyebrow}>Explore the Series</p>
          <h2 id="episode-directory-title">Meet the Contributors</h2>
          <p>Choose a conversation to start listening.</p>
        </header>

        <div className={styles.directoryGrid}>
          <a className={`${styles.directoryCard} ${styles.startCard}`} href="#episode-intro">
            <div className={styles.startCardArt} aria-hidden="true">
              <span>Start</span>
              <span>Here</span>
            </div>
            <div className={styles.directoryCardCopy}>
              <p className={styles.cardEyebrow}>Start Here</p>
              <h3>Welcome to Beyond the Bottleneck</h3>
              <p>How to Use This Series</p>
              <span className={styles.directoryAction}>Listen →</span>
            </div>
          </a>
          {cards.map((card) => <ContributorCard card={card} key={card.id} />)}
        </div>
      </div>
    </nav>
  );
}
