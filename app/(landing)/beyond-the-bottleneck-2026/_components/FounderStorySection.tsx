import Image from "next/image";
import { Section } from "../../../../components/ui/Section";
import { Eyebrow } from "../../../../components/ui/Eyebrow";
import styles from "./CampaignSections.module.css";

export function FounderStorySection() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.aboutPhotoWrap}>
          <Image alt="Carly Clark Zimmer seated on stone steps" className={styles.aboutPhoto} fill sizes="(max-width: 900px) 100vw, 45vw" src="/carly-supporting.jpg" unoptimized />
          <span>about the creator</span>
        </div>
        <div className={styles.aboutCopy}>
          <Eyebrow className={styles.sectionEyebrow}>Meet Carly</Eyebrow>
          <h2>I created Beyond the Bottleneck because I used to think being excellent for my clients meant being available all the time.</h2>
          <p>During the pandemic, my coaching practice grew quickly. I was living in Ireland and working with clients across all kinds of time zones. At the same time, I was supporting large cohorts of students and a team of associate coaches inside a coaching school experiencing its highest enrollment numbers ever, while also being in charge of all program coordination.</p>
          <p>I was spending close to eight hours a day on Zoom.</p>
          <p>But the real weight wasn&apos;t the work. My bottleneck? I had made my clients&apos; priorities my priorities. Their fear. Their pivots. Their launches. Their confidence. Their income. Their next steps.</p>
          <p>At first, I thought that was just what a great coach did. But eventually I realized carrying everyone else&apos;s urgency in my body and confusing it with commitment was slowly taking me out, not to mention not helping my clients at all because I was just training them to need me.</p>
        </div>
      </section>

      <Section className={styles.story}>
        <div className={styles.storyColumns}>
          <div>
            <p>I had to learn how to release what was never mine to hold.</p>
            <p>I had to stop confusing support with constant availability.</p>
            <p>I had to get honest about what was truly urgent, what I was making urgent in my own mind, and what belonged to someone else.</p>
            <p>I clarified what my coaching containers were actually for. I set cleaner boundaries around communication. I stopped making myself the emergency contact for everyone&apos;s business, emotions, and decisions. I learned how to hand ownership back to my clients without becoming cold, detached, or unavailable.</p>
          </div>
          <div>
            <h2>And both my business and my life changed.</h2>
            <p>I didn&apos;t just become a better coach, because I became clearer and more grounded, but I got my life back!!</p>
            <p>I even started painting again. It reminded me that creativity, beauty, joy, rest, and aliveness were allowed to belong to me too… and I haven&apos;t looked back since.</p>
            <p>That is why I care so much about these conversations. I know how much courage it takes to step away from the expected path and start your own business. I also know how easy it is to leave one cage and accidentally build another.</p>
          </div>
        </div>
      </Section>

      <section className={styles.cage}>
        <div className={styles.cageLines}>
          <span>But the client isn&apos;t your boss, YOU are.</span>
          <span>The inbox doesn&apos;t decide your hours, YOU do.</span>
          <span>Rest isn&apos;t something you earn, it&apos;s something you CHOOSE.</span>
        </div>
        <p>But I can tell you these things until I&apos;m blue in the face… and you can nod your head in agreement because you know I&apos;m right… but you won&apos;t do anything about it until you understand your bottleneck, and how to move through it.</p>
        <p>That&apos;s why I created Beyond the Bottleneck.</p>
      </section>
    </>
  );
}
