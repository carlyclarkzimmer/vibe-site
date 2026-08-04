import type { ReactNode } from "react";
import { CampaignShell } from "../../components/campaign/CampaignShell";
import { campaignNavigation } from "../../content/campaigns/beyond-the-bottleneck";

export default function CampaignLayout({ children }: { children: ReactNode }) {
  return (
    <CampaignShell navigation={campaignNavigation}>{children}</CampaignShell>
  );
}
