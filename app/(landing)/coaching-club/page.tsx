/* eslint-disable @next/next/no-img-element -- direct static assets avoid the Worker image-optimization runtime */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  betweenCallSupport,
  coachingClubLinks,
  coachingClubMeta,
  fitChecklist,
  investmentIncludes,
  monthlyRhythm,
  notForYouChecklist,
  powerHourSupport,
  practicalOutcomes,
  privateSupport,
  shifts,
  testimonials,
  thingsToBring,
  whyItWorks,
} from "../../../content/campaigns/coaching-club";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: coachingClubMeta.title,
};

function CtaLink({ children }: { children: ReactNode }) {
  return (
    <a className={styles.cta} href={coachingClubLinks.checkout}>
      {children}
    </a>
  );
}

function CheckList({
  items,
  negative = false,
}: {
  items: string[];
  negative?: boolean;
}) {
  return (
    <ul className={styles.checklist}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">{negative ? "×" : "✓"}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CoachingClubPage() {
  return (
    <>
      <section className={styles.hero} id="top">
        <div className={styles.heroTopline}>
          <span>Laser Coaching Club</span>
          <span>Implementation, accountability, and real-time support</span>
        </div>
        <div className={styles.heroGrid}>
          <div>
            <h1>
              What if the thing you have been putting off for six months{" "}
              <em>was done by Friday?</em>
            </h1>
          </div>
          <div className={styles.heroAside}>
            <img
              className={styles.heroPortrait}
              src="/carly-hero.jpg"
              alt="Carly Clark Zimmer smiling outdoors in a berry-colored jacket"
              width={5760}
              height={3840}
            />
            <p>You have read the books, taken the courses, and have the clarity.</p>
            <p>
              The Laser Coaching Club is where you stop gathering more info,
              and become the person who follows through on what&apos;s most
              important to you.
            </p>
            <CtaLink>Join the Club</CtaLink>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.sectionLabel}>The pattern</div>
        <div className={styles.readingColumn}>
          <p>
            You sit down at your desk to finally tackle the one thing that keeps
            living on your to-do list.
          </p>
          <p>
            Maybe it&apos;s the email you&apos;ve been drafting in your head
            about raising your rates, or the outreach you know will bring in new
            clients.
          </p>
          <p>
            Maybe it&apos;s the offer you have reworked so many times that you
            can&apos;t look at it anymore, or the conversation with your team
            you know needs to happen.
          </p>
          <p>
            And somehow, two hours later, you&apos;ve cleaned out your inbox,
            reorganized your Google Drive, checked Slack four times to make sure
            clients don&apos;t need anything, and done everything except the
            main priority on your list.
          </p>
          <p>
            You might think you need to be more disciplined, or that you&apos;re
            still missing some vital piece of information.
          </p>
          <p>
            You might even start spiraling, thinking that you&apos;re the
            problem.
          </p>
          <h2>
            You&apos;re not...
            <br />
            <em>The pattern is.</em>
          </h2>
          <p>
            Patterns do not break by gathering more information; they break
            through intentional interruption, a single clear focus, and someone
            who has seen exactly why yours was created, and why it keeps
            thinking it needs to run the show... no matter how much you want to
            do things differently.
          </p>
          <p>
            <strong>That is what the Laser Coaching Club is built for.</strong>
          </p>
        </div>
      </section>

      <section className={styles.clientStory}>
        <div className={styles.clientIntro}>
          <p className={styles.eyebrow}>A different way of moving</p>
          <h2>
            Conscious choices instead of{" "}
            <em>living in reaction mode.</em>
          </h2>
        </div>
        <div className={styles.clientCopy}>
          <p>
            One of my clients sent me a voice message on a Saturday morning. She
            had been watching a reality TV show when something hit her.
          </p>
          <p>
            She realized she had not thought about whether she was living her
            potential in months.
          </p>
          <p>
            For years, when she was in investment banking, that thought showed
            up every single day.
          </p>
          <p>
            At some point in the day, she would think: I&apos;m never going to
            reach my full potential. I&apos;m not doing what I&apos;m supposed
            to be doing with my life. I don&apos;t even know myself anymore!
          </p>
          <p>
            After working together and really looking into the patterns that
            were running her choices subconsciously, that frantic, searching
            feeling stopped.
          </p>
          <p>
            Here&apos;s the thing: it wasn&apos;t that some magical revenue goal
            was finally hit, or because her business and life were all humming
            along perfectly.
          </p>
          <p>
            It was because, step-by-step, she was making conscious choices
            instead of living in reaction mode.
          </p>
          <p>
            She was verbalizing the thought spirals out loud so they no longer
            consumed her inside.
          </p>
          <p>
            And when you are doing that, the fear of &apos;not making it&apos;
            no longer has anything to attach to.
          </p>
          <p>
            That is the internal shift I&apos;ll help you make so you can see
            outer results that feel like something you&apos;re proud of.
          </p>
          <p>
            Yes, you&apos;re going to have crystal clear priorities for your
            business and your life, so you stop treating everything as equally
            urgent.
          </p>
          <p>
            Yes, you&apos;re going to be able to follow through faster because
            you will recognize when those patterns try to pull your focus away.
          </p>
          <p>
            And yes, you&apos;re going to have a different relationship with
            yourself, one where you trust that you are moving in the right
            direction, one small step at a time.
          </p>
        </div>
      </section>

      <section className={styles.outcomes}>
        <p className={styles.eyebrow}>
          Inside the Laser Coaching Club, here is what that looks like in
          practice:
        </p>
        <ol>
          {practicalOutcomes.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
        <div className={styles.outcomeClosing}>
          <p>
            Not through willpower, or rigid discipline, but through structure,
            interruption, and real-time support from someone who has seen these
            hypervigilant, productivity-driven patterns live.
          </p>
          <p>
            The thing you have been putting off gets done. And then the next
            thing. And over time, the internal voice that says you are not
            living your potential fades, because the evidence says otherwise.
          </p>
        </div>
      </section>

      <section className={styles.whatItIs}>
        <div>
          <p className={styles.eyebrow}>What this is</p>
          <h2>
            An ongoing support space for people who are{" "}
            <em>done circling.</em>
          </h2>
        </div>
        <div className={styles.whatItIsCopy}>
          <p>
            Not a course you start and never finish, and end up regretting
            purchasing.
          </p>
          <p>
            Not a community that fills your notifications and drains your
            attention.
          </p>
          <p>Not more content to consume and never apply.</p>
          <p>
            This is a living space for implementation, accountability, and
            real-time support around the patterns that have been stalling your
            growth for years.
          </p>
          <p>A place to bring the thing you keep circling:</p>
          <ul className={styles.simpleList}>
            {thingsToBring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Then take the very next micro step, with intention, structure, and
            witness.
          </p>
          <p>
            The pattern becomes easier to interrupt when it is named, supported,
            and practiced in community with people who are doing the same work.
          </p>
        </div>
      </section>

      <section className={styles.rhythm}>
        <div className={styles.centerHeading}>
          <p className={styles.eyebrow}>What a month inside the Club looks like</p>
          <h2>
            A steady rhythm for{" "}
            <em>real change.</em>
          </h2>
        </div>
        <div className={styles.weekGrid}>
          {monthlyRhythm.map((week) => (
            <article key={week.week}>
              <h3>{week.week}</h3>
              {week.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.deliverables}>
        <div className={styles.deliverablesTitle}>
          <p className={styles.eyebrow}>What you get</p>
          <h2>
            Three live Pattern Breaker Power Hours{" "}
            <em>each month.</em>
          </h2>
        </div>
        <div className={styles.deliverablesCopy}>
          <p>
            Three times a month, we gather live for focused coaching and
            accountability.
          </p>
          <p>You submit your focus or question beforehand.</p>
          <p>
            That means we do not spend the first twenty minutes figuring out
            what the problem is.
          </p>
          <p>
            We come in honest and go straight to the behavior bottleneck
            pattern.
          </p>
          <p>Inside each call, I support you in:</p>
          <ul className={styles.simpleList}>
            {powerHourSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Some weeks you will receive live coaching. Some weeks you will
            watch someone else get coached and realize, with great affection
            and mild irritation, that your nervous system is running the exact
            same loop in a completely different outfit.
          </p>
          <p>Both are valuable.</p>
          <p>
            <strong>
              Live calls: 11 AM Eastern, first and third Tuesdays of each month.
            </strong>{" "}
            The calls are where the pattern work happens. Recordings exist for
            the week life happens, not as the plan.
          </p>
          <h3>Group and Voxer accountability and support between calls</h3>
          <p>
            Between calls, you are not left alone with your beautiful plan and
            your old habits.
          </p>
          <p>You get personal Voxer support AND Community accountability:</p>
          <ul className={styles.simpleList}>
            {betweenCallSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            This is where the messy middle is normalized as you learn to
            navigate through it.
          </p>
        </div>
      </section>

      <section className={styles.fit}>
        <div className={styles.fitHeader}>
          <p className={styles.eyebrow}>Who this is for</p>
          <h2>
            Smart, capable, and deeply self-aware—yet derailed by{" "}
            <em>familiar bottleneck patterns.</em>
          </h2>
          <p>
            The Laser Coaching Club is for the coach, creative, entrepreneur,
            or leader who is already smart, capable, and deeply self-aware, but
            whose follow-through gets derailed by familiar, bottleneck patterns
            like avoidance, over-committing, undercharging, or minimizing your
            expertise.
          </p>
        </div>
        <div className={styles.fitLists}>
          <div>
            <h3>This is for you if:</h3>
            <CheckList items={fitChecklist} />
          </div>
          <div>
            <h3>This is not for you if:</h3>
            <CheckList items={notForYouChecklist} negative />
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div>
          <p className={styles.eyebrow}>Why this works</p>
          <h2>
            Insight is not the issue.{" "}
            <em>You already have the awareness.</em>
          </h2>
        </div>
        <div className={styles.whyCopy}>
          <p>More information is no longer helpful. It&apos;s a distraction.</p>
          <p>
            What you need is a consistent place to practice the interrupt.
          </p>
          <ul className={styles.simpleList}>
            {whyItWorks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            The Laser Coaching Club gives this work structure. A place to
            return. A rhythm that makes change feel less like a solo act of
            willpower and more like something you are not doing alone.
          </p>
          <p>
            The coaching of the future includes AI-powered tools. It also
            requires accountability, human understanding, co-regulation, and
            witness.
          </p>
          <p>Because that is how real, lasting change happens.</p>
          <p>
            <strong>
              Both are necessary. Both are included in the Laser Coaching Club.
            </strong>
          </p>
        </div>
      </section>

      <section className={styles.investment} id="join">
        <div>
          <p className={styles.eyebrow}>The investment</p>
          <h2>
            The gap between what you know and what you actually do{" "}
            <em>closes here.</em>
          </h2>
        </div>
        <div>
          <ul className={styles.investmentList}>
            {investmentIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            And when the urge hits to buy the next course, join the next
            program, or research your way into more clarity, bring it to the
            community instead.
          </p>
          <p>That urge is the pattern. This is exactly where we work with it.</p>
          <p>
            <strong>No contracts. Cancel any time.</strong>
          </p>
          <CtaLink>Join the Club</CtaLink>
        </div>
      </section>

      <section className={styles.schedule}>
        <p className={styles.eyebrow}>A note about the rhythm</p>
        <div className={styles.scheduleGrid}>
          <h2>
            Rest matters.
          </h2>
          <div>
            <p>
              The live calls happen on the 1st and 3rd Tuesday of the month at
              11 AM Eastern
            </p>
            <p>
              The second and fourth weeks are intentionally left open for
              integration.
            </p>
            <p>
              Space to reflect matters so you move into the next month with
              grounded focus.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.shifts}>
        <div>
          <p className={styles.eyebrow}>What shifts inside the Club</p>
          <h2>
            Over time, this work{" "}
            <em>helps you:</em>
          </h2>
        </div>
        <ol>
          {shifts.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutImage}>
          <img
            src="/carly-coaching-club.jpg"
            alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket"
            width={362}
            height={512}
          />
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>I&apos;m Carly.</p>
          <h2>
            Sustainable growth requires{" "}
            <em>internal coherence.</em>
          </h2>
          <p>
            An ICF-certified Life and Leadership Coach with eight years of
            experience supporting seasoned entrepreneurs and senior leaders
            through high-stakes transitions.
          </p>
          <p>Most of my clients look successful on paper.</p>
          <p>
            What they experience privately is internal strain during growth,
            visibility shifts, or structural change.
          </p>
          <p>Nothing is broken.</p>
          <p>
            Their operating structures simply no longer match who they&apos;ve
            become.
          </p>
          <p>
            I specialize in identity-based leadership work, with formal
            training in Internal Family Systems and advanced behavioral pattern
            recognition.
          </p>
          <p>
            I&apos;ve seen this pattern hundreds of times. Clarity is rarely the
            issue. Sustainable growth requires internal coherence.
          </p>
          <p>
            The alignment between identity, decision-making, and structure.
          </p>
          <p>My work restores that coherence.</p>
          <img
            className={styles.credential}
            src="/kolbe-certified.png"
            alt="Kolbe Certified credential"
            width={512}
            height={128}
          />
        </div>
      </section>

      <section className={styles.private}>
        <div>
          <p className={styles.eyebrow}>Want deeper 1:1 support?</p>
          <h2>
            1:1 Laser Coaching might be{" "}
            <em>better for you.</em>
          </h2>
        </div>
        <div>
          <ul className={styles.simpleList}>
            {privateSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className={styles.textLink}
            href={coachingClubLinks.recommendationCall}
          >
            Click here to book a recommendation call if you&apos;re unsure
            which option is right for you. →
          </a>
        </div>
      </section>

      <section className={styles.invitation}>
        <p className={styles.eyebrow}>If you are ready, this is it.</p>
        <h2>
          Bring the pattern.
          <br />
          Bring the thing you are avoiding.
          <br />
          Bring the decision, the draft, the conversation, the boundary, the
          launch,
          <br />
          <em>the messy middle.</em>
        </h2>
        <CtaLink>Join the Club</CtaLink>
      </section>

      <section className={styles.founding}>
        <div>
          <p className={styles.eyebrow}>A note on testimonials</p>
          <h2>
            The Laser Coaching Club is in its{" "}
            <em>founding season.</em>
          </h2>
        </div>
        <div>
          <p>
            The framework behind it has been refined through hundreds of hours
            of 1:1 and group coaching work.
          </p>
          <p>
            The behavior change tools are built, tested, and running. The
            methodology is proven. What does not exist yet is a year of
            Club-specific testimonials, because we are building that together,
            starting now.
          </p>
          <p>Here is what founding members get that later members will not:</p>
          <p>The lowest rate this program will ever be.</p>
          <p>
            Direct access to me while the group is small and the coaching goes
            deep. And the chance to be part of something from the beginning,
            which, if you have been paying attention, is exactly the kind of
            evidence-building move this work is designed to support.
          </p>
          <p>
            Here is what people say about working with me in a group container:
          </p>
        </div>
      </section>

      <section className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <article key={testimonial.name}>
            <div className={styles.testimonialImage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                width={512}
                height={512}
              />
            </div>
            <blockquote>
              {testimonial.quote.map((paragraph) => (
                <p key={paragraph}>“{paragraph}”</p>
              ))}
            </blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </article>
        ))}
      </section>

      <section className={styles.contact}>
        <div>
          <p className={styles.eyebrow}>Not sure which option is right for you?</p>
          <h2>
            I&apos;m happy to help you figure out what fits{" "}
            <em>where you are right now.</em>
          </h2>
        </div>
        <div className={styles.contactLinks}>
          <a href={coachingClubLinks.recommendationCall}>
            Book a recommendation call. →
          </a>
          <a href={coachingClubLinks.instagram}>
            DM on Instagram @carlyclarkzimmer →
          </a>
          <a href={coachingClubLinks.email}>
            Email carly@carlylclarkzimmer.com →
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © carlyclarkzimmer.com Balance by the Bay, LLC 2026
        </p>
      </footer>
    </>
  );
}
