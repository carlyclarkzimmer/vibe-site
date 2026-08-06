import type { ReactNode } from "react";
import { CampaignShell } from "../../../components/campaign/CampaignShell";

export default function ScriptsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <CampaignShell navigation={[]} showHeader={false}>
      {children}
    </CampaignShell>
  );
}
