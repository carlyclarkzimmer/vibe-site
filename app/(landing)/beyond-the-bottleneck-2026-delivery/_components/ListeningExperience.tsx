import type {
  DeliveryDirectoryCard,
  DeliveryEpisode,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
import { EpisodeDirectory } from "./EpisodeDirectory";
import { EpisodeLibrary } from "./EpisodeLibrary";
import { PatternInterruptSection } from "./PatternInterruptSection";

export function ListeningExperience({
  cards,
  episodes,
}: {
  cards: DeliveryDirectoryCard[];
  episodes: DeliveryEpisode[];
}) {
  const welcomeEpisode = episodes.find((episode) => episode.slug === "intro");
  const contributorEpisodes = episodes.filter((episode) => episode.slug !== "intro");
  const jenIndex = contributorEpisodes.findIndex((episode) => episode.slug === "jen-liddy");
  const episodesThroughJen = jenIndex >= 0 ? contributorEpisodes.slice(0, jenIndex + 1) : contributorEpisodes;
  const episodesAfterJen = jenIndex >= 0 ? contributorEpisodes.slice(jenIndex + 1) : [];

  return (
    <>
      {welcomeEpisode ? <EpisodeLibrary episodes={[welcomeEpisode]} /> : null}
      <EpisodeDirectory cards={cards} />
      <EpisodeLibrary episodes={episodesThroughJen} />
      {jenIndex >= 0 ? <PatternInterruptSection id="pattern-interrupt-after-jen" /> : null}
      {episodesAfterJen.length ? <EpisodeLibrary episodes={episodesAfterJen} /> : null}
    </>
  );
}
