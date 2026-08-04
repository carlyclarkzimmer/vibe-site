import styles from "./MovingTicker.module.css";

type MovingTickerProps = {
  items: readonly string[];
};

export function MovingTicker({ items }: MovingTickerProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={styles.ticker} aria-label="Series details">
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
