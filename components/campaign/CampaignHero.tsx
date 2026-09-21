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
      <div className={styles.photoWrap}>
        <Image
          alt={content.imageAlt}
          className={styles.photo}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
          src={content.image}
          unoptimized
        />
      </div>
      <div className={styles.shade} />
      <div className={styles.copy}>
        <Eyebrow className={styles.eyebrow}>{content.eyebrow}</Eyebrow>
        <EditorialHeading as="h1" className={styles.title} size="hero">
          {content.titleStart} <i>{content.titleItalic}</i>
          {" "}{content.titleEnd}
        </EditorialHeading>
        <p className={styles.description}>
          {content.descriptionLines.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </p>
        <Button className={styles.heroCta} href="#register">
          <span aria-hidden="true" className={styles.ctaStar}>✦</span>
          {content.cta}
        </Button>
      </div>
      <div className={styles.hostCallout}>
        <p>
          with your
          <span>Host &amp; Coach,</span>
          <strong>Carly Clark Zimmer</strong>
        </p>
      </div>
      <div className={styles.date}>
        <span>Begins</span>
        <strong>{launchDate}</strong>
      </div>
    </header>
  );
}
