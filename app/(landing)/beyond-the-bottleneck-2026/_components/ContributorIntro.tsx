import { Eyebrow } from "../../../../components/ui/Eyebrow";
import styles from "./CampaignSections.module.css";

export function ContributorIntro() {
  return <header className={styles.contributorIntro}><Eyebrow>Meet the contributors</Eyebrow><h2>Meet the Business Owners Thriving Beyond the Bottleneck</h2></header>;
}

export function ContributorClosing() {
  return <p className={styles.contributorClosing}>These conversations are not organized around how impressive someone looks online. They are organized around the moment she stopped postponing the change she knew she needed to make.</p>;
}
