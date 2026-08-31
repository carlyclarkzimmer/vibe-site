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

    <section className={styles.difference}><div className={styles.narrow}><p className={`${styles.sectionLabel} ${styles.movingLabel}`}><span>What makes it different</span></p><h2>What makes 5-Minute Laser Coach different from just opening ChatGPT or Claude?</h2><div className={styles.differenceIntro}><p>If you open a general AI tool with a messy decision, chances are you can spend way more than five minutes going back and forth, adding context, asking follow-up questions, and somehow ending up with even more to think about.</p><p className={styles.clarityLead}><strong>5-Minute Laser Coach is designed to get in, get clear, and get you back out.</strong></p><p>It asks a small number of focused questions, looks for the pattern underneath the problem, and gives you an 80/20 read on what to stop paying attention to and what actually deserves your focus.</p><p className={styles.clarityList}>No endless AI conversation.<br />No giant list of ideas.<br />No spending an hour “processing” with a chatbot.</p><p><strong>Just clarity, one next step, and back to your actual life.</strong> ⚡️</p></div><CheckoutLink className={styles.primaryCta}>Unlock Instant Clarity</CheckoutLink></div></section>

    <section className={styles.socialProof}><div className={styles.narrow}><div className={styles.quote}><p className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</p><blockquote>“I&apos;ve been in an eight-year relationship with my partner, and despite all the conversations and work we&apos;ve done, there were always these trust issues we couldn&apos;t get to the bottom of. 5-Minute Laser coach helped me uncover the hidden narrative that CUTS right to the heart of the trust issue, and then the work and next steps are right there. It&apos;s actually changing my relationship with him. It&apos;s a pivot in the relationship, and all this trust and stuff that we could never kind of maintain, now this consistency to it. Super interesting, thank you for this!”</blockquote><p>– Aine</p><img className={styles.additionalTestimonials} src="/laser-coach-testimonials-tracy-anne-jenn.png" alt="Testimonials from Tracy Hilliard, Anne Kamholz, and Jenn Lemaire about the 5-Minute Laser Coach" width={898} height={1024} /></div><h2>Imagine having a coach in your pocket that:</h2><ul className={styles.checkList}><li>Ends the inner war between your desires and doubts</li><li>Cuts through overthinking in minutes</li><li>Guides you to your next aligned step</li><li>Helps you clear energetic and mindset blocks instantly</li><li>Settles your nervous system so you can lead with grounded confidence—even when decisions feel deeply personal</li></ul><p className={styles.centered}>Join hundreds of heart-centered professionals using ⚡️5-Minute Laser Coach to gain fast clarity, confidence.</p><CheckoutLink className={styles.primaryCta}>Start Your 5-Minute Breakthrough Now</CheckoutLink></div></section>

    <section className={styles.about}><div className={styles.aboutGrid}>
      <div className={styles.aboutCopy}><h2 className={styles.aboutTitle}>Created by Carly Clark Zimmer</h2><h3 className={styles.aboutIntro}>I’m an ICF-certified Life and Business Coach who helps successful business owners stop becoming the bottleneck inside businesses they built for freedom.</h3><p>My work combines behavioral change with practical business strategy.</p><p>Because usually, the problem isn’t that you don’t know enough.</p><p><strong>It’s that an old pattern, automatic decision, or competing priority is making it harder to follow through on what you already know.</strong></p><p>That’s exactly what 5-Minute Laser Coach is designed to help you see.</p><CheckoutLink className={styles.lightCta}>Get ⚡️5-Minute Laser Coach Access</CheckoutLink></div>
      <img className={styles.aboutPortrait} src="/carly-services-restoration.jpg" alt="Carly Clark Zimmer in a magenta jacket" width={3840} height={5760} />
    </div></section>

    <footer className={styles.footer}>© carlyclarkzimmer.com Balance by the Bay, LLC 2026</footer>
  </div>;
}
