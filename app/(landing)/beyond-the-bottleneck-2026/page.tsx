import type { Metadata } from "next";
import { CampaignHero } from "../../../components/campaign/CampaignHero";
import { ContributorGrid } from "../../../components/campaign/ContributorGrid";
import { RegistrationSection } from "../../../components/campaign/RegistrationSection";
import {
  campaignMeta,
  contributors,
  heroContent,
  registrationContent,
} from "../../../content/campaigns/beyond-the-bottleneck";
import { AudienceSection } from "./_components/AudienceSection";
import { BeliefSection } from "./_components/BeliefSection";
import { ContributorClosing, ContributorIntro } from "./_components/ContributorIntro";
import { ConversationSection } from "./_components/ConversationSection";
import { EvidenceSection } from "./_components/EvidenceSection";
import { FormatStrip } from "./_components/FormatStrip";
import { FounderStorySection } from "./_components/FounderStorySection";
import { MoreOfYouSection } from "./_components/MoreOfYouSection";
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
      <FormatStrip />
      <AudienceSection />
      <QuestionSection />
      <MoreOfYouSection />
      <ConversationSection />
      <EvidenceSection />
      <ContributorIntro />
      <ContributorGrid contributors={contributors} tone="light" />
      <ContributorClosing />
      <FounderStorySection />
      <BeliefSection />
      <RegistrationSection
        content={registrationContent}
        optinSource={optinSource}
      />
    </>
  );
}
