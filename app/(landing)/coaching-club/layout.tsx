import type { ReactNode } from "react";
import { CampaignShell } from "../../../components/campaign/CampaignShell";

export default function CoachingClubLayout({ children }: { children: ReactNode }) {
  return (
    <CampaignShell navigation={[]} showHeader={false}>
      {children}
    </CampaignShell>
  );
}
