import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const joinHref = "https://carlyclarkzimmer.thrivecart.com/living-business-lounge/";

export const metadata: Metadata = {
  title: "The Living Business Lounge | Carly Clark Zimmer",
  description:
    "Ongoing coaching for the business owner who knows what she wants to do, she just needs the accountability to follow through.",
  alternates: { canonical: "https://carlyclarkzimmer.com/lounge/" },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title: "The Living Business Lounge",
    description:
      "Ongoing coaching for the business owner who knows what she wants to do, she just needs the accountability to follow through.",
    url: "https://carlyclarkzimmer.com/lounge/",
  },
};

function JoinButton({ className = "" }: { className?: string }) {
  return (
    <a className={`${styles.joinButton} ${className}`} href={joinHref} target="_blank" rel="noopener noreferrer">
      Join the Living Business Lounge <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function LoungePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="lounge-hero" aria-labelledby="lounge-heading">
        <div className={styles.heroVisual}>
          <Image
            className={styles.heroImage}
            src="/living-business-lounge-hero.jpg"
            alt="Carly Clark Zimmer smiling beside a stone wall"
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Ongoing coaching</p>
          <h1 id="lounge-heading">The Living Business Lounge</h1>
          <p className={styles.heroLead}>Ongoing coaching for the business owner who knows what she wants to do, she just needs the accountability to follow through.</p>
          <JoinButton />
        </div>
        <span className={styles.heroRule} aria-hidden="true" />
      </section>

      <section className={styles.antiMembership} aria-labelledby="anti-membership-heading">
        <div className={styles.antiMembershipInner}>
          <div className={styles.antiMembershipVisual}>
            <h2 id="anti-membership-heading">This is an anti-membership.</h2>
            <Image
              className={styles.antiMembershipImage}
              src="/overwhelmed-by-business-advice.png"
              alt="Business owner pausing at her laptop amid stacks of books and notes"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 42vw"
              unoptimized
            />
          </div>
          <div className={styles.antiMembershipCopy}>
            <h3 className={styles.antiMembershipHeadline}>You know what to do, let&apos;s make space to do it.</h3>
            <p>No massive amounts of content to consume or feel bad about NOT consuming. Instead, this is an intentional community to help you follow through on what&apos;s most important to you, especially when client work keeps taking priority over your dreams, both personal and professional.</p>
            <p>We&apos;re going to make sure your intentions are clear AND achievable each quarter (no more trying to squeeze a year&apos;s worth of work into a quarter!)</p>
            <p>And you&apos;re going to have an expert at your side helping you bust through the patterns and internal programming that keep telling you things are too urgent to take that walk or let that email sit until tomorrow.</p>
            <p className={styles.antiMembershipClosing}>Your business GETS to be a living entity, it GETS to grow and change with you! And you GET to enjoy what you&apos;ve built!</p>
          </div>
        </div>
      </section>

      <section className={styles.introduction} aria-labelledby="introduction-heading">
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p className={styles.eyebrow}>A place to keep moving</p>
        </div>
        <div className={styles.introductionCopy}>
          <h2 id="introduction-heading">You&apos;ve already done a lot of the work.</h2>
          <p>You&apos;ve invested in coaching, learned the strategies, built the business, and developed plenty of self-awareness along the way.</p>
          <p>You probably don&apos;t need another course telling you what to do.</p>
          <p>And you may not need the intensity of private coaching or another high-ticket mastermind.</p>
          <p className={styles.introStatement}><strong>You want a place to keep moving.</strong></p>
          <p>The Living Business Lounge is ongoing coaching and accountability for established service providers who know how they want to operate, but find that real life, client situations, competing priorities, or old patterns can still pull them off course.</p>
          <p>It&apos;s a place to bring the decisions you&apos;re navigating in real time, get coached, make the decision, test it, and collect evidence from what happens next.</p>
        </div>
      </section>

      <section className={styles.how} aria-labelledby="how-heading">
        <div className={styles.sectionLabel}>
          <span>02</span>
          <p className={styles.eyebrow}>The practice</p>
        </div>
        <div className={styles.howGrid}>
          <h2 id="how-heading">How we&apos;ll work <em>together</em></h2>
          <div className={styles.prose}>
            <p>We&apos;ll start with a <strong>60-minute 1:1 onboarding call</strong> to clarify exactly what you will focus on next quarter and clarify priorities and steps to help you reach that goal, without over-stretching your capacity!</p>
            <p><strong><em>Which means, I will also help you decide what to take off that list.</em></strong></p>
            <p>From there, we&apos;ll identify the milestones that will actually move you toward those goals, along with any potential bottlenecks or patterns that could get in the way.</p>
            <p>Then we keep coming back to a simple process:</p>
          </div>
        </div>
        <ol className={styles.process} aria-label="The Lounge decision process">
          <li><span aria-hidden="true">01</span>Bring the Decision Point</li>
          <li><span aria-hidden="true">02</span>Talk through it/receive some coaching if needed</li>
          <li><span aria-hidden="true">03</span>Make the Decision</li>
          <li><span aria-hidden="true">04</span>Test It</li>
          <li><span aria-hidden="true">05</span>Collect the Evidence</li>
        </ol>
        <div className={styles.reality}>
          <p>Because sometimes you know exactly what you need to do, until a client pushes back.</p>
          <p>Or the launch doesn&apos;t go as planned.</p>
          <p>Or you start second-guessing the decision.</p>
          <p>Or an old people-pleasing, perfectionist, fixer, or over-responsible pattern shows up and suddenly you&apos;re negotiating with yourself again.</p>
          <p className={styles.realityClosing}>That&apos;s where the Lounge comes in. 🔥</p>
        </div>
      </section>

      <section className={styles.included} aria-labelledby="included-heading">
        <div className={styles.sectionLabel}>
          <span>03</span>
          <p className={styles.eyebrow}>The support</p>
        </div>
        <h2 id="included-heading">What&apos;s <em>included</em></h2>
        <div className={styles.includedList}>
          <div><span aria-hidden="true">01</span><p><strong>Two live group coaching calls each month</strong> where you can bring current decisions, challenges, wins, and bottlenecks for coaching. Calls are on the 1st and 3rd Tuesday of the month at 11am Eastern unless otherwise noted. We typically run for about 60-minutes, and all calls are recorded and stored in the call archive.</p></div>
          <div><span aria-hidden="true">02</span><p><strong>Shared Voxer Community support between calls</strong> so you don&apos;t have to wait until the next call when something comes up. Share the win, talk through the wobble, or get support around a Decision Point while you&apos;re actually in it.</p></div>
          <div><span aria-hidden="true">03</span><p><strong>A 60-minute onboarding call</strong> to establish your quarterly goals, milestones, and focus.</p></div>
          <div><span aria-hidden="true">04</span><p><strong>Business Restoration tools and resources</strong> to help you recognize patterns, make clearer decisions, and create changes that actually support the way you want to work.</p></div>
        </div>
        <p className={styles.includedClosing}>And, importantly, <strong>an intimate group of other business owners doing the same work alongside you.</strong></p>
      </section>

      <section className={styles.fit} aria-labelledby="fit-heading">
        <div className={styles.fitInner}>
          <div>
            <p className={styles.eyebrow}>Is this your next step?</p>
            <h2 id="fit-heading">This is probably for you if...</h2>
          </div>
          <div>
            <ul>
              <li>You have a business that works and a pretty good idea of where you want to take it.</li>
              <li>You&apos;ve had coaching and training before. You&apos;re not looking for someone to hand you another blueprint.</li>
              <li>You want accountability around the priorities you keep saying matter.</li>
              <li>You want somewhere to work through the mindset, self-negotiation, or old patterns that show up when it&apos;s time to actually make the change.</li>
              <li>And you want access to an experienced coach without needing another intensive 1:1 container or high-ticket mastermind.</li>
            </ul>
            <p className={styles.fitGoal}><strong>The goal is more follow-through, clearer decisions, reclaimed time, and a business that keeps adapting alongside your life.</strong></p>
          </div>
        </div>
      </section>

      <section className={styles.investment} aria-labelledby="investment-heading">
        <div className={styles.investmentInner}>
          <div>
            <p className={styles.eyebrow}>Keep making room for what matters</p>
            <h2 id="investment-heading">Investment</h2>
            <p className={styles.price}>The Living Business Lounge is <strong>$197/month.</strong></p>
            <JoinButton />
          </div>
          <div className={styles.investmentDetails}>
            <p>There is no monthly minimum commitment.</p>
            <p>Due to the intimate nature of this container, there are no refunds, so if you have questions, please reach out to <a href="mailto:carly@carlyclarkzimmer.com">carly@carlyclarkzimmer.com</a> or message Carly directly on <a href="https://voxer.app.link/profile?username=carlyclarkzimmer" target="_blank" rel="noopener noreferrer">Voxer.</a></p>
            <p>This is ongoing support, so there&apos;s no finish line you need to race toward. It&apos;s a place to keep practicing the decisions that make your business work better for the person you are and the life you&apos;re building now.</p>
            <p className={styles.lastWord}><strong>Your business is living. Your life is living. Your support can evolve with you, too.</strong> ✨</p>
            <p>Keep making room for what matters,<br />✨ Carly</p>
          </div>
        </div>
      </section>
    </main>
  );
}
