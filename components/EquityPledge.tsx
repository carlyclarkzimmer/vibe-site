import { equityPledge } from "../content/site/equity-pledge";
import styles from "./EquityPledge.module.css";

export function EquityPledge() {
  return (
    <aside className={styles.pledge} aria-labelledby="equity-pledge-heading">
      <div className={styles.inner}>
        <h2 id="equity-pledge-heading">{equityPledge.heading}</h2>
        {equityPledge.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </aside>
  );
}
