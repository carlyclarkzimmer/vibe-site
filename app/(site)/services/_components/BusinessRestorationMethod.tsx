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

const restorationWeek = [
  {
    number: "01",
    day: "Monday",
    title: "Notice the Pattern",
    image: {
      src: "/business-restoration/week/monday-black-woman-nature.png",
      alt: "A Black woman taking an intentional morning walk through a sunlit woodland",
    },
    copy: (
      <>
        You choose your <strong>Restoration Blueprint</strong> over your inbox and take a morning
        walk. That evening, you Vox me about how good it felt to do things differently.
      </>
    ),
  },
  {
    number: "02",
    day: "Tuesday",
    title: "A Fresh Perspective",
    image: {
      src: "/business-restoration/week/tuesday-voice-note-studio-green.png",
      alt: "A brown-haired woman with red nails recording a voice note on her phone",
    },
    copy: (
      <>
        A voice note from me helps you understand <strong>why client requests feel so urgent</strong>,
        giving you something to anchor back to when old habits take over.
      </>
    ),
  },
  {
    number: "03",
    day: "Wednesday",
    title: "Connect the Dots",
    image: {
      src: "/business-restoration/week/wednesday-connect-the-dots.png",
      alt: "A woman seated for a reflective coaching conversation in a quiet home office",
    },
    copy: (
      <>
        On our coaching call, we explore <strong>what&apos;s driving the old pattern</strong>, reconnect
        with your values, and draft a client-response policy that supports your life.
      </>
    ),
  },
  {
    number: "04",
    day: "Thursday",
    title: "Try Something Different",
    image: {
      src: "/business-restoration/week/thursday-try-something-different.png",
      alt: "A woman confidently sending a new client policy from her laptop",
    },
    copy: (
      <>
        You press send on your new policy, even though it feels uncomfortable. Then comes the real
        practice: <strong>letting the boundary stand.</strong>
      </>
    ),
  },
  {
    number: "05",
    day: "Friday",
    title: "Build the Evidence",
    image: {
      src: "/business-restoration/week/friday-river-kayak-v2.png",
      alt: "A kayaker seen from behind paddling along a peaceful tree-lined river",
    },
    copy: (
      <>
        You plan next week&apos;s priorities, close your laptop at <strong>2 PM</strong>, and head out
        kayaking with people you love. For once, you actually feel off the clock.
      </>
    ),
  },
];

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
        Our Focused Intention: In just a few months, we rebuild your business so it supports your
        clients and revenue without costing you your life outside of it. ✨
      </p>
      <section className={styles.week} aria-labelledby="restoration-week-heading">
        <header className={styles.weekHeader}>
          <p>The Business Restoration Method</p>
          <h3 id="restoration-week-heading">A Week Inside Business Restoration</h3>
          <span>Small, intentional changes that add up to a whole new way of operating.</span>
        </header>
        <div className={styles.weekCards}>
          {restorationWeek.map((item) => (
            <article className={styles.weekCard} key={item.number}>
              <div className={styles.weekImage}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 700px) 34vw, (max-width: 1100px) 45vw, 20vw"
                  unoptimized
                />
              </div>
              <div className={styles.weekCopy}>
                <p className={styles.weekDay}>{item.number} / {item.day}</p>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.transformation}>
          <p>The Real Transformation</p>
          <h4>
            You&apos;re not just learning to run your business differently. <em>You&apos;re learning how
            to enjoy the life you&apos;ve built.</em>
          </h4>
        </div>
      </section>
      <Button className={styles.apply} href={applyHref} newTab variant="outline">
        Apply Here
      </Button>
    </div>
  );
}
