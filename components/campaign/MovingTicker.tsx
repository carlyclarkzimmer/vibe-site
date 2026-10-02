import styles from "./MovingTicker.module.css";

type MovingTickerProps = {
  items: readonly string[];
  starColor?: "default" | "gold";
};

export function MovingTicker({ items, starColor = "default" }: MovingTickerProps) {
  return (
    <div
      className={`${styles.ticker} ${starColor === "gold" ? styles.goldStars : ""}`}
      aria-label="Series details"
    >
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <div className={styles.group} aria-hidden={copy === 1} key={copy}>
            {items.map((item, index) => (
              <span key={`${item}-${index}`}>
                {item} <b>✦</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
