import { CampaignHero } from "../../components/campaign/CampaignHero";
import { ContributorGrid } from "../../components/campaign/ContributorGrid";
import { MovingTicker } from "../../components/campaign/MovingTicker";
import { RegistrationSection } from "../../components/campaign/RegistrationSection";
import {
  campaignMeta,
  contributors,
  heroContent,
  registrationContent,
  tickerItems,
} from "../../content/campaigns/beyond-the-bottleneck";
import { AudienceSection } from "./_components/AudienceSection";
import { BeliefSection } from "./_components/BeliefSection";
import { ConversationSection } from "./_components/ConversationSection";
import { EvidenceSection } from "./_components/EvidenceSection";
import { FounderStorySection } from "./_components/FounderStorySection";
import { OpeningSection } from "./_components/OpeningSection";
import { PossibilitySection } from "./_components/PossibilitySection";
import { QuestionSection } from "./_components/QuestionSection";
import { SeriesIntroSection } from "./_components/SeriesIntroSection";

export default function BeyondTheBottleneckPage() {
  return (
    <>
      <CampaignHero content={heroContent} launchDate={campaignMeta.launchDate} />
      <OpeningSection />
      <SeriesIntroSection />
      <MovingTicker items={tickerItems} />
      <AudienceSection />
      <QuestionSection />
      <PossibilitySection />
      <ConversationSection />
      <EvidenceSection />
      <ContributorGrid contributors={contributors} />
      <FounderStorySection />
      <BeliefSection />
      <RegistrationSection content={registrationContent} />
    </>
  );
}
