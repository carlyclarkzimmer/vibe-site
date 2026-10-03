import Image from "next/image";
import styles from "../page.module.css";

export function PatternInterruptSection({ id }: { id: string }) {
  const titleId = `${id}-title`;

  return (
    <section className={styles.patternInterrupt} id={id} aria-labelledby={titleId}>
      <Image
        alt="Carly Clark Zimmer seated on stone steps in a magenta velvet jacket"
        className={styles.patternInterruptImage}
        fill
        sizes="100vw"
        src="/carly-about-hero.png"
        unoptimized
      />
      <div className={styles.patternInterruptOverlay} aria-hidden="true" />
      <div className={styles.patternInterruptContent}>
        <p className={styles.patternInterruptEyebrow}>Ready to work on your bottleneck?</p>
        <h2 id={titleId}>
          <span>You&apos;ve heard 24 ways</span>
          <span>a bottleneck can show up.</span>
          <span className={styles.patternInterruptAccent}>Now interrupt one of yours.</span>
        </h2>
        <div className={styles.patternInterruptDivider} aria-hidden="true" />
        <p className={styles.patternInterruptCopy}>
          <em>The Pattern Interrupt</em> is 21 intentional coaching days with me over Voxer. We&apos;ll identify one pattern that keeps putting you back in the bottleneck, catch it while it&apos;s happening, practice a different response, and turn that shift into one concrete change in your business.
        </p>
        <ul className={styles.patternInterruptSnapshot} aria-label="Pattern Interrupt program details">
          <li>One Pattern</li>
          <li>21 Days</li>
          <li>One Concrete Change</li>
          <li>$97</li>
        </ul>
        <a
          className={styles.patternInterruptButton}
          href="https://carlyclarkzimmer.thrivecart.com/the-pattern-interrupt/"
          rel="noreferrer"
          target="_blank"
        >
          Explore the Pattern Interrupt →
        </a>
      </div>
    </section>
  );
}
