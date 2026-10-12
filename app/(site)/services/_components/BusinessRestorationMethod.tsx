import Image from "next/image";
import { Button } from "../../../../components/ui/Button";
import styles from "./BusinessRestorationMethod.module.css";

type RestorationPhase = {
  number: string;
  title: string;
  description: string;
  outcome: string;
  image: { src: string; alt: string };
};

type BusinessRestorationMethodProps = {
  phases: RestorationPhase[];
  applyHref: string;
};

export function BusinessRestorationMethod({ phases, applyHref }: BusinessRestorationMethodProps) {
  return (
    <div className={styles.method}>
      <h3>Here&apos;s what that looks like.</h3>
      <div className={styles.cards}>
        {phases.map((phase) => (
          <article className={styles.card} key={phase.number}>
            <div className={styles.archImage}>
              <Image
                src={phase.image.src}
                alt={phase.image.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.phase}>Phase {phase.number}</p>
              <h4>{phase.title}</h4>
              <span className={styles.divider} aria-hidden="true" />
              <p className={styles.description}>{phase.description}</p>
              <p className={styles.outcome}>{phase.outcome}</p>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.goal}>
        The goal: a business that supports your clients and revenue without costing you your life
        outside of it. ✨
      </p>
      <Button className={styles.apply} href={applyHref} newTab variant="outline">
        Apply Here
      </Button>
    </div>
  );
}
