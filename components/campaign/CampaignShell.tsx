import type { ReactNode } from "react";
import type { CampaignNavItem } from "../../content/campaigns/beyond-the-bottleneck";
import { CampaignFooter } from "./CampaignFooter";
import { CampaignHeader } from "./CampaignHeader";

type CampaignShellProps = {
  children: ReactNode;
  navigation: CampaignNavItem[];
  showHeader?: boolean;
};

export function CampaignShell({ children, navigation, showHeader = true }: CampaignShellProps) {
  return (
    <>
      {showHeader ? <CampaignHeader navigation={navigation} /> : null}
      <main>{children}</main>
      <CampaignFooter />
    </>
  );
}
