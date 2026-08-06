import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/Eyebrow";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-heading">
      <div className={styles.number} aria-hidden="true">
        404
      </div>

      <div className={styles.message}>
        <Eyebrow>That’s weird</Eyebrow>
        <h1 id="not-found-heading">This page has left the building.</h1>
        <p>
          It looks like the page you’re looking for has been zapped by the
          internet gods. But that doesn’t mean we can’t help you find your way.
        </p>
        <div className={styles.actions}>
          <Button href="/">Head back home</Button>
          <a className={styles.secondaryLink} href="/services">
            Explore ways to work together <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
