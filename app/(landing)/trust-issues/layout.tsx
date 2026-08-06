import type { ReactNode } from "react";
import { CampaignShell } from "@/components/campaign/CampaignShell";

export default function TrustIssuesLayout({ children }: { children: ReactNode }) {
  return (
    <CampaignShell navigation={[]} showHeader={false}>
      {children}
    </CampaignShell>
  );
}
