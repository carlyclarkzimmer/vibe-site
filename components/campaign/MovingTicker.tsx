import styles from "./MovingTicker.module.css";

type MovingTickerProps = {
  items: readonly string[];
  starColor?: "default" | "gold";
};

export function MovingTicker({ items, starColor = "default" }: MovingTickerProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className={`${styles.ticker} ${starColor === "gold" ? styles.goldStars : ""}`}
      aria-label="Series details"
    >
      <div>
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
