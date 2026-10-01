import type {
  DeliveryDirectoryCard,
  DeliveryEpisode,
} from "@/content/campaigns/beyond-the-bottleneck-delivery";
import { EpisodeDirectory } from "./EpisodeDirectory";
import { EpisodeLibrary } from "./EpisodeLibrary";

export function ListeningExperience({
  cards,
  episodes,
}: {
  cards: DeliveryDirectoryCard[];
  episodes: DeliveryEpisode[];
}) {
  const welcomeEpisode = episodes.find((episode) => episode.slug === "intro");
  const contributorEpisodes = episodes.filter((episode) => episode.slug !== "intro");

  return (
    <>
      {welcomeEpisode ? <EpisodeLibrary episodes={[welcomeEpisode]} /> : null}
      <EpisodeDirectory cards={cards} />
      <EpisodeLibrary episodes={contributorEpisodes} />
    </>
  );
}
