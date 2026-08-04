import type { ReactNode } from "react";
import type { CampaignNavItem } from "../../content/campaigns/beyond-the-bottleneck";
import { CampaignFooter } from "./CampaignFooter";
import { CampaignHeader } from "./CampaignHeader";

type CampaignShellProps = {
  children: ReactNode;
  navigation: CampaignNavItem[];
};

export function CampaignShell({ children, navigation }: CampaignShellProps) {
  return (
    <>
      <CampaignHeader navigation={navigation} />
      <main>{children}</main>
      <CampaignFooter />
    </>
  );
}
