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
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
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
    return <Fragment key={line}><p className={pull ? styles.pullQuote : undefined}><Text text={line} /></p>{bullets.length > 0 && <ul>{bullets.map(b => <li key={b}>{b}</li>)}</ul>}</Fragment>;
  })}</div>;
}
const benefits = [
  ["Your Personal Living Business Roadmap", copy.roadmap],
  ["Your 90-Day Living Business Reset", copy.reset],
  ["Two Live Living Business Coaching Calls Each Month", copy.calls],
  ["Shared Voxer Community support between calls", copy.voxer],
  ["Business Restoration tools and resources", copy.resources],
] as const;
export default function LoungePage() {
  return <div className={styles.page}>
    <section className={styles.hero} id="lounge-hero" data-no-scroll-berry aria-labelledby="lounge-heading">
      <div className={styles.heroCopy}>
        <a className={styles.eyebrow} href={joinHref} target="_blank" rel="noopener noreferrer">Click here to join the</a>
        <h1 id="lounge-heading">LIVING BUSINESS LOUNGE</h1>
        <p className={styles.tagline}>{description}</p>
        <p className={styles.heroIntro}>The Living Business Lounge is an ongoing coaching community for established business owners who already have clients, generate revenue, and are ready to be more intentional about what comes next.</p>
        <JoinButton />
      </div>
      <div className={styles.heroVisual}><Image src="/living-business-lounge-hero.jpg" alt="Carly Clark Zimmer smiling beside a stone wall" fill priority sizes="100vw" className={styles.heroImage} unoptimized /></div>
    </section>
    <section className={styles.introduction}><Prose lines={copy.intro} /><JoinButton /></section>
    <section className={`${styles.section} ${styles.pillars}`} aria-labelledby="pillars-heading">
      <h2 id="pillars-heading">Four pillars of the Living Business Lounge</h2>
      <div className={styles.pillarGrid}>
        <div><h3>Community.</h3><p>An intimate group of business owners who genuinely get to know each other. I want to know your business goals, of course, and I also want to know what you&apos;re excited about in your life outside of work so I can help you make space for it!</p></div>
        <div><h3>Accountability.</h3><p>The kind that comes from having people who remember what you said mattered, notice when old patterns are getting in your way, and help you figure out what to do differently.</p></div>
        <div><h3>Creativity.</h3><p>More opportunities to play, experiment, make things, and reconnect with parts of ourselves that don&apos;t always get much attention when we&apos;re busy running businesses.</p></div>
        <div><h3>Focus.</h3><p>Making thoughtful decisions about where you want to spend your time and energy, and having a place to return to those decisions when life inevitably gets busy.</p></div>
      </div>
      <p className={styles.pillarsClosing}>And I want all of this to feel supportive, enjoyable, and genuinely useful in your everyday life.</p>
    </section>
    <section className={styles.section} aria-labelledby="fit-heading"><h2 id="fit-heading">Who It’s For</h2>
      <ul className={styles.fitList}>{copy.fit.filter(x => x.startsWith('- ')).map(x => {
        const text=x.slice(2); const stop=text.indexOf('. ')+1;
        return <li key={x}><strong>{text.slice(0,stop)}</strong>{text.slice(stop)}</li>;
      })}</ul><Prose lines={copy.fit.filter(x => !x.startsWith('- '))} />
    </section>
    <section className={`${styles.section} ${styles.quiet}`} aria-labelledby="not-fit-heading"><div className={styles.split}><h2 id="not-fit-heading">Who This Isn’t For</h2><Prose lines={copy.notFit} /></div></section>
    <section className={styles.section} aria-labelledby="how-heading"><div className={styles.split}><h2 id="how-heading">How We’ll Work Together</h2><Prose lines={copy.how} /></div>
      <ol className={styles.process} aria-label="The Lounge decision process">{copy.process.map((x,i) => {const [title,...rest]=x.split(': '); return <li key={title}><span className={styles.stepNumber} aria-hidden="true">0{i+1}</span><h3>{title}</h3><p>{rest.join(': ')}</p></li>;})}</ol>
      <div className={styles.reading}><Prose lines={copy.reality} /></div>
    </section>
    <section className={`${styles.section} ${styles.blush}`} aria-labelledby="possible-heading"><h2 id="possible-heading">What’s Possible</h2><div className={styles.outcomes}>{copy.outcomes.filter((_,i)=>i%2===0).map((x,i)=><div key={x}><h3>{x}</h3><p>{copy.outcomes[i*2+1]}</p></div>)}</div></section>
    <section className={styles.section} aria-labelledby="included-heading"><h2 id="included-heading">What’s Included</h2><div className={styles.benefits}>{benefits.map(([title,lines],i)=><section className={styles.benefit} key={title} aria-labelledby={`benefit-${i}`}><div><span className={styles.eyebrow}>0{i+1}</span><h3 id={`benefit-${i}`}>{title}</h3></div><Prose lines={lines} /></section>)}</div></section>
    <section className={`${styles.section} ${styles.studio}`} aria-labelledby="studio-heading"><div className={styles.split}><div><p className={styles.eyebrow}>The Restoration Studio</p><h2 id="studio-heading">A Creative Reset</h2><div className={styles.artwork}><Image src="/lounge-creative-reset-watercolor.png" alt="Carly holding paintbrushes in her art studio, framed by colorful watercolor washes" width={1488} height={1164} sizes="(max-width: 900px) 100vw, 40vw" unoptimized /></div></div><Prose lines={copy.studio} /></div><JoinButton /></section>
    <section className={`${styles.section} ${styles.investment}`} aria-labelledby="investment-heading"><div className={styles.split}><div><h2 id="investment-heading">Investment</h2><p className={styles.price}>$197/month</p><JoinButton /></div><Prose lines={copy.investment} /></div></section>
    <section className={`${styles.section} ${styles.closing}`} aria-label="Closing Invitation"><Prose lines={copy.closing.slice(0,-2)} /><JoinButton closing /><Prose lines={copy.closing.slice(-2)} /></section>
  </div>;
}
