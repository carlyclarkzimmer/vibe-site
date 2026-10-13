import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Carly Clark Zimmer | Business Restoration Coach",
  description: "Meet Carly Clark Zimmer and learn how the Business Restoration Method helps successful service-based business owners build a business that leaves room for life.",
};

const promises = [
  ["I see the pattern underneath the pattern", "I’m not here to hand you another productivity hack. I slow things down enough to see what’s actually making the decision for you: the old rule, fear, identity, or protective pattern underneath the behavior."],
  ["We use evidence, not just insight", "Self-trust doesn’t develop by thinking harder. It happens when you make different, intentional choices. We test the new response, collect the evidence, and let that evidence make the next decision easier. 🔥"],
  ["Your ambition stays. The overfunctioning doesn’t.", "I’m not here to make you less driven, less caring, or less capable. I know what it’s like to be the person who can handle a lot. The work is keeping your ambition while releasing the belief that you have to carry everything to be successful."],
] as const;

const phases = [
  { number: "1", title: "Stop the Leaks", paragraphs: ["We start by identifying where your time, energy, attention, and capacity are quietly leaking out.", "This is where we catch the automatic yes, the immediate reply, the urge to fix everything, the calendar that protects everyone else before it protects you.", "You’ll start making small, real-life changes that create breathing room fast, because we’re not trying to overhaul the whole business yet.", "We’re stopping the patterns that keep draining you long enough to see clearly again."] },
  { number: "2", title: "Open the Walls", paragraphs: ["Once we can see the behavior, we look underneath it.", "What old rule is actually making the decision?", "Maybe it’s “If they’re disappointed, I did something wrong.” Maybe it’s “If I can technically fit it in, I should.” Maybe it’s “Their urgency becomes my urgency.”", "This is where we stop trying to force better behavior and start understanding what’s been driving it.", "Then we decide what you want to operate by now, test that choice in real life, and collect evidence that you can trust yourself to choose differently."] },
  { number: "3", title: "Rebuild the Business Backbone", paragraphs: ["This is where we take the decisions you’ve been practicing and make sure the business actually reflects them.", "We look at things like your pricing, client access, scope, capacity, and schedule, and adjust what needs to change so you’re not having to re-decide the same thing over and over.", "The goal is to make the new way of working easier to keep, because it’s built into the business instead of living only in your head."] },
] as const;

export default function AboutPage() {
  return <>
    <div className={styles.heroSequence}>
      <header className={styles.hero} id="about-hero">
        <Image className={styles.heroImage} src="/carly-about-hero.png" alt="Carly Clark Zimmer seated on stone steps in a magenta velvet jacket" fill priority sizes="100vw" unoptimized />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            Carly Clark Zimmer:
            <br />
            Holistic Business Leadership Coach
          </p>
          <h1>If your business is growing but your life outside of it keeps getting smaller, <em>something needs to change.</em></h1>
        </div>
      </header>

      <section className={styles.intro}>
        <div className={styles.introLead}>
          <p className={styles.kicker}>Here’s the thing…</p>
          <h2>You didn’t build your business to recreate the same kind of job you were trying to leave.</h2>
          <p>You built it because you wanted more autonomy, more flexibility, and more say over how you spend your time.</p>
          <p>But if every client request, team question, and business problem still comes back to you, that freedom gets eaten up fast.</p>
        </div>
      </section>
    </div>

    <section className={styles.story}>
      <div className={styles.storyOpening}>
        <div><p className={styles.eyebrow}>The story underneath the work</p><h2>I know what it’s like to build the cage yourself.</h2><p>I’m an elder millennial raised on work hard, be useful, don’t complain, and for the love of all the Goddesses, follow through. 😂</p><p>That work ethic helped me build two businesses, first a brick-and-mortar massage therapy practice on Long Island, then my coaching business.</p><p>And somehow, both times, I managed to rebuild a version of the exact cage I thought I had left behind when I stopped working for someone else.</p></div>
        <figure className={styles.storyPhoto}>
          <div className={styles.storyPhotoFrame}>
            <Image
              src="/carly-about-airport-client-call.jpg"
              alt="Carly taking a client call from an airport"
              fill
              sizes="(max-width: 760px) 100vw, 38vw"
              unoptimized
            />
          </div>
          <figcaption>
            This is me, squeezing in a client call at an airport, during the pandemic, on my way to to my Grandmother&apos;s funeral, in the name of good client delivery.
          </figcaption>
        </figure>
      </div>
      <div className={styles.storyMoment}><p>One New Year’s Eve, I was tucked away in a back bedroom frantically trying to answer Slack messages while everyone I loved was downstairs, laughing and making memories without me.</p><h2>That was my oh shit moment.</h2><p>I realized I had become incredibly good at being needed, responsive, capable, and responsible… and somewhere along the way, my business had started eating the parts of my life I actually cared about.</p></div>
      <div className={styles.lifeGrid}>
        <div><p className={styles.kicker}>So I changed how I worked.</p><h2>I wanted more life.</h2><p>I wanted more room for the things that make me feel like myself outside of work, like painting, gardening, travel, long walks, getting completely absorbed in a romantasy novel, spending time with family, hanging out with my cats, or feeling the thrill of the perfect $8 thrift-store lamp score!</p><p>And that’s the kind of space I want my clients to have in their lives too.</p></div>
        <div className={styles.lifePhoto}>
          <Image
            src="/carly-about-life-outside-work.jpg"
            alt="Carly enjoying breakfast outdoors in Spain"
            fill
            sizes="(max-width: 760px) 100vw, 38vw"
            unoptimized
          />
        </div>
      </div>
    </section>

    <section className={styles.intro}>
      <div className={styles.introGrid}>
        <div><p className={styles.kicker}>Where do I come in?</p><p className={styles.introStatement}>I help successful service-based business owners stop being the person everything depends on, so the business can keep growing without taking over their life.</p></div>
        <div className={styles.introPortrait}>
          <Image
            src="/carly-about-where-i-come-in-seated.jpg"
            alt="Carly Clark Zimmer seated in a green velvet jacket"
            fill
            sizes="(max-width: 760px) 100vw, 38vw"
            unoptimized
          />
        </div>
      </div>
      <div className={styles.howResult}>
        <div><p className={styles.kicker}>How?</p><p>Through the Business Restoration Method, we find the bottlenecks draining your time, energy, and capacity, uncover the patterns underneath them, and rebuild the way your business operates so you’re not relying on overwork, over-responsibility, or constant availability to keep things moving.</p></div>
        <div><p className={styles.kicker}>The result?</p><p>You make clearer decisions, protect your time, delegate without taking everything back, and actually move your own priorities forward.</p><p>Your business starts humming along, and you finally have room for your life to do the same.</p></div>
      </div>
    </section>

    <section className={styles.promises}>
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>My Promise to you</p>
        <div className={styles.sectionIntroCopy}>
          <h2>We build your Bottleneck Offload System.</h2>
          <p>
            This is where we identify what your business is still relying on <em>you</em> to carry, then change the patterns, decisions, and structures that keep putting everything back on your plate.
          </p>
          <p>
            Because building your <strong>Bottleneck Offload System</strong> is the fastest and most effective way to create a business that doesn’t depend on you for everything, so you can actually live your life outside of it.
          </p>
        </div>
      </div>
      <div className={styles.promiseList}>{promises.map(([title, copy], index) => <article className={styles.promise} key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      <div className={styles.promiseClose}>
        <div className={styles.promisePortrait}>
          <Image
            src="/carly-about-promise.jpg"
            alt="Carly Clark Zimmer seated in a shimmering black dress"
            fill
            sizes="(max-width: 760px) 100vw, 38vw"
            unoptimized
          />
        </div>
        <div className={styles.promiseCloseCopy}>
          <p>The goal is for you to have enough space in your day to actually feel like yourself. 🫶</p>
        </div>
      </div>
    </section>

    <section className={styles.method} id="method">
      <div className={styles.methodIntro}>
        <p className={styles.eyebrow}>The Business Restoration Method</p><h2>Before we begin</h2>
        <p>Before we start changing anything, we look at the full picture of your life and business.</p>
        <ul><li>What matters to you right now?</li><li>What do you want more room for?</li><li>What is working?</li><li>What feels too heavy?</li><li>What are you trying to protect or create in this season?</li></ul>
        <p>That gives us a clear sense of what we’re restoring the business for.</p>
      </div>
      <div className={styles.phaseList}>{phases.map((phase) => <article className={styles.phase} key={phase.number}><div className={styles.phaseHeading}><p>Phase {phase.number}</p><h3>{phase.title}</h3></div><div className={styles.phaseCopy}>{phase.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</div>
    </section>

    <section className={styles.bio}>
      <div className={styles.bioHeading}><p className={styles.eyebrow}>A little about the person you’ll actually be working with</p><h2>Hi, I’m Carly.</h2></div>
      <div className={styles.bioGrid}>
        <div className={styles.bioPhoto}>
          <Image
            src="/carly-about-bio-green.jpg"
            alt="Carly Clark Zimmer smiling in a green velvet jacket"
            fill
            sizes="(max-width: 760px) 100vw, 38vw"
            unoptimized
          />
        </div>
        <div className={styles.bioCopy}><p>I’m Carly Clark Zimmer, an ICF Professional Certified Coach (PCC) with eight+ years of experience coaching entrepreneurs and leaders through the decisions, patterns, and business changes that come with growth.</p><p>Before coaching, I spent 12 years as a licensed massage therapist, which is really where my obsession with noticing patterns began. I learned to look beyond what was showing up in the body and get curious about how stress, lifestyle, communication, and our relationship with ourselves were contributing to it.</p><p>My work today brings together behavioral change, identity work, and practical business strategy to help you change not only what you’re doing, but the way you’re operating underneath it.</p><p>And yes, I’m still doing this work too. I’m an Enneagram 1 with a strong 4 and 8 right on its heels, which means I can bounce between “let’s do this the right way,” “but does it actually feel like me?” and “okay, enough, I’ll just handle it.” 😅</p><p>Add in a 2/4 Generator and Aries rising, and you get someone who genuinely loves people and connection, needs a lot of alone time, and can move pretty fast when something clicks.</p><p>I’m an old soul, the only daughter with three brothers, raised in a working-class family where hard work is a family value.</p><p>You can also catch me rearranging furniture because I need the room to feel different, and listening to Taylor Swift while I do it.</p></div>
      </div>
    </section>

    <section className={styles.personalNote} id="personal-note" aria-labelledby="personal-note-heading">
      <div className={styles.personalNoteHeader}>
        <p className={styles.eyebrow}>A more personal note</p>
        <p>Life, beyond the business</p>
      </div>

      <h2 id="personal-note-heading">The art of making room for a life you love.</h2>

      <div className={styles.personalStory}>
        <figure className={styles.personalFigure}>
          <div className={styles.personalPhoto}>
            <Image
              src="/carly-about-ireland.jpg"
              alt="Carly photographing the Cliffs of Moher in Ireland"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              unoptimized
            />
          </div>
          <figcaption>01 / Ireland, my soul’s home</figcaption>
        </figure>
        <div className={styles.personalCopy}>
          <h3><em>Almost seven years in Ireland changed how I see everything.</em></h3>
          <p>I lived abroad in Ireland for nearly seven years, and it’s still where a piece of my heart lives. I remember realizing that I didn’t even know what some of my closest friends did for work until we’d known each other for almost two years. Imagine that! I loved being somewhere that felt less interested in what you did for a living and more interested in who you were, your stories, your relationships, and how you spent your days. <strong>That experience shaped how I think about success, and eventually, the work I do with business owners today.</strong></p>
        </div>
      </div>

      <div className={`${styles.personalStory} ${styles.personalStoryReverse}`}>
        <div className={styles.personalCopy}>
          <p className={styles.personalLabel}>02 / The artist</p>
          <h3>For 12 years, my creativity was waiting for permission.</h3>
          <p>I spent twelve years away from making art because there was always something more important to finish first. The work. The responsibilities. The never-ending list. Eventually, I realized I was postponing something that made me feel most like myself. <strong>So I started making art again. Not because everything was done, but because I stopped making creativity wait.</strong></p>
        </div>
        <figure className={styles.personalFigure}>
          <div className={styles.personalPhoto}>
            <Image
              src="/carly-about-painting.jpg"
              alt="Carly smiling beside one of her large abstract paintings"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              unoptimized
            />
          </div>
          <figcaption>02 / The return to creativity</figcaption>
        </figure>
      </div>

      <div className={styles.personalGallery}>
        <p className={styles.personalLabel}>03 / What I’m making room for</p>
        <div className={styles.personalGalleryGrid}>
          <figure>
            <div className={`${styles.galleryPhoto} ${styles.husbandPhoto}`}>
              <Image
                src="/carly-about-husband.jpg"
                alt="Carly and her husband smiling together beside a canal in Venice"
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 31vw"
                unoptimized
              />
            </div>
            <figcaption>16+ years with my husband, and still choosing adventure.</figcaption>
          </figure>
          <figure>
            <div className={styles.galleryPhoto}>
              <Image
                src="/carly-about-cats.jpg"
                alt="Carly relaxing at home with Margarita and Ollie"
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 31vw"
                unoptimized
              />
            </div>
            <figcaption>“The girls,” our darling Margarita and Ollie Baby.</figcaption>
          </figure>
          <figure>
            <div className={`${styles.galleryPhoto} ${styles.kidsPhoto}`}>
              <Image
                src="/carly-about-nieces-nephews.jpg"
                alt="Carly smiling with one of her nieces"
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 23vw"
                unoptimized
              />
            </div>
            <figcaption>Ten nieces and nephews. A whole lot of love, laughter, and family time.</figcaption>
          </figure>
          <figure>
            <div className={styles.galleryPhoto}>
              <Image
                src="/carly-about-connemara.jpg"
                alt="Carly cooking outdoors beside the sea in Connemara, Ireland"
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 23vw"
                unoptimized
              />
            </div>
            <figcaption className={styles.galleryCaptionLong}>
              <span>As a Sagittarius with Aries rising, I LOVE a good adventure, especially one that takes me to my favorite place on the edge of the world in Connemara, Ireland.</span>
              <span>But I&apos;m just as happy getting lost in a great romantasy novel, hunting for treasures at the thrift store, tending to my garden, or enjoying the little pleasures of everyday life.</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={styles.personalClosing}>
        <p>Recovering perfectionist. Lifelong overachiever. Artist. Traveler. Old soul.</p>
        <p>I believe in intuition <em>and</em> evidence, meaningful work, and building a life on my own terms.</p>
        <blockquote>I’m no longer building my life around who I learned I had to be. I’m building from who I actually am now.</blockquote>
      </div>
    </section>

    <section className={styles.closing}><p className={styles.eyebrow}>Your next chapter</p><h2>Your business gets to be successful. <em>And you get to have a life.</em></h2><p>If you’re ready to stop being the person everything depends on, come see the different ways we can work together.</p><Link className={styles.cta} href="/services">Show Me My Options</Link></section>
  </>;
}
