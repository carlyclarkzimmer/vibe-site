import type { ReactNode } from "react";
import { CampaignShell } from "../../../components/campaign/CampaignShell";

export default function RestorationStudioLayout({ children }: { children: ReactNode }) {
  return <CampaignShell navigation={[]} showHeader={false}>{children}</CampaignShell>;
}
