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
  return (
    <>
      <EpisodeDirectory cards={cards} />
      <EpisodeLibrary episodes={episodes} />
    </>
  );
}
