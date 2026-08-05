import type { ReactNode } from "react";
import { CampaignShell } from "../../../components/campaign/CampaignShell";
import { campaignNavigation } from "../../../content/campaigns/beyond-the-bottleneck";

export default function BeyondTheBottleneckLayout({ children }: { children: ReactNode }) {
  return (
    <CampaignShell navigation={campaignNavigation} showHeader={false}>
      {children}
    </CampaignShell>
  );
}
