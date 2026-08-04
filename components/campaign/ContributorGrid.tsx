import type { Contributor } from "../../content/campaigns/beyond-the-bottleneck";
import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import styles from "./ContributorGrid.module.css";

type ContributorGridProps = {
  contributors: Contributor[];
};

export function ContributorGrid({ contributors }: ContributorGridProps) {
  return (
    <Section className={styles.contributors}>
      <div className={styles.heading}>
        <div>
          <Eyebrow>The conversations</Eyebrow>
          <h2>
            Meet the business owners who <i>made the change.</i>
          </h2>
        </div>
        <p>
          These conversations are not organized around how impressive someone
          looks online. They are organized around the moment she stopped
          postponing the change she knew she needed to make.
        </p>
      </div>
      <div className={styles.grid}>
        {contributors.map((contributor) => (
          <article key={contributor.id}>
            <div className={styles.photo}>
              <span>{contributor.id}</span>
            </div>
            <Eyebrow>Featured contributor</Eyebrow>
            <h3>{contributor.name}</h3>
            <p>
              <b>{contributor.role}</b>
            </p>
            <p>The pattern she interrupted: {contributor.pattern}</p>
            <p>What opened up: {contributor.outcome}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
