import Image from "next/image";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import { Section } from "../../../components/ui/Section";
import styles from "./CampaignSections.module.css";

export function FounderStorySection() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.aboutPhotoWrap}>
          <Image
            alt="Carly Clark Zimmer seated on stone steps"
            className={styles.aboutPhoto}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            src="/carly-supporting.jpg"
            unoptimized
          />
          <span>about the creator</span>
        </div>
        <div className={styles.aboutCopy}>
          <Eyebrow>Why I created Beyond the Bottleneck</Eyebrow>
          <h2>
            I used to think being excellent meant being available{" "}
            <i>all the time.</i>
          </h2>
          <p>During the pandemic, my coaching practice grew quickly.</p>
          <p>
            I was living in Ireland and working with clients across all kinds of
            time zones. At the same time, I was supporting large cohorts of
            students and a team of associate coaches inside a coaching school
            experiencing its highest enrollment numbers ever, while also being
            in charge of all program coordination. (I know… it’s too much. But
            I thought I could handle it back then.)
          </p>
          <p>I was spending close to eight hours a day on Zoom.</p>
          <p>But the real weight was not only the work.</p>
          <p className={styles.shortLines}>
            I felt responsible for everyone.
            <br />
            Their fear.
            <br />
            Their pivots.
            <br />
            Their launches.
            <br />
            Their confidence.
            <br />
            Their income.
            <br />
            Their next steps.
          </p>
          <p>
            At first, I thought I was being a great coach. I was helpful,
            responsive, generous, and deeply invested.
          </p>
          <p className={styles.pullquote}>
            Eventually, I realized I was carrying everyone else’s urgency in my
            body and calling it commitment.
          </p>
          <p>
            I had built a business around meaningful work, but the way I was
            running it was slowly taking me out.
          </p>
        </div>
      </section>

      <Section className={styles.story}>
        <div className={styles.storyColumns}>
          <div>
            <p>I had to learn how to release what was never mine to hold.</p>
            <p>
              I had to stop confusing support with constant availability.
            </p>
            <p>
              I had to get honest about what was truly urgent, what I was making
              urgent in my own mind, and what belonged to someone else.
            </p>
            <p>
              I clarified what my coaching containers were actually for. I set
              cleaner boundaries around communication. I stopped making myself
              the emergency contact for everyone’s business, emotions, and
              decisions.
            </p>
            <p>
              I learned how to hand ownership back to my clients without
              becoming cold, detached, or unavailable.
            </p>
          </div>
          <div>
            <h2>
              And it changed <i>everything.</i>
            </h2>
            <p>
              I became a better coach because I became clearer, more grounded,
              and more honest about what was mine to hold.
            </p>
            <p>I also got parts of my life back.</p>
            <p>
              Not because I suddenly found some magical extra hours hidden in
              the week. Because I finally stopped giving every available part
              of myself to work.
            </p>
            <p>
              I started painting again, and that because evidence that I had a
              life outside of business.
            </p>
            <p>
              It reminded me that creativity, beauty, joy, rest, and aliveness
              were allowed to belong to me too.
            </p>
          </div>
        </div>
      </Section>

      <section className={styles.cage}>
        <Eyebrow>Why this matters</Eyebrow>
        <h2>
          I know how easy it is to leave one cage and{" "}
          <i>accidentally build another.</i>
        </h2>
        <div className={styles.cageLines}>
          <span>The client becomes the boss.</span>
          <span>The inbox becomes the time clock.</span>
          <span>Responsiveness becomes the performance review.</span>
          <span>Rest becomes something you have to earn.</span>
        </div>
        <p>
          I created Beyond the Bottleneck because I want us to talk honestly
          about how that happens and, much more importantly, how people change
          it.
        </p>
      </section>
    </>
  );
}
