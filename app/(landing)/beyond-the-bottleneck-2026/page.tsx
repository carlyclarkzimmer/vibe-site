import type { Metadata } from "next";
import { CampaignHero } from "../../../components/campaign/CampaignHero";
import { ContributorGrid } from "../../../components/campaign/ContributorGrid";
import { MovingTicker } from "../../../components/campaign/MovingTicker";
import { RegistrationSection } from "../../../components/campaign/RegistrationSection";
import {
  campaignMeta,
  contributorChapters,
  heroBannerItems,
  heroContent,
  registrationContent,
} from "../../../content/campaigns/beyond-the-bottleneck";
import { AudienceSection } from "./_components/AudienceSection";
import { BeliefSection } from "./_components/BeliefSection";
import { ContributorIntro } from "./_components/ContributorIntro";
import { ConversationSection } from "./_components/ConversationSection";
import { EvidenceSection } from "./_components/EvidenceSection";
import { FormatStrip } from "./_components/FormatStrip";
import { FounderStorySection } from "./_components/FounderStorySection";
import { MoreOfYouSection } from "./_components/MoreOfYouSection";
import { OpeningSection } from "./_components/OpeningSection";
import { QuestionSection } from "./_components/QuestionSection";
import { RegistrationModal } from "./_components/RegistrationModal";
import { SeriesIntroSection } from "./_components/SeriesIntroSection";
import sectionStyles from "./_components/CampaignSections.module.css";

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
      <section className={sectionStyles.heroStatement}>
        <p>
          If you’ve built a successful business that gives you freedom on paper,
          but somehow still requires way too much of you to keep it running,
          <em> these conversations are for you.</em>
        </p>
      </section>
      <MovingTicker items={heroBannerItems} starColor="gold" />
      <OpeningSection />
      <SeriesIntroSection />
      <FormatStrip />
      <AudienceSection />
      <QuestionSection />
      <MoreOfYouSection />
      <ConversationSection />
      <EvidenceSection />
      <ContributorIntro />
      <ContributorGrid chapters={contributorChapters} />
      <FounderStorySection />
      <BeliefSection />
      <RegistrationSection content={registrationContent} />
      <RegistrationModal optinSource={optinSource} />
    </>
  );
}
