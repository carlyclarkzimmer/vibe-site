import Image from "next/image";
import type { heroContent } from "../../content/campaigns/beyond-the-bottleneck";
import { Button } from "../ui/Button";
import { EditorialHeading } from "../ui/EditorialHeading";
import { Eyebrow } from "../ui/Eyebrow";
import styles from "./CampaignHero.module.css";

type CampaignHeroProps = {
  content: typeof heroContent;
  launchDate: string;
};

export function CampaignHero({ content, launchDate }: CampaignHeroProps) {
  return (
    <header className={styles.hero} id="top">
      <Image
        alt={content.imageAlt}
        className={styles.photo}
        fill
        priority
        sizes="100vw"
        src={content.image}
        unoptimized
      />
      <div className={styles.shade} />
      <div className={styles.brand}>{content.brand}</div>
      <div className={styles.copy}>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <EditorialHeading as="h1" className={styles.title} size="hero">
          {content.titleStart} <i>{content.titleItalic}</i>
          <br />
          {content.titleEnd}
        </EditorialHeading>
        <p className={styles.description}>{content.description}</p>
        <Button href="#register" variant="outlineLight">
          {content.cta}
        </Button>
      </div>
      <div className={styles.date}>
        <span>Begins</span>
        <strong>{launchDate}</strong>
        <span>Listen on your own time</span>
      </div>
    </header>
  );
}
