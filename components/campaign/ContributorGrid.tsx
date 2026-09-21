import type { Contributor } from "../../content/campaigns/beyond-the-bottleneck";
import { Section } from "../ui/Section";
import styles from "./ContributorGrid.module.css";

type ContributorGridProps = {
  contributors: Contributor[];
  tone?: "dark" | "light";
};

export function ContributorGrid({ contributors, tone = "dark" }: ContributorGridProps) {
  return (
    <Section className={`${styles.contributors} ${styles[tone]}`}>
      <div className={styles.grid}>
        {contributors.map((contributor) => (
          <article key={contributor.id}>
            <div
              aria-label="Contributor portrait placeholder"
              className={styles.photo}
            >
              <span>Contributor photo</span>
            </div>
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
