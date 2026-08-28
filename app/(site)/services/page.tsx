import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import styles from "./page.module.css";

const decisionMapHref =
  "https://carlyclarkzimmer.as.me/schedule/21337638/appointment/32392163/calendar/1296940?appointmentTypeIds[]=32392163";
const recommendationHref = "https://carlyclarkzimmer.as.me/connect";
const title = "Carly Clark Zimmer | Clarity for Life and Business Transitions";
const description =
  "For people who know something needs to change but are unsure what comes next. Private intensives and ongoing support for clarity and grounded decisions during life and business transitions.";
const canonicalUrl = "https://carlyclarkzimmer.com/services/";
const socialTitle = "When What You Built No Longer Fits";
const socialDescription =
  "For people who know something needs to change but are not sure what comes next. Clarity and grounded direction for life and business transitions.";
const socialImageUrl = "https://carlyclarkzimmer.com/services-social.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title: socialTitle,
    description: socialDescription,
    url: canonicalUrl,
    images: [
      {
        url: socialImageUrl,
        width: 2400,
        height: 1573,
        alt: "Carly Clark Zimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImageUrl],
  },
};

const claritySessionDifferences = [
  "I've delivered hundreds of sessions, which has given me the experience to uncover hidden narratives, intentions, and the question underneath the question.",
  "I have nine years of coaching experience and multiple coaching certifications: Professionally Certified from the International Coaching Federation (PCC) - known as the gold standard in coaching, Certified in Equity Centered Coaching to remove personal bias and understand the intersection of identity and cultural sensitivity, Certified in the Kolbe Index to identify your natural strengths, and certified in the BodyMind Method to bring integration and body wisdom to the work along with the intellectual tools.",
  "Formally trained in Internal Family Systems, aka Parts Work, which has helped my clients make behavioral changes faster than before I started using this modality.",
  "Skilled at pattern and blind spot identification",
  "Structured intake process to avoid rehashing what you've already tried or covered",
];

function List({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

export default function ServicesPage() {
  return (
    <>
      <div className={styles.heroSequence}>
        <section className={styles.hero} id="services-hero">
        <Image
          className={styles.heroImage}
          src="/carly-services-hero.jpg"
          alt="Carly Clark Zimmer standing in an elegant room surrounded by plants"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.readingWidth}>
          <h1>Business Restoration</h1>
          <p>
            The <strong>Business Restoration Method</strong> is private coaching for successful
            business owners who are ready to stop overfunctioning, reclaim their time and
            capacity, and rebuild the business around the way they actually want to work and live.
          </p>
        </div>
        </section>

        <Section className={styles.approach}>
          <h2>
            <span>The goal isn’t to burn it all down.</span>
            <span>It’s to stop recreating the parts that are wearing you out.</span>
          </h2>
          <p>
            <strong>What I see happen all the time is this:</strong> a woman builds a business that
            looks successful on paper, but behind the scenes she’s exhausted, working too much,
            and starting to resent how little life she has outside of it.
          </p>
          <p>
            And usually, the problem isn’t that she’s doing something wrong.
          </p>
          <p>
            It’s that the same habits and behaviors that helped her build the business in the first
            place are now the very things making it harder to grow without sacrificing more of
            herself.
          </p>
          <Button
            className={styles.approachCta}
            href="https://carlyclarkzimmer.as.me/schedule/21337638"
            newTab
            variant="outline"
          >
            Book a Recommendation Call
          </Button>
        </Section>

        <section className={styles.intro}>
        <div className={styles.introImage}>
          <Image
            src="/services-intro-carly.jpg"
            alt="Carly Clark Zimmer"
            width={890}
            height={1565}
            priority
            unoptimized
          />
        </div>
        <div className={styles.introCopy}>
          <p className={styles.accentLead}>
            <strong>Options:</strong> Your Personal Decision Map created together in 90 Minutes or
            six months of implementation support.
          </p>
          <p className={styles.accentLead}>
            We work to uncover the behavior bottlenecks and create a plan of action so you can
            redesign your role and lead decisively.
          </p>
          <p>
            A recent client came to me right as she was leaving her corporate job. She felt shaky
            about reaching out for referrals. The advice she was given was to connect with everyone
            she knows on LinkedIn and start selling her services, and she would make “10k in 10
            days.”
          </p>
          <p>
            This was clearly not the aligned path for her. During our six months together, I helped
            her see how much experience she had in her field, we collected evidence, we put
            together a program for her to sell at the appropriate price, and customized a sales
            call process so she could relax and make aligned invitations.
          </p>
          <p>
            Within these six months, she booked clients and training sessions with companies. We
            raised her prices to reflect her expertise and the amount of effort the delivery would
            require. Because we anchored her pricing with her experience and logistical delivery
            considerations, she confidently priced her first 10k retreat proposal. The client said
            yes without hesitation.
          </p>
          <p>
            What we did together was strategy, but it was more about her seeing herself as the
            leader she is in her industry, with the many years of experience she has in her field
            of restorative justice. This is the powerful identity and behavioral work I do with
            all of my clients.
          </p>
          <p>
            The hard part isn&apos;t usually the clarity. It&apos;s following through with what you
            know you need to do. Showing up as the leader you are, enforcing boundaries when things
            get busy, delegating when it feels uncomfortable, and staying in alignment when old
            habits and dynamics pull you back into the day-to-day.
          </p>
          <p>If you want a clear roadmap, the intensive is often enough.</p>
          <p>
            <strong>
              If you are unsure, <a href={recommendationHref}>book a recommendation call</a> or
              start with the <a href={decisionMapHref}>Decision Map Intensive</a>, and we can always
              apply that to the six months if you choose to move forward.
            </strong>
          </p>
        </div>
        <blockquote className={styles.introQuote}>
          <p>
            “Working with Carly leads to drastic change that was needed. My true self was buried
            under 1000 feet of concrete. I had become someone who cared about brands, status, and
            being a cog in the corporate wheel – things I never cared about before.
          </p>
          <p>
            She helped me return to myself. Now, instead of staying up working until 2 am, my days
            include yoga, cooking dinner, choosing my own schedule, and building a business that
            feels right for me.
          </p>
          <p>
            She’s like a wise friend who helps you identify what’s making you feel off, and then
            brings her skills and tools as a seasoned, truth-telling coach to solve it. My therapist
            couldn’t do that. Carly could.”
          </p>
          <footer>—Emily J. · Fractional CFO</footer>
        </blockquote>
        </section>
      </div>

      <section className={styles.option}>
        <div className={styles.optionCopy}>
          <p className={styles.optionLabel}>Option 1</p>
          <h2>Decision Map Intensive</h2>
          <div className={styles.optionColumns}>
            <div>
              <h3>During the session, we will</h3>
              <ul>
                <List>
                  Identify whether the constraint is skill, strategy, space, or something deeper —
                  identity work.
                </List>
                <List>
                  Define behavioral bottlenecks like ‘it’s faster if I do it myself,’ and the shifts
                  required to be the person who brings that goal to life.
                </List>
                <List>Name the key decisions that unlock forward movement</List>
              </ul>
            </div>
            <div>
              <h3>What you leave with your Decision Map</h3>
              <ul>
                <List>30–60 day implementation timeline</List>
                <List>3 concrete operational shifts</List>
                <List>A defined boundary to enforce or dissolve</List>
                <List>A delegation change</List>
                <List>One to three leadership behaviors to practice</List>
                <List>Documented decisions + deadlines</List>
                <List>Curated support resources</List>
              </ul>
            </div>
          </div>
          <p>
            <strong>This is the right place to start when clarity is the primary bottleneck.</strong>
          </p>
          <a className={styles.button} href={decisionMapHref}>
            Book the Decision Map Intensive
          </a>
        </div>
        <Image
          className={styles.squareImage}
          src="/services-intensive-carly.jpg"
          alt="Carly Clark Zimmer seated in a bright room"
          width={1064}
          height={1078}
          unoptimized
        />
      </section>

      <section className={styles.darkSplit}>
        <div>
          <h2>What makes this different from other clarity sessions</h2>
        </div>
        <ul>
          {claritySessionDifferences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={`${styles.option} ${styles.optionReverse}`}>
        <div className={styles.optionCopy}>
          <p className={styles.optionLabel}>Option 2</p>
          <h2>Identity Uplevel</h2>
          <p className={styles.subhead}>Private one-on-one support | Six months</p>
          <p>
            <strong>
              This is where we define the next level of your leadership and systematically build
              the capacity, authority, and behavioral consistency required to sustain it.
            </strong>
          </p>
          <h3>Depending on your goals, we may focus on:</h3>
          <ul>
            <List>
              Leadership evolution with your team so everyone spends less time putting out fires
              and more time on the bigger vision for the business.
            </List>
            <List>
              Identity Restoration Method: My signature method to help you redesign your role,
              whether it be in your company or in your own business. We&apos;re not “faking it until
              you make it” here. We are focused on activating and strengthening your identity and
              leadership authority.
            </List>
            <List>
              Nervous system resilience under executive pressure by prioritizing a customized
              restorative practice for the mind and body
            </List>
            <List>
              Business and Career expansion - we can identify the skills required for you to shift
              your role, career, or business model.
            </List>
          </ul>
          <h3>What this work supports</h3>
          <ul>
            <List>We begin with a full Decision Map Intensive and then implement it over six months.</List>
            <List>Big picture strategic partner to talk through your vision and ideas</List>
            <List>
              Leadership training and hiring support using the Kolbe index to ensure proper team
              expansion
            </List>
            <List>
              Work/life balance plan and accountability to make sure you&apos;re having an enjoyable
              life experience.
            </List>
          </ul>
        </div>
        <Image
          className={styles.portraitImage}
          src="/services-uplevel-carly.jpg"
          alt="Carly Clark Zimmer smiling outdoors"
          width={1002}
          height={1503}
          unoptimized
        />
      </section>

      <section className={styles.detailBand}>
        <div>
          <h3>What changes over six months</h3>
          <ul>
            <List>From overextended operator → strategic leader</List>
            <List>From reactive executor → decisive authority</List>
            <List>From burnout → sustainable expansion</List>
          </ul>
        </div>
        <div>
          <h3>Logistics</h3>
          <ul>
            <List>Three sessions a month</List>
            <List>Voxer support in between</List>
            <List>24-hour response time</List>
            <List>Weekly high-touch accountability check-in and progress update</List>
            <List>Lifetime access to my signature coaching Toolkit Library</List>
          </ul>
          <a className={styles.button} href={recommendationHref}>
            Apply
          </a>
        </div>
      </section>

      <section className={styles.waitSection}>
        <h2>What happens when you wait</h2>
        <ul>
          <List>
            The cost of misdiagnosing the bottleneck - spending time, energy, and money on trying to
            solve the wrong problems
          </List>
          <List>
            The cost of identity lag at senior levels is missed promotions and financial incentives
          </List>
          <List>Avoidant behavior can keep you feeling stuck and resentful, especially at yourself.</List>
          <List>
            Accommodating behavior keeps you from speaking up and activating your authentic voice
            with your clients, your team, or in your relationships
          </List>
          <List>Assuming other people&apos;s burdens keeps you too exhausted to make changes</List>
        </ul>
      </section>

      <section className={styles.club}>
        <p className={styles.optionLabel}>Option 3</p>
        <h2>Laser Coaching Club</h2>
        <div>
          <p>
            You already know what needs to happen. The email, the boundary, the price increase, the
            conversation you have been rewriting in your head for two weeks. You are not confused.
            <strong> You are stuck in the loop between knowing it and doing it.</strong>
          </p>
          <p>The Laser Coaching Club is where that loop ends.</p>
          <p>
            Three live coaching calls a month, an active community with accountability between
            sessions, and AI-powered behavior change tools you can use on yourself and with your own
            clients. No contracts. No content mountain to climb.
          </p>
          <p>
            Just a consistent place to organize your goals and intentions, bring what&apos;s getting
            in the way, and finally follow through with what&apos;s important to you.
          </p>
          <a className={styles.textLink} href="/coaching-club">
            Learn more about the Laser Coaching Club →
          </a>
        </div>
      </section>

      <section className={styles.recommendation}>
        <h2>Which Option is Right for You?</h2>
        <div>
          <p>If you are unsure which container fits, you&apos;re welcome to book a quick recommendation call.</p>
          <p>
            It will quickly clarify whether clarity is the bottleneck or whether ongoing
            implementation support will serve you better.
          </p>
          <a className={styles.button} href={recommendationHref}>
            Book A Recommendation Call
          </a>
        </div>
      </section>

      <section className={styles.finalTestimonial}>
        <blockquote>
          <p>
            “I’ve invested in many programs, including high-ticket ones that left me feeling
            scammed. Carly’s support was worth every penny – I wanted more clients, and I signed
            them, and now I have a system to keep getting them.
          </p>
          <p>Our work together will benefit my business for years to come.”</p>
          <footer>— Rochelle Y. · Founder, Restorative Dialogue Consultant</footer>
        </blockquote>
        <Image
          src="/services-footer-carly.jpg"
          alt="Carly Clark Zimmer, life and leadership coach"
          width={642}
          height={784}
          unoptimized
        />
      </section>
    </>
  );
}
