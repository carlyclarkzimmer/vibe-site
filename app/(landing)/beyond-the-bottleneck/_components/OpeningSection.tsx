import { Eyebrow } from "../../../../components/ui/Eyebrow";
import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function OpeningSection() {
  return (
    <Section className={styles.opening}>
      <Eyebrow className={styles.openingEyebrow}>You took the leap</Eyebrow>
      <h2 className={styles.sectionTitle}>
        You left corporate to start your own business and create{" "}
        <i>more freedom</i> in your life.
      </h2>
      <div className={styles.columns}>
        <p>
          But somewhere along the way, you became the person every client has on
          speed dial, the one who says yes to tight deadlines even though it
          means staying up until 3am, the one who always delivers.
        </p>
        <div>
          <p>
            This reputation is one of the reasons your business is successful,
            yet resentment is starting to build, the walk you keep planning is
            pushed until “tomorrow,” and you’re working on weekends instead of
            spending time with the people you love.
          </p>
          <p className={styles.serifCallout}>
            You never really feel off the clock.
          </p>
        </div>
      </div>
    </Section>
  );
}
