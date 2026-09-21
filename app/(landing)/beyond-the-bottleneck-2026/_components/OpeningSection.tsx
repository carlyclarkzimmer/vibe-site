import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function OpeningSection() {
  return (
    <Section className={styles.opening}>
      <p>
        You took the leap and left corporate to start your own business and
        create more freedom in your life.
      </p>
      <p>
        But somewhere along the way, you started experiencing the same things
        that made you want to quit your job in the first place.
      </p>
      <p>You became the person every client has on speed dial…</p>
      <div className={styles.problemList}>
        <p>
          The one who says yes to tight deadlines even though it means staying
          up until 3 am…
        </p>
        <p>The one who never takes a sick day, let alone a vacation…</p>
        <p>
          The one who obsessively checks her emails while she&apos;s supposed to
          be enjoying a movie…
        </p>
        <p>The one who doesn&apos;t turn off so she can &quot;overdeliver&quot;...</p>
      </div>
      <p>
        This reputation is one of the reasons your business is successful, yet
        resentment is starting to build.
      </p>
      <p>
        You never really feel off the clock, and if we were being completely
        honest, you&apos;re starting to secretly resent your business.
      </p>
    </Section>
  );
}
