/* eslint-disable @next/next/no-img-element -- static legacy artwork served directly */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "5-Minute Laser Coach | Carly Clark Zimmer",
  description: "Big breakthroughs in 5 minutes or less with Carly Clark Zimmer's 5-Minute Laser Coach.",
};

const checkoutUrl = "https://carlyclarkzimmer.thrivecart.com/5-minute-laser-coach-chat-gpt-checkout/";

const outcomes = [
  "Bust through overthinking and self-doubt", "Uncover hidden fears and blocks", "Identify your top 20% focus for immediate traction", "Help you delete the 80% you’re focused on that’s disguised procrastination", "Move forward with calm, confident action", "Raise your rates- because you know you’re long overdue", "Sort through the confusion around your next steps forward so you have clear, specific steps.",
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
      <p className={styles.eyebrow}>⚡️5-Minute Laser Coach Custom GPT</p><h1>Big Breakthroughs in <em>5 Minutes</em> or Less.</h1>
      <div className={styles.videoWrap}><iframe src="https://player.vimeo.com/video/1097028350?h=b8a528eed5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="NEW 5 Minute Laser Coach" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
      <CheckoutLink className={styles.primaryCta}>Get ⚡️5-Minute Laser Coach</CheckoutLink><p className={styles.heroSubhead}>Your soulful AI sidekick to cut through overthinking and self-doubt, fast!</p>
      <p className={styles.intro}>A few months ago, I got curious and built a tool for my clients using AI. I figured it&apos;s a pattern-finder, just like coaching is a pattern-finder, so why not see if AI could support clients when I was off the clock? <strong>The feedback was so positive</strong> that I decided to release it to a wider audience. Quickly, I started to get TONS of messages like this!</p>
      <img className={styles.testimonialImage} src="/laser-coach-testimonial.png" alt="A client message about getting answers and a plan in five minutes" width={598} height={622} />
    </div></section>

    <section className={styles.promise}><div className={styles.split}>
      <img src="/laser-coach-promo.png" alt="Carly Clark Zimmer and 5-Minute Laser Coach Custom GPT" width={1064} height={598} />
      <div><p className={styles.sectionLabel}>A tool created by Carly Clark Zimmer</p><h2>⚡️5-Minute Laser Coach is your trauma-informed, wildly effective, and shockingly easy-to-use AI-powered tool.</h2><p>Created by me, Carly Clark Zimmer, Multi-Dimensional Life &amp; Business Coach.</p><p>This tool will help you end the internal battle between your soul&apos;s calling and self-doubt, and cut straight to the hidden narrative your subconscious is operating from. It will help you:</p><ul className={styles.outcomes}>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><p className={styles.cosmic}><strong><em>Cosmic Clarity, Included 💫</em></strong><br />Want to add a sprinkle of stardust? You can choose to personalize your coaching with your Human Design and Astrology!</p><CheckoutLink className={styles.lightCta}>Get ⚡️5-Minute Laser Coach – $111</CheckoutLink></div>
    </div></section>

    <section className={styles.difference}><div className={styles.narrow}><p className={styles.sectionLabel}>What makes it different</p><h2>“What makes 5-Minute Laser Coach Different from other AI tools or asking ChatGPT on my own?”</h2><div className={styles.differenceGrid}>{differences.map(([title, copy]) => <article key={title}><h3>✅ {title}</h3><p>{copy}</p></article>)}</div><CheckoutLink className={styles.primaryCta}>Unlock Instant Clarity – $111</CheckoutLink></div></section>

    <section className={styles.socialProof}><div className={styles.narrow}><p className={styles.sectionLabel}>Why People Love it</p><p className={styles.permission}>*Permission has been granted for the use of screen shots and testimonials</p><div className={styles.quote}><p className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</p><blockquote>“I&apos;ve been in an eight-year relationship with my partner, and despite all the conversations and work we&apos;ve done, there were always these trust issues we couldn&apos;t get to the bottom of. 5-Minute Laser coach helped me uncover the hidden narrative that CUTS right to the heart of the trust issue, and then the work and next steps are right there. It&apos;s actually changing my relationship with him. It&apos;s a pivot in the relationship, and all this trust and stuff that we could never kind of maintain, now this consistency to it. Super interesting, thank you for this!”</blockquote><p>– Aine</p></div><h2>Imagine having a coach in your pocket that:</h2><ul className={styles.checkList}><li>Ends the inner war between your desires and doubts</li><li>Cuts through overthinking in minutes</li><li>Guides you to your next aligned step</li><li>Helps you clear energetic and mindset blocks instantly</li><li>Settles your nervous system so you can lead with grounded confidence—even when decisions feel deeply personal</li></ul><p className={styles.centered}>Join hundreds of heart-centered professionals using ⚡️5-Minute Laser Coach to gain fast clarity, confidence.</p><CheckoutLink className={styles.primaryCta}>Start Your 5-Minute Breakthrough Now</CheckoutLink></div></section>

    <section className={styles.about}><div className={styles.narrow}><p className={styles.sectionLabel}>Hey there! I&apos;m Carly.</p><h2>An ICF-certified Life and Business Coach with eight years of experience supporting seasoned entrepreneurs and senior leaders through high-stakes transitions.</h2><p>I specialize in identity-based leadership work, with formal training in Internal Family Systems and advanced behavioral pattern recognition.</p><p><strong>Most of my clients look successful on paper.</strong> What they experience privately is internal strain during growth, visibility shifts, or structural change.</p><p>Nothing is broken.</p><p>Their operating structures simply no longer match who they&apos;ve become.</p><p><strong>I&apos;ve seen this pattern hundreds of times: Clarity is rarely the issue.</strong></p><p>Sustainable growth requires internal coherence. The alignment between identity, decision-making, and structure.</p><p>My work restores that coherence.</p><p>Clients describe feeling calmer, clearer, and more decisive.</p><p className={styles.finalLine}>Stop swirling and end the inner war so you can move forward with clarity and ease.<br /><strong>⚡️ Your breakthrough is just 5 minutes away.</strong></p><CheckoutLink className={styles.lightCta}>Get ⚡️5-Minute Laser Coach Access $111</CheckoutLink></div></section>

    <section className={styles.pledge}><div className={styles.narrow}><p><strong><em>Cross-Cultural Competency, Awareness, and Equity Pledge:</em></strong></p><p>I stand in solidarity with Black, Brown, Indigenous, Minority Ethnic, and People of Colour, LGBTQIA+ &amp; those who hold culturally and systemically marginalized identities to dismantle systemic racism. I pledge to continue to comb through my cultural bias, vet coaching tools and philosophies, and question business systems &amp; practices for their equality and effectiveness instead of blindly following what has been done before. After all, if you&apos;ve read this far you know that this is everything I&apos;m here to dismantle both systemically and within ourselves.</p><p>My communities have a strict vetting process so that we can provide a safe, trauma-informed space for people of all identities to learn, grow, ask questions, and provide their own valuable insight and feedback for us all to learn from.</p></div></section>
    <footer className={styles.footer}>© carlyclarkzimmer.com Balance by the Bay, LLC 2025</footer>
  </div>;
}
