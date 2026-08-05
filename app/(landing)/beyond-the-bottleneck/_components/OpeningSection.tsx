import { Section } from "../../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function OpeningSection() {
  return (
    <Section className={styles.opening}>
      <p>
        You took the leap and left corporate to start your own business and
        create more freedom in your life.
      </p>
      <p className={styles.openingEmphasis}>
        But somewhere along the way, you became the person every client has on
        speed dial, the one who says yes to tight deadlines even though it means
        staying up until 3am, the one who always delivers.
      </p>
      <p>
        This reputation is one of the reasons your business is successful, yet
        resentment is starting to build, the walk you keep planning is pushed
        until “tomorrow,” and you’re working on weekends instead of spending
        time with the people you love.
      </p>
      <p>You never really feel off the clock.</p>
    </Section>
  );
}
