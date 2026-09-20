import type { Metadata } from "next";
import { CampaignHero } from "../../../components/campaign/CampaignHero";
import { ContributorGrid } from "../../../components/campaign/ContributorGrid";
import { MovingTicker } from "../../../components/campaign/MovingTicker";
import { RegistrationSection } from "../../../components/campaign/RegistrationSection";
import {
  campaignMeta,
  contributors,
  heroContent,
  registrationContent,
  tickerItems,
} from "../../../content/campaigns/beyond-the-bottleneck";
import { AudienceSection } from "./_components/AudienceSection";
import { BeliefSection } from "./_components/BeliefSection";
import { ConversationSection } from "./_components/ConversationSection";
import { FounderStorySection } from "./_components/FounderStorySection";
import { OpeningSection } from "./_components/OpeningSection";
import { QuestionSection } from "./_components/QuestionSection";
import { SeriesIntroSection } from "./_components/SeriesIntroSection";

export const metadata: Metadata = {
  title: campaignMeta.title,
  description: campaignMeta.description,
};

type BeyondTheBottleneckPageProps = {
  searchParams: Promise<{ utm?: string | string[] }>;
};

function normalizeOptinSource(value: string | string[] | undefined) {
  const source = Array.isArray(value) ? value[0] : value;
  const normalized = source?.trim().replace(/\s+/g, " ");

  return normalized ? normalized.slice(0, 100) : undefined;
}

export default async function BeyondTheBottleneckPage({
  searchParams,
}: BeyondTheBottleneckPageProps) {
  const { utm } = await searchParams;
  const optinSource = normalizeOptinSource(utm);

  return (
    <>
      <CampaignHero content={heroContent} launchDate={campaignMeta.launchDate} />
      <OpeningSection />
      <SeriesIntroSection />
      <MovingTicker items={tickerItems} />
      <AudienceSection />
      <QuestionSection />
      <ConversationSection />
      <ContributorGrid contributors={contributors} />
      <FounderStorySection />
      <BeliefSection />
      <RegistrationSection
        content={registrationContent}
        optinSource={optinSource}
      />
    </>
  );
}
