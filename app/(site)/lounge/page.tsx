import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { copy } from "./copy";
import styles from "./page.module.css";

const joinHref = "https://carlyclarkzimmer.thrivecart.com/living-business-lounge/";
const description = "A place to practice running your business, without losing yourself in it.";
export const metadata: Metadata = {
  title: "The Living Business Lounge | Carly Clark Zimmer", description,
  alternates: { canonical: "https://carlyclarkzimmer.com/lounge/" },
  openGraph: { type: "website", siteName: "Carly Clark Zimmer", title: "The Living Business Lounge", description, url: "https://carlyclarkzimmer.com/lounge/" },
};
function JoinButton({ closing = false }: { closing?: boolean }) {
  return <a className={styles.joinButton} href={joinHref} target="_blank" rel="noopener noreferrer">{closing ? "Join the Living Business Lounge →" : "Join the Living Business Lounge"}</a>;
}
function Text({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return <>{parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (!link && part.includes("*before*")) return <Fragment key={i}>{part.split("*before*")[0]}<em>before</em>{part.split("*before*")[1]}</Fragment>;
    return link ? <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a> : <Fragment key={i}>{part}</Fragment>;
  })}</>;
}
function Prose({ lines }: { lines: readonly string[] }) {
  return <div className={styles.prose}>{lines.map((line) => {
    if (line.startsWith("- ")) return null;
    const i = lines.indexOf(line);
    const bullets = [];
    for (let j = i + 1; j < lines.length && lines[j].startsWith("- "); j++) bullets.push(lines[j].slice(2));
    const pull = line.startsWith("Your business gets to evolve") || line === "Certainty is built through evidence." || line === "This is where your roadmap meets real life.";
    return <Fragment key={line}><p className={pull ? styles.pullQuote : undefined}>{(line === "That's what we're making room for inside the Living Business Lounge." || line === "That's the kind of company you'll find inside the Living Business Lounge.") ? <strong><Text text={line} /></strong> : <Text text={line} />}</p>{bullets.length > 0 && <ul>{bullets.map(b => <li key={b}><Text text={b} /></li>)}</ul>}</Fragment>;
  })}</div>;
}
const benefits = [
  ["Your Personal Living Business Roadmap", copy.roadmap],
  ["Your Private 90-Day Living Business Reset", copy.reset],
  ["Two Live Group Coaching Calls Each Month", copy.calls],
  ["A Private Voxer Community", copy.voxer],
  ["Business Restoration Tools & Resources", copy.resources],
  ["Creative Reset Workshops: The Restoration Studio", copy.studio],
] as const;
export default function LoungePage() {
  return <div className={styles.page}>
    <section className={styles.hero} id="lounge-hero" data-no-scroll-berry aria-labelledby="lounge-heading">
      <div className={styles.heroCopy}>
        <a className={styles.eyebrow} href={joinHref} target="_blank" rel="noopener noreferrer">Click here to join the</a>
        <h1 id="lounge-heading">LIVING BUSINESS LOUNGE</h1>
        <p className={styles.tagline}>{description}</p>
        <p className={styles.heroIntro}>We&apos;ll work on evolving your business to reflect who you are and what you&apos;re excited about now, while making more room for creativity, adventure, and all those things outside of work that keep getting pushed to the bottom of the list.</p>
        <p className={styles.heroIntro}>Bring your business ideas, your growing pains, and all the wonderfully interesting things about you that have absolutely nothing to do with running a business.</p>
        <JoinButton />
      </div>
      <div className={styles.heroVisual}><Image src="/living-business-lounge-hero.jpg" alt="Carly Clark Zimmer smiling beside a stone wall" fill priority sizes="100vw" className={styles.heroImage} unoptimized /></div>
    </section>
    <section className={styles.introduction} aria-labelledby="introduction-heading"><h2 id="introduction-heading">Remember when being your own boss was supposed to be fun?</h2><Prose lines={copy.intro} /><JoinButton /></section>
    <section className={`${styles.section} ${styles.pillars}`} aria-labelledby="pillars-heading">
      <h2 id="pillars-heading">Four Pillars of the Living Business Lounge</h2>
      <div className={styles.pillarGrid}>
        <div><h3>Community</h3><p>I want to know who&apos;s in the room! Your business goals, absolutely. But also what you&apos;re reading, creating, dreaming about, and getting excited about outside of work. We&apos;re building the kind of community where people genuinely get to know each other, cheer each other on, and enjoy being together.</p></div>
        <div><h3>Accountability</h3><p>Not the kind where someone checks whether you finished your homework. The kind where people remember what you said mattered, notice when your old habits start sneaking back in, and help you follow through on the changes you actually want to make.</p></div>
        <div><h3>Creativity</h3><p>Let&apos;s make things, try things, get curious, and occasionally make a glorious mess. You don&apos;t need to be an artist or have a creative project in mind. Sometimes it&apos;s just about giving yourself permission to experiment, have fun, and remember what it&apos;s like to do something without needing it to be productive.</p></div>
        <div><h3>Focus</h3><p>Your attention is valuable, and there are approximately a million things competing for it. We&apos;ll get clear on what deserves your time and energy right now, make thoughtful decisions, and keep coming back to those priorities when everyday business life inevitably gets noisy.</p></div>
      </div>
      <p className={styles.pillarsClosing}>Because I want the Living Business Lounge to be more than another thing on your calendar. I want it to be something you genuinely look forward to, with people who help you make progress and enjoy your life along the way.</p>
    </section>
    <section className={styles.section} aria-labelledby="fit-heading"><h2 id="fit-heading">You&apos;ll feel right at home here if...</h2>
      <ul className={styles.fitList}>{copy.fit.filter(x => x.startsWith('- ')).map(x => {
        const text=x.slice(2); const stop=text.indexOf('. ')+1;
        return <li key={x}><strong>{text.slice(0,stop)}</strong><Text text={text.slice(stop)} /></li>;
      })}</ul><Prose lines={copy.fit.filter(x => !x.startsWith('- '))} />
    </section>
    <section className={`${styles.section} ${styles.quiet}`} aria-labelledby="not-fit-heading"><div className={styles.split}><h2 id="not-fit-heading">Who the Lounge Probably Isn&apos;t For</h2><Prose lines={copy.notFit} /></div></section>
    <section className={`${styles.section} ${styles.blush}`} aria-labelledby="possible-heading"><h2 id="possible-heading">What’s Possible</h2><div className={styles.outcomes}>{copy.outcomes.filter((_,i)=>i%2===0).map((x,i)=><div key={x}><h3>{x}</h3><p>{copy.outcomes[i*2+1]}</p></div>)}</div></section>
    <section className={styles.section} aria-labelledby="included-heading"><h2 id="included-heading">What&apos;s Included in the Living Business Lounge</h2><div className={styles.benefits}>{benefits.map(([title,lines],i)=><section className={styles.benefit} key={title} aria-labelledby={`benefit-${i}`}><div><span className={styles.eyebrow}>0{i+1}</span><h3 id={`benefit-${i}`}>{title}</h3>{i === 5 && <div className={styles.artwork}><Image src="/lounge-creative-reset-watercolor.png" alt="Carly holding paintbrushes in her art studio, framed by colorful watercolor washes" width={1488} height={1164} sizes="(max-width: 900px) 100vw, 40vw" unoptimized /></div>}</div><Prose lines={lines} /></section>)}</div><div className={styles.includedClosing}><h3>A whole lot more than another business meeting.</h3><Prose lines={copy.includedClosing} /><JoinButton /></div></section>
    <section className={`${styles.section} ${styles.investment}`} aria-labelledby="investment-heading"><div className={styles.split}><div><h2 id="investment-heading">Your Invitation to the Living Business Lounge</h2><p className={styles.price}>$197/month</p><p className={styles.commitment}>An initial three-month commitment, then month-to-month.</p></div><div><Prose lines={copy.investment} /><JoinButton /><p className={styles.investmentNote}>Payments are non-refundable. Have questions before joining? Email me at <a href="mailto:carly@carlyclarkzimmer.com">carly@carlyclarkzimmer.com</a> or <a href="https://voxer.app.link/profile?username=carlyclarkzimmer" target="_blank" rel="noopener noreferrer">send me a message on Voxer</a>. I&apos;d be happy to chat!</p></div></div></section>
    <section className={`${styles.section} ${styles.closing}`} aria-labelledby="closing-heading"><h2 id="closing-heading">{copy.closing[0]}</h2><Prose lines={copy.closing.slice(1,-2)} /><JoinButton closing /><Prose lines={copy.closing.slice(-2)} /></section>
  </div>;
}
