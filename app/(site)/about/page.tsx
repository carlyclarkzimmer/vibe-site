import type { Metadata } from "next";
import Image from "next/image";
import { sitePrimaryCta } from "../../../content/site/navigation";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About | Carly Clark Zimmer" };

export default function AboutPage() {
  return (
    <>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/carly-red-sweater-working.jpg"
          alt="Carly Clark Zimmer working at her laptop in a red sweater"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h1>It was New Year&apos;s Eve, and I was hiding.</h1>
          <p>
            Everyone I loved was downstairs. My husband, my cousin who&apos;s
            also my best friend, her partner, all of them laughing by a lake in
            the Berkshires, watching the sunset and making incredible memories
            together. While I was upstairs, hunched over Slack, finishing the
            last details of a client&apos;s launch. Just ONE more message. It
            was always “one more thing to handle” before I could let myself go
            down and be part of my own night.
          </p>
        </div>
      </header>

      <section className={styles.opening}>
        <div className={styles.openingCopy}>
          <h2>By the time I finally came down, the party had moved on without me.</h2>
          <p>
            I poured a martini I didn&apos;t need, then another, and woke up the
            next morning with a headache and the sinking feeling that I&apos;d
            built a business that kept pulling me out of the rooms I most wanted
            to be in.
          </p>
          <p>
            Here&apos;s how I got there. During the pandemic, my coaching
            practice took off. I was living in Ireland, working across time
            zones, on Zoom close to eight hours a day, and running program
            coordination for a coaching school through its biggest cohorts ever.
            Most of my private clients were holistic practitioners whose
            in-person work had vanished overnight, and I felt responsible for
            all of it: their launches, income, confidence, knowing exactly what
            to do next. I answered messages at all hours and called it “being a
            good coach.” I was completely fried.
          </p>
        </div>
      </section>

      <section className={styles.realization}>
        <p>I knew better, which is the part that stings.</p>
      </section>

      <section className={styles.lens}>
        <div className={styles.lensCopy}>
          <div className={styles.chapter}>
            <p>What the body knows</p>
          </div>
          <h2>The body tells the truth before the mind is ready to.</h2>
          <p>
            Because for 12 years I was a licensed massage therapist, and I
            learned that the body tells the truth before the mind is ready to
            (hello, <em>The Body Keeps the Score</em>!). Ninety percent of the
            time, the tension I felt in clients&apos; bodies was because their
            life was out of alignment; they weren&apos;t living the way they
            were supposed to.
          </p>
          <p>
            Before that, I watched a family member nearly lose their life to
            that same thing on a much bigger scale, when they got cut off from
            their values and their sense of choice. I&apos;d spent years helping
            other people stop hurting their bodies when they were abandoning
            themselves.
          </p>
          <p className={styles.emphasis}>
            Then I looked up on New Year&apos;s Eve and saw I was doing it to me.
          </p>
        </div>
      </section>

      <section className={styles.rebuild}>
        <div className={styles.chapter}>
          <p>Rebuilding the work</p>
        </div>
        <h2>So I rebuilt how I worked.</h2>
        <p>
          I got honest about the difference between what was truly urgent, what
          I was inventing in my own head, and what I was absorbing from someone
          else. I stopped being the emergency contact for everyone&apos;s
          business and emotions. I clarified what my coaching container was
          actually for and set real boundaries around when and how clients could
          reach me. I learned to hand ownership back to a client without going
          cold. I even stood up for myself and left the coaching school.
        </p>
      </section>

      <section className={styles.lifeBack}>
        <Image
          className={styles.lifeBackground}
          src="/carly-finished-painting-landscape.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.lifeCopy}>
          <div className={styles.chapter}>
            <p>What changed</p>
          </div>
          <h2>That gave me my life back in ways I can point to.</h2>
          <p>
            I started painting again after 12 years. I spent more time in the
            garden. When I visit my ten nieces and nephews, I&apos;m in the room
            with them now instead of locked away answering messages. Around
            that same season, I was moving through a two-year fertility journey
            that didn&apos;t end the way I hoped, and the boundaries I&apos;d
            built taught me that my needs and my energy were worth honoring
            anyway, even without the family I thought I&apos;d have. That&apos;s
            something a lot of childless-not-by-choice women carry, and it
            changed me.
          </p>
          <p>
            And the clients who come to me now show up ready to do the work, so
            I no longer feel like I have to carry anyone up the mountain.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.chapter}>
          <p>Why I care</p>
        </div>
        <div className={styles.missionGrid}>
          <h2>
            So many women start businesses for freedom and slowly recreate the
            exact thing they left.
          </h2>
          <div>
            <p>
              This is why I care about the work I do. I know the courage it
              takes to leave the expected path and start something of your own.
              I also know how easy it is to walk out of one cage and build
              another one out of client DMs, blurred boundaries, and the belief
              that everyone&apos;s success rests on you.
            </p>
            <p>
              The belief under all of it: the way you show up when no one is
              watching is one of the truest measures of your life. I help
              booked-out service providers build a business that reflects their
              values behind the scenes, in the calendar, the boundaries, the
              decisions, the way a 9 p.m. client message gets handled.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.callout}>
        <div className={styles.calloutImage}>
          <Image
            src="/carly-magenta-portrait.jpg"
            alt="Carly Clark Zimmer smiling in a magenta velvet jacket"
            fill
            sizes="(max-width: 760px) 100vw, 36vw"
            unoptimized
          />
        </div>
        <div>
          <p>
            Because success doesn&apos;t count for much if it costs you your
            health, your joy, or your relationship with yourself. And for those
            of us who can choose differently, I think we have a responsibility
            to.
          </p>
          <h2>Did the New Year&apos;s Eve part make your stomach drop?</h2>
          <p>
            If that&apos;s a version of your own life right now,{" "}
            <a href={sitePrimaryCta.href}>
              click here to book a recommendation call
            </a>{" "}
            and let&apos;s talk about it.
          </p>
        </div>
      </section>
    </>
  );
}
