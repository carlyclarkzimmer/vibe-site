import type { CampaignNavItem } from "../../content/campaigns/beyond-the-bottleneck";
import { Button } from "../ui/Button";
import styles from "./CampaignHeader.module.css";

type CampaignHeaderProps = {
  navigation: CampaignNavItem[];
};

export function CampaignHeader({ navigation }: CampaignHeaderProps) {
  return (
    <nav className={styles.navigation} aria-label="Campaign navigation">
      <a className={styles.monogram} href="#top" aria-label="Back to top">
        b.
      </a>
      <div className={styles.links}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <Button href="#register">Listen free</Button>
    </nav>
  );
}
