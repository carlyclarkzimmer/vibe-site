/* eslint-disable @next/next/no-img-element -- static legacy artwork served directly */
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "5-Minute Laser Coach | Carly Clark Zimmer",
  description: "Big breakthroughs in 5 minutes or less with Carly Clark Zimmer's 5-Minute Laser Coach.",
};

const checkoutUrl = "https://carlyclarkzimmer.thrivecart.com/5-minute-laser-coach-chat-gpt-checkout/";
const badgeText = "5-MINUTE LASER COACH • 5-MINUTE LASER COACH • ";

const outcomes = [
  "Overthinking a decision.", "Changing strategies because you’ve lost confidence in the current one.", "Researching instead of acting.", "Trying to solve everything at once.", "Circling a client conversation, boundary, rate increase, offer, or business decision.",
];

const differences = [
  ["Compassionate Directness", "Just like in my coaching sessions: no pushy advice, only truth-telling guidance delivered with deep compassion and clear direction."], ["Deep, Not Just Fast", "Quick clarity and profound insight, no surface-level fluff."], ["Trauma-Informed & Safe", "Prioritizes your safety above all, meeting you with grounded compassion and honouring what feels right for you."], ["Equity-Centered Approach", "Honors your lived experience without assumptions or bias. This is also what makes 5-minute laser coach stand out from using ChatGPT on its own."], ["Designed by a Certified Coach", "Mirrors the powerful questions that create real breakthroughs."], ["Cuts Through Mental Fog", "Helps you see hidden patterns and limiting beliefs that keep you stuck."], ["No Toxic Positivity", "Offers honest, empowering reflection without bypassing real struggles."], ["Supports Emotional Regulation", "Guides you back to grounded clarity so your next step feels doable."], ["Strategic & Soulful", "Pinpoints the top 20% of actions that create 80% of your results."], ["Built for Real Life", "From overthinking spirals to big decisions, it brings you back to your truth, fast. Fantastic for business or personal use."],
] as const;

function CheckoutLink({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <a className={className} href={checkoutUrl} target="_blank" rel="noreferrer">{children}</a>;
}

export default function BreakthroughPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={styles.heroInner}>
      <div className={styles.heroTop}>
      <p className={styles.eyebrow}>⚡️5-Minute Laser Coach Custom GPT</p><h1>Stop swirling. Find the <em>20%</em> that actually matters.</h1>
      <div className={styles.videoWrap}><iframe src="https://player.vimeo.com/video/1097028350?h=b8a528eed5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="NEW 5 Minute Laser Coach" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
      <p className={styles.intro}>When you’re short on time, the last thing you need is another hour spent researching, second-guessing, changing strategies, or trying to solve six problems at once.</p>
      <p className={styles.intro}><strong>5-Minute Laser Coach helps you cut through the noise, identify what’s actually driving the stuckness, and leave with one clear next step in about five minutes.</strong></p>
      <p className={styles.intro}>It’s free. It’s fast. And it’s built from the same pattern-recognition questions I use with my coaching clients.</p>
      <a className={styles.primaryCta} href="/2026-5-minute-laser-coach-delivery">Get Free Access to 5-Minute Laser Coach</a>
      <div className={styles.scrollBadgeDivider}>
        <div className={styles.spinningBadge} aria-label="5-Minute Laser Coach">
          <div className={styles.badgeRing} aria-hidden="true">
            {[...badgeText].map((character, index) => <span key={`${character}-${index}`} style={{ "--char-angle": `${index * (360 / badgeText.length)}deg` } as CSSProperties}>{character === " " ? "\u00a0" : character}</span>)}
          </div>
          <div className={styles.badgeImage}>
            <img src="/laser-coach-pattern-head.png" alt="Profile silhouette with gears representing pattern recognition" width={232} height={210} />
          </div>
        </div>
      </div>
      </div>
      <img className={styles.marshaTestimonial} src="/laser-coach-testimonial-marsha.png" alt="Marsha testimonial about the 5-Minute Laser Coach" width={1162} height={212} />
      <div className={styles.testimonialGrid}>
        <img className={styles.testimonialImage} src="/laser-coach-testimonial.png" alt="A client message about getting answers and a plan in five minutes" width={598} height={622} />
        <img className={styles.testimonialImage} src="/laser-coach-testimonial-farya.png" alt="Farya Barlas testimonial about the 5-Minute Laser Coach" width={1140} height={868} />
        <img className={styles.testimonialImage} src="/laser-coach-testimonial-olivia.png" alt="Olivia testimonial about the 5-Minute Laser Coach" width={842} height={864} />
      </div>
    </div></section>

    <section className={styles.promise}><div className={styles.split}>
      <div><h2>You probably don’t need more information.</h2><p>You may already know the options.</p><p>You may already know what you <em>should</em> do.</p><p>The problem is that your attention is getting pulled in twelve directions at once.</p><p>That’s one of the first things I look for in my Business Restoration work: <strong>where are you leaking time, energy, and attention on things that aren’t actually moving you forward?</strong></p><p>5-Minute Laser Coach helps you stop that leak quickly.</p><p>It asks you a few focused questions, looks for the pattern underneath what’s happening, and gives you an <strong>80/20 analysis</strong>:</p><p><strong>The 80% you can stop giving so much attention to.</strong><br /><strong>The 20% that deserves your focus right now.</strong></p><p>And then it helps you choose a concrete next move.</p><ul className={styles.outcomes}>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}<li>Feeling pulled between what you want to do and what you think you’re <em>supposed</em> to do.</li><li>Or simply thinking: <strong>“I know there’s an answer in here somewhere. I just cannot find it right now.”</strong></li></ul><CheckoutLink className={`${styles.lightCta} ${styles.largeCta}`}>Help Me Find the 20% →</CheckoutLink></div>
    </div></section>

    <section className={styles.difference}><div className={styles.narrow}><p className={styles.sectionLabel}>What makes it different</p><h2>“What makes 5-Minute Laser Coach Different from other AI tools or asking ChatGPT on my own?”</h2><div className={styles.differenceIntro}><p className={styles.clarityLead}><strong>I built it to help you think more clearly.</strong></p><p>The questions are based on the same work I’ve used with clients for years: behavioral pattern recognition, decision-making, identity work, and helping someone separate the actual problem from all the noise surrounding it.</p><p>It won’t hand you a giant list of 14 things to do next.</p><p>It helps you find <strong>the thing</strong>.</p><p className={styles.clarityList}>The Pattern.<br />The Priority.<br />The Decision Point.<br />The Next Move.</p></div><div className={styles.differenceGrid}>{differences.map(([title, copy]) => <article key={title}><h3>✅ {title}</h3><p>{copy}</p></article>)}</div><CheckoutLink className={styles.primaryCta}>Unlock Instant Clarity – $111</CheckoutLink></div></section>

    <section className={styles.socialProof}><div className={styles.narrow}><div className={styles.quote}><p className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</p><blockquote>“I&apos;ve been in an eight-year relationship with my partner, and despite all the conversations and work we&apos;ve done, there were always these trust issues we couldn&apos;t get to the bottom of. 5-Minute Laser coach helped me uncover the hidden narrative that CUTS right to the heart of the trust issue, and then the work and next steps are right there. It&apos;s actually changing my relationship with him. It&apos;s a pivot in the relationship, and all this trust and stuff that we could never kind of maintain, now this consistency to it. Super interesting, thank you for this!”</blockquote><p>– Aine</p></div><h2>Imagine having a coach in your pocket that:</h2><ul className={styles.checkList}><li>Ends the inner war between your desires and doubts</li><li>Cuts through overthinking in minutes</li><li>Guides you to your next aligned step</li><li>Helps you clear energetic and mindset blocks instantly</li><li>Settles your nervous system so you can lead with grounded confidence—even when decisions feel deeply personal</li></ul><p className={styles.centered}>Join hundreds of heart-centered professionals using ⚡️5-Minute Laser Coach to gain fast clarity, confidence.</p><CheckoutLink className={styles.primaryCta}>Start Your 5-Minute Breakthrough Now</CheckoutLink></div></section>

    <section className={styles.about}><div className={styles.aboutGrid}>
      <div className={styles.aboutCopy}><h2 className={styles.aboutTitle}>Hey there! I&apos;m Carly.</h2><h3 className={styles.aboutIntro}>An ICF-certified Life and Business Coach with eight years of experience supporting seasoned entrepreneurs and senior leaders through high-stakes transitions.</h3><p>I specialize in identity-based leadership work, with formal training in Internal Family Systems and advanced behavioral pattern recognition.</p><p><strong>Most of my clients look successful on paper.</strong> What they experience privately is internal strain during growth, visibility shifts, or structural change.</p><p>Nothing is broken.</p><p>Their operating structures simply no longer match who they&apos;ve become.</p><p><strong>I&apos;ve seen this pattern hundreds of times: Clarity is rarely the issue.</strong></p><p>Sustainable growth requires internal coherence. The alignment between identity, decision-making, and structure.</p><p>My work restores that coherence.</p><p>Clients describe feeling calmer, clearer, and more decisive.</p><p className={styles.finalLine}>Stop swirling and end the inner war so you can move forward with clarity and ease.<br /><strong>⚡️ Your breakthrough is just 5 minutes away.</strong></p><CheckoutLink className={styles.lightCta}>Get ⚡️5-Minute Laser Coach Access $111</CheckoutLink></div>
      <img className={styles.aboutPortrait} src="/carly-services-restoration.jpg" alt="Carly Clark Zimmer in a magenta jacket" width={3840} height={5760} />
    </div></section>

    <footer className={styles.footer}>© carlyclarkzimmer.com Balance by the Bay, LLC 2025</footer>
  </div>;
}
